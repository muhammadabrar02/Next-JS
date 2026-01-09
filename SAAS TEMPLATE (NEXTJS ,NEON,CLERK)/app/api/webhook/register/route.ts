import { Webhook, WebhookEvent } from "svix";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET in .env");
  }

  // Get raw headers from the request
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    // Verify the webhook
    evt = wh.verify(body, {
      svix_id,
      svix_timestamp,
      svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  const eventType = evt.type;

  // Handle user.created event
  if (eventType === "user.created") {
    try {
      const { email_addresses, primary_email_address_id } = evt.data;

      // Find primary email
      const primaryEmailObj = email_addresses.find(
        (emailObj: { id: string }) =>
          emailObj.id === primary_email_address_id
      );

      if (!primaryEmailObj) {
        throw new Error("No primary email found");
      }

      // Create user in PostgreSQL via Prisma
      const newUser = await prisma.user.create({
        data: {
          id: evt.data.id!,
          email: primaryEmailObj.email_address,
          isSubscribed: false,
        },
      });

      console.log("New user created in DB:", newUser);
    } catch (err) {
      console.error("Error creating user in database:", err);
      return new Response("Error creating user in DB", { status: 400 });
    }
  }

  return new Response("Webhook received successfully", { status: 200 });
}


// import { webhook } from "svix";
// import { headers } from "next/headers";
// import { WebhookEvent } from "@clerk/nextjs/server";
// import prisma from "@/lib/prisma";

// export async function POST(req: Request) {

//     const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

//     if (!WEBHOOK_SECRET) {
//         throw new Error("Please add webhook secret in env")
//     }

//     const headerPayload = headers();
//     const svix_ic = headerPayload.get(" svix-id");
//     const svix_timestamp = headerPayload.get(" svix-timestamp");
//     const svix_signature = headerPayload.get(" svix-signature");

//     if (!svix_id || !svix_timestamp || !svix_signature) {

//         return new Response("Error occured - No Svix headers ", { status: 400 });
//     }

//     const payload = await req.json();
//     const body = JSON.stringify(payload);

//     const wh = new webhook.Webhook(WEBHOOK_SECRET);

//     let evt : WebhookEvent;

//     try{
//         evt = wh.verify(body,
//             {
//                 svix_id: svix_ic,
//                 svix_timestamp: svix_timestamp,
//                 svix_signature: svix_signature
//             }
//         ); as WebhookEvent; 
//     }catch(err){
//         console.error ("Error verifying webhook ",err )
//         return new Response ("Error occured ", {status: 400  }) 

//     }

//     const {id} = evt.data
//   const eventType = evt.type; 

//   //logs 

//   if(eventtype === "user.created"){
//     try{
//         const {email_addresses , primary_email_address_id } = evt.data;
//         //log practice 
//         const primaryEmailObj = email_addresses.find((emailObj: { id: string }) => emailObj.id === primary_email_address_id); 
//          if(!primaryEmailObj){
//             throw new Error ("No primary email found ",{status: 400})
//          }  

//          //create a user in neon (postgresql)

//          const newUser = await prisma.user.create({
//             data: {
//                 id: evt.data.id!,
//                 email:  primaryEmailObj.email_address,
//                 isSubscribed: false 
//             }
//          })
//          console.log("new user created in DB ", newUser)



//     }catch(err){
//         console.error("Error creating user in database ", err)
//         return new Response ("Error occured ", {status: 400  }) 
//     }

//   }

//   return new Response ("Webhook received succcessfully ", {status: 200  })

// }