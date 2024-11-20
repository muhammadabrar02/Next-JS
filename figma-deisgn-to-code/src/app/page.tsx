import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <nav className="flex w-1322 h-91 border-pink-500">
        <div className=" h-58 mt-17 ml-136 w-187 p-custom gap-2.5  ">
          <h3 className="text-white font-montserrat text-24 font-bold leading-32 tracking-0.1 text-left">
            BrandName 
          </h3>
        </div>

        {/* second section  */}
        <div className="w-815 h-58 mt-16 ml-59 ">
          <div className="mt-17 absolute w-hug h-hug  flex list-none gap-21 text-white">
            <li className="w-43 h-24 ">Home</li>
            <li className="w-43 h-24 ">Product</li>
            <li className="w-43 h-24 ">Pricing</li>
            <li className="w-43 h-24 ">Contact</li>

          </div>

          <div className="w-189 h-52 mt-3 ml-626 gap-45 flex">
            <div className="w-41 h-22">
              <div className="w-41 h-22">
                <button className="w-41 text-white h-12 font-montserrat text-14 font-700 leading-22 tracking-0.2 text-right">
                  Login
                </button>
              </div>

            </div>

            <div className="w-214 h-52">
              <div className="w-41 h-22">
                <button className="bg-customBlue w-110 h-52 mt-0 p-custo text-14 font-bold  text-700 gap-15 rounded-5-tl text-white  mb-20">
                  JOIN US

                </button>
              </div>

            </div>



          </div>

        </div>

      </nav>

      {/* content container */}
      <div className=" w-1046 h-1028 mt-104 ml-197 p-cust gap-80 flex justify-center">
        <div className=" w-699 h-496 pt-104 pb-40 gap-40">
          <h5 className="text-customBlue font-montserrat text-[16px] font-bold leading-24 mb-5 tracking-[0.1px] text-left flex justify-center">Welcome</h5>
          <h1 className="text-white font-montserrat text-[58px] font-bold leading-[80px] tracking-[0.2px] text-center">
            Selling on the  <br /> internet like a pro
          </h1>
          <h4 className="font-montserrat text-[20px] text-white font-light leading-[30px] tracking-[0.2px] text-center pt-9">We know how large objects will act, but things on  <br />a small scale just do not act that way. </h4>
          {/* Buttons   */}
          <div className="w-365 h-52 gap-10 mx-auto mt-9">
            {/* button 1  */}
            <button className="w-[193px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-[5px] bg-customBlue text-white">
              Get Quote Now
            </button>
            {/* button 2  */}
            <button className="w-[162px] h-[52px] px-[40px] py-[15px] gap-[10px] rounded-tl-[5px] border-t-0 border-l-0 border-b-0 border-r-0 text-customBlue justify-center">
              Learn More
            </button>
          </div>

          {/* Card Section  */}
          <div className="justify-center  mt-[92px]  w-full h-[292px] gap-[30px] flex">
            {/* first container  */}
            <div className="w-[328px] h-[292px] p-[35px] gap-[20px] bg-white ">
              <div className="w-[70px] h-[76px] p-[22px] gap-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px] bg-customkhaki">

              </div>
              <h5 className="w-[135px] h-[24px] mt-4 font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left">
                training Courses
              </h5>
              {/* line */}
              <div className="w-[50px] h-[2px] mt-4 bg-custompeach">

              </div>

              <p className="w-[222px] h-[60px] font-montserrat text-[14px] font-normal leading-[20px] text-customgray mt-5 tracking-[0.2px] text-left">
                The gradual accumulation of
                information about atomic and
                small-scale behaviour...
              </p>

            </div>
            {/* second container  */}
            <div className="w-[328px] h-[292px] p-[35px] gap-[20px] bg-white ">
              <div className="w-[70px] h-[76px] p-[22px] gap-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px] bg-customgreenlight">

              </div>
              <h5 className="w-[168px] h-[24px] mt-4 font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-left">
                2.769 online courses
              </h5>
              {/* line */}
              <div className="w-[50px] h-[2px] mt-4 bg-custompeach">

              </div>

              <p className="w-[222px] h-[60px] font-montserrat text-[14px] font-normal leading-[20px] text-customgray mt-5 tracking-[0.2px] text-left">
                The gradual accumulation of
                information about atomic and
                small-scale behaviour...
              </p>

            </div>
            {/* third container  */}

            <div className="w-[328px] h-[292px] p-[35px] gap-[20px] bg-customskyblue ">
              <div className="w-[70px] h-[76px] p-[22px] gap-[10px] rounded-tl-[10px] rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px] bg-white">

              </div>
              <h5 className="w-[135px] h-[24px] mt-4 font-montserrat text-[16px] text-white font-bold leading-[24px] tracking-[0.1px] text-left">
                training Courses
              </h5>
              {/* line */}
              <div className="w-[50px] h-[2px] mt-4 bg-white">

              </div>

              <p className="w-[222px] h-[60px] font-montserrat text-[14px] font-normal leading-[20px] text-white mt-5 tracking-[0.2px] text-left">
                The gradual accumulation of
                information about atomic and
                small-scale behaviour...
              </p>

            </div>



          </div>

        </div>

      </div>


    </div>
  );
}
