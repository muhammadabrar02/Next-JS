import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* TopBar  */}
      <div className="sm:w-full h-[34px] p-2 bg-black flex items-center justify-center overflow-x-hidden">
        <p className="w-[301px] h-[16px] gap-0 text-white justify-center flex font-satoshi text-[12px] font-normal leading-[16.2px] text-left md:">
          Sign up and get 20% off to your first order.
          <span className="font-satoshi text-[12px] font-medium leading-[16.2px] text-left underline decoration-solid custom-span text-white">
            Sign up now
          </span>
        </p>
      </div>

      {/* Navbar */}
      <div className="sm:w-full h-[70px] border-2 border-red-600 flex justify-center items-center relative md:hidden">
        {/* Hamburger Icon */}
        <div className="absolute left-4 flex items-center">
          <Image
            src="/hamburger.png"
            alt="Hamburger Icon"
            width={24}
            height={24}
            style={{
              padding: '4.88px 2.63px',
              gap: '0px',
            }}
          />
        </div>

        {/* Logo */}
        <h1
          className="text-center font-[900] text-[25.2px] leading-[30.24px] decoration-skip-ink-none"
          style={{
            fontFamily: 'Integral CF',
            textUnderlinePosition: 'from-font',
          }}
        >
          SHOP.CO
        </h1>

        {/* Right Container */}
        <div
          className="absolute right-4 flex gap-[12px] items-center"
        >
          {/* Search Icon */}
          <Image
            src="/search.png"
            alt="Search Icon"
            width={24}
            height={24}
            style={{
              padding: '1.86px 1.87px 1.87px 1.86px',
              gap: '0px',
            }}
          />
          {/* Cart Icon */}
          <Image
            src="/cart.png"
            alt="Cart Icon"
            width={24}
            height={24}
            style={{
              padding: '1.86px 1.87px 1.87px 1.86px',
              gap: '0px',
            }}
          />
          {/* User Icon */}
          <Image
            src="/user.png"
            alt="User Icon"
            width={24}
            height={24}
            style={{
              padding: '1.86px 1.87px 1.87px 1.86px',
              gap: '0px',
            }}
          />
        </div>

      </div>

      {/* Desktop Navbar (Visible only on medium screens and above) */}
      <div className="hidden md:flex h-[80px] justify-between items-center p-4 bg-blue-200 border-2 border-red-400">
        <div className="w-[1240px] h-[48px] mx-auto relative  left-[100px] gap-[40px] border-2 border-red-500 flex">
          <h1 className="w-[160px] h-[22px] gap-0 font-[Integral CF] text-[32px] font-extrabold leading-[38.4px] text-left decoration-skip-[ink]">
            SHOP.CO
          </h1>
          <div className="w-[321px] h-[22px] gap-[24px]">
            <div className="w-[57px] h-[22px] gap-[24px] flex">
              <p className="w-[37px] mt-2 h-[22px] gap-0 font-[Satoshi] text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink] flex">
                Shop
                <Image
                  src="/dropdown.png"
                  alt="User Icon"
                  width={16}
                  height={16}
                  style={{
                    padding: '1.86px 1.87px 1.87px 1.86px',
                    gap: '0px',
                  }}
                />

              </p>
              <p className="font-[Satoshi] mt-2 h-[22px] border-2 border-red-500 text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink]">
                on Sale
              </p>




            </div>


          </div>



        </div>
      </div>








    </div>

  );
}
