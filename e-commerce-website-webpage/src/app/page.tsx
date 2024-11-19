import Image from "next/image";


export default function Home() {
  return (
    <div>

      {/* TopBar  */}
      <div className="sm:w-full h-[34px] p-2 bg-black flex items-center justify-center overflow-x-hidden md:w-full">
        <p className="w-full h-[16px] gap-0 text-white justify-center flex font-satoshi text-[12px] font-normal leading-[16.2px] text-left md:text-[16px]">
          Sign up and get 20% off to your first order.
          <span className="font-satoshi text-[12px] font-medium leading-[16.2px] text-left underline decoration-solid custom-span text-white md:text-[16px]">
            Sign up now
          </span>
        </p>
      </div>




      {/* Navbar */}
      <div className="sm:w-full h-[70px] flex justify-center items-center relative md:hidden">
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
      <div className="hidden md:flex w-full h-[80px] justify-between items-center p-4">
        <div className="w-[1240px] h-[48px] mx-2 relative  left-[100px] gap-[55px] flex ">
          <h1 className="w-[160px] h-[22px] gap-0 font-[Integral CF] text-[32px] font-extrabold leading-[38.4px] text-left decoration-skip-[ink]">
            SHOP.CO
          </h1>
          <div className="w-[321px] h-[22px] gap-[24px]">
            <div className="w-full h-[35px] gap-[24px] mt-1 flex justify-center items-center">
              <p className="w-[37px] h-[22px] gap-0 font-[Satoshi] text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink] flex items-center">
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

              <p className="font-[Satoshi] h-[22px] text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink] flex items-center">
                On Sale
              </p>

              <p className="font-[Satoshi] h-[22px] text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink] flex items-center">
                New Arrivals
              </p>

              <p className="font-[Satoshi] h-[22px] text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink] flex items-center">
                Brands
              </p>
            </div>

          </div>

          {/* Search Bar  */}
          <div className="w-[577px] h-[48px] p-[12px_16px] gap-[12px] rounded-[62px_62px_62px_62px] bg-[#F0F0F0] flex">
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
            <p className="font-[Satoshi] text-[16px] font-normal leading-[21.6px] text-left decoration-skip-[ink] bg[#000000] text-opacity-40">
              Search for products....
            </p>

          </div>

          {/* Right icons box  */}
          <div className="w-[62px] h-[24px] gap-[14px] flex justify-center my-2">
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
      </div>

      {/* Hero Section Mobile */}
      <div className="sm:w-full h-[890px] flex flex-col bg-[#F2F0F1] border-2 border-red-400 md:hidden p-4 gap-4  ">
        {/* Heading */}
        <p className="text-[36px] font-extrabold leading-[34px] text-left">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>

        {/* Description */}
        <p className="font-satoshi text-sm font-normal leading-5 text-left">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>

        {/* Button */}
        <button
          className="w-full h-[52px] font-bold py-[16px] gap-[12px] rounded-[62px] bg-black text-white flex items-center justify-center"
        >
          Shop Now
        </button>

        {/* Figures container 1 */}
        <div className="w-full h-[280px] flex justify-center items-center relative">
          <div className="w-[310px] h-[52px] absolute top-[30px] flex justify-between">
            {/* First Figure */}
            <div className="w-[130px]  h-auto max-h-[48px] gap-0 flex flex-col">
              <p className="w-[64px] h-[32px] gap-0 font-satoshi text-[24px] font-bold leading-[32.4px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
                200+
              </p>
              <p className="w-[140px] h-[22px] gap-0 font-satoshi text-[12px] font-normal leading-[22px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
                International Brands
              </p>
            </div>

            {/* Separator Line */}
            <div className="w-[55px] mt-6 h-0 gap-0 border-t border-black/10 rotate-[-90deg]"></div>

            {/* Second Figure */}
            <div className="w-[130px]  h-auto max-h-[48px] gap-0 flex flex-col">
              <p className="w-[64px] h-[32px] gap-0 font-satoshi text-[24px] font-bold leading-[32.4px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
                2,000+
              </p>
              <p className="w-[140px] h-[22px] gap-0 font-satoshi text-[12px] font-normal leading-[22px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
                High-Quality Products
              </p>
            </div>
          </div>
          {/* 3rd container  */}
          <div className="w-[130px] mt-[90px] ml-0 h-auto max-h-[48px] gap-0 flex justify-center items-center flex-col">
            <p className="w-[64px] h-[32px] gap-0 font-satoshi text-[24px] font-bold leading-[32.4px] text-center text-underline-position-from-font text-decoration-skip-ink-none">
              30,000+
            </p>
            <p className="w-[140px] h-[22px] gap-0 font-satoshi text-[12px] font-normal leading-[22px] text-center text-underline-position-from-font text-decoration-skip-ink-none">
              Happy Customers
            </p>
          </div>


        </div>

        {/* image container */}
        <div className="w-full max-w-[390px] h-auto max-h-[448px] border-2 border-red-400 mx-auto flex justify-center items-center relative">

          {/* Vector 2 */}
          <Image
            src="/Vector2.svg"
            alt="Search Icon"
            width={44}
            height={44}
            style={{
              // position: 'absolute',
              top: '640px',
              left: '27px',
              width: '44px',
              height: '44px',
              gap: '0px',
              opacity: '1',
              objectFit: 'cover', // Ensures the image fits the area correctly
            }}
          />

          <Image
            src="/herosecimg.png"
            alt="Search Icon"
            width={360}
            height={448}
            style={{
              objectFit: 'cover', // Ensure the image covers the container area without stretching
              gap: '0px',
              padding: '1.86px 1.87px 1.87px 1.86px',
            }}
          />

          {/* Vector 1 */}
          <Image
            src="/Vector.svg"
            alt="Vector Icon"
            width={76}
            height={76}
            style={{
              objectFit: 'cover', // Ensure the image covers the container area without stretching
              gap: '0px',
              padding: '1.86px 1.87px 1.87px 1.86px',
            }}
          />
        </div>

      </div>

      {/* Hero Section Desktop  */}
      <div className="hidden md:block md:w-full h-[655px] top-[120px] gap-0 border-2 border-red-400 absolute bg-[#F2F0F1]">
        <p className="text-[64px] font-[Integral CF] font-[800] leading-[64px] text-left md:w-[577px] md:h-[173px] md:top-[90px] md:left-[100px] md:gap-0 md:absolute text-underline-position-[from-font] decoration-skip-ink-none">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
        <p className="text-[16px] font-[400] leading-[22px] text-left md:w-[545px] md:h-[33px] md:top-[330px] md:left-[100px] md:gap-0 md:absolute font-[Satoshi] text-[#00000099] text-underline-position-[from-font] decoration-skip-ink-none">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="w-[210px] h-[52px] absolute top-[395px] left-[100px] p-[16px_54px_16px_54px] gap-[12px] rounded-[62px_62px_62px_62px] bg-black text-white flex justify-center items-center">
          Shop Now
        </button>

        {/* Figures Container  */}
        <div className="w-[596px] h-[74px] absolute top-[490px] left-[100px] gap-[32px] flex items-center justify-between flex">
          {/* First Figure */}
          <div className="w-[130px] h-auto max-h-[48px] gap-0 flex flex-col">
            <p className="w-[64px] h-[32px] gap-0 font-satoshi text-[24px] font-bold leading-[32.4px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
              200+
            </p>
            <p className="w-[140px] h-[22px] gap-0 font-satoshi text-[12px] font-normal leading-[22px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
              International Brands
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-[55px] h-0 gap-0 border-t border-black/10 rotate-[-90deg]"></div>

          {/* Second Figure */}
          <div className="w-[130px] h-auto max-h-[48px] gap-0 flex flex-col">
            <p className="w-[64px] h-[32px] gap-0 font-satoshi text-[24px] font-bold leading-[32.4px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
              2,000+
            </p>
            <p className="w-[140px] h-[22px] gap-0 font-satoshi text-[12px] font-normal leading-[22px] text-left text-underline-position-from-font text-decoration-skip-ink-none">
              High-Quality Products
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-[55px] h-0 gap-0 border-t border-black/10 rotate-[-90deg]"></div>

          {/* 3rd container */}
          <div className="w-[130px]  ml-0 h-auto max-h-[48px] gap-0 flex justify-center items-center flex-col">
            <p className="w-[64px] h-[32px] gap-0 font-satoshi text-[24px] font-bold leading-[32.4px] text-center text-underline-position-from-font text-decoration-skip-ink-none">
              30,000+
            </p>
            <p className="w-[140px] h-[22px] gap-0 font-satoshi text-[12px] font-normal leading-[22px] text-center text-underline-position-from-font text-decoration-skip-ink-none">
              Happy Customers
            </p>
          </div>

        </div>
        {/* Image Outer Container */}
        <div className="border-2 border-red-500 h-[650px] w-[590px] absolute right-0">
          {/* Image Container */}
          <div className="w-[590px] h-[650px] border-2 border-red-400 mx-auto flex justify-center items-center relative">

            {/* Vector 2 */}
            <Image
              src="/Vector2.svg"
              alt="Search Icon"
              width={44}
              height={44}
              style={{
                top: '640px',
                left: '27px',
                width: '44px',
                height: '44px',
                opacity: '1',
                objectFit: 'cover', // Ensures the image fits the area correctly
              }}
            />

            <Image
              src="/herosecimg.png"
              alt="Hero Image"
              width={590}
              height={650}
              style={{
                objectFit: 'cover', // Ensures the image covers the container area without stretching
                padding: '1.86px 1.87px 1.87px 1.86px',
              }}
            />

            {/* Vector 1 */}
            <Image
              src="/Vector.svg"
              alt="Vector Icon"
              width={76}
              height={76}
              style={{
                objectFit: 'cover', // Ensures the image covers the container area without stretching
                padding: '1.86px 1.87px 1.87px 1.86px',
              }}
            />
          </div>
        </div>









      </div>



















    </div>

  );
}
