import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* NAVBAR  */}
      <nav className="w-full h-[92px] left-[1px] px-[220px] py-[16px] gap-0 justify-between bg-[#043873] flex">
        {/* logo */}
        <div className="pt-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={191} // Fixed width
            height={34} // Hug height
          />

        </div>

        {/* second container */}
        <div className="w-[737.5px] h-[60px] gap-[60px] flex items-center">
          <div className="flex w-[549px] list-none gap-[32px] text-white">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </div>

          <div className="w-[126px] h-[60px] gap-[24px] flex">
            <button className="w-[126px] h-[60px] px-[40px] py-[16px] gap-[10px] rounded-[8px] bg-[#FFE492]">
              Login
            </button>
          </div>

        </div>

      </nav>


      {/* HERO-SECTION */}
      <div className="w-full h-[829px] top-[92px] left-[1px] px-[220px] py-[140px] gap-0 bg-[#043873] flex">
        {/* Heading */}
        <div className="w-[656px] h-[361px] gap-[60px]">
          {/* textblock */}
          <div className="w-[656px] h-[238px] gap-[24px]">
            <h2 className="w-[656] h-[154] font-[Inter] text-[64px] text-white font-extrabold leading-[77.45px] tracking-[-0.02em] text-left decoration-skip-none">Get More Done with white space</h2>
            <p className="w-[656px] h-[60px] font-[Inter] text-[18px] text-white font-normal leading-[30px] tracking-[-0.02em] text-left  decoration-skip-none">Project management software that enables your teams to collaborate, plan,<br /> analyze and manage everyday tasks</p>
          </div>

          <button className="w-[219px] h-[63px] p-[20px_0px_0px_0px] justify-center gap-[10px] rounded-[8px] bg-[#4F9CF9] flex">
            <p className="w-[159px] h-[23px] font-[Inter] text-[18px] text-white align-center font-medium leading-[23px] tracking-[-0.02em] text-left  decoration-skip-none">Try Whitepace free</p>
            <div className="flex items-center align-center">
              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="ml-2"
              />
            </div>
          </button>

        </div>

        {/* Image-container */}
        <div className="w-[824px] h-[449px] gap-[4px] bg-[#C4DEFD]">

        </div>
      </div>


      {/* WORK-MANAGEMENT */}
      <div className="w-full h-[1588px] top-[921px] left-[1px] p-[140px_220px_140px_220px] gap-[100px] opacity-0">

        <div className="w-full max-w-[1480px] min-h-[547px] gap-[60px] opacity-0">
          
        </div>



      </div>










    </div>
  );
}
