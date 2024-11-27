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
        <p className="text-[16px] font-[400] leading-[22px] text-left md:w-[545px] md:h-[33px] md:top-[310px] md:left-[100px] md:gap-0 md:absolute font-[Satoshi] text-[#00000099] text-underline-position-[from-font] decoration-skip-ink-none">
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

      {/* Brands Container Mobile */}
      <div className="sm:w-full h-[146px] flex flex-wrap justify-between gap-[12px] border-2 p-4 border-red-500 bg-[#000000] md:hidden">
        <Image
          src="/versace.svg"
          alt="Search Icon"
          width={44}
          height={44}
          style={{
            width: '116.74px',
            height: '23.25px',
            objectFit: 'cover', // Ensures the image fits the area correctly
          }}
          className="sm:w-full sm:h-auto sm:mb-2"
        />

        <Image
          src="/zara.svg"
          alt="Search Icon"
          width={44}
          height={44}
          style={{
            width: '63.81px',
            height: '26.63px',
            objectFit: 'cover', // Ensures the image fits the area correctly
          }}
          className="sm:w-full sm:h-auto sm:mb-2"
        />

        <Image
          src="/gucci.svg"
          alt="Search Icon"
          width={44}
          height={44}
          style={{
            width: '109.39px',
            height: '25.24px',
            padding: '1.3px 0px 1.3px 0px', // Adds padding to the image
            objectFit: 'cover', // Ensures the image fits the area correctly
          }}
          className="sm:w-full sm:h-auto sm:mb-2"
        />

        <Image
          src="/prada.svg"
          alt="Search Icon"
          width={44}
          height={44}
          style={{
            width: '127px',
            height: '21px',
            padding: '0.26px 0px 0.26px 0px', // Adds padding to the image
            objectFit: 'cover', // Ensures the image fits the area correctly
          }}
          className="sm:w-full sm:h-auto sm:mb-2"
        />

        <Image
          src="/calvinklien.svg"
          alt="Search Icon"
          width={44}
          height={44}
          style={{
            width: '134.84px',
            height: '21.75px',
            objectFit: 'cover', // Ensures the image fits the area correctly
          }}
          className="sm:w-full sm:h-auto sm:mb-2"
        />
      </div>

      {/* Brands Container Desktop */}

      <div className="hidden md:flex w-full h-[122px] relative top-[660px] gap-[80px] items-center justify-center border-2 border-red-500 bg-black">
        <Image
          src="/versace.svg"
          alt="Versace Icon"
          width={166.48}
          height={33.16}
          style={{
            width: '166.48px',
            height: '33.16px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/zara.svg"
          alt="Zara Icon"
          width={91}
          height={38}
          style={{
            width: '91px',
            height: '38px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/gucci.svg"
          alt="Gucci Icon"
          width={156}
          height={36}
          style={{
            width: '156px',
            height: '36px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/prada.svg"
          alt="Prada Icon"
          width={194}
          height={31.2}
          style={{
            width: '194px',
            height: '31.2px',
            objectFit: 'contain',
          }}
        />
        <Image
          src="/calvinklien.svg"
          alt="Calvin Klein Icon"
          width={194}
          height={31.2}
          style={{
            width: '194px',
            height: '31.2px',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* New Arrivals Container Mobile */}
      <div className="sm:w-full h-[550px] border-2 border-red-500  md:hidden">
        <p className="font-integral text-32px mt-[24px] font-extrabold leading-[38.4px] text-center underline-from-font decoration-none sm:text-2xl sm:leading-[2.5rem] sm:mt-6 md:text-3xl md:leading-[2.75rem] lg:text-4xl lg:leading-[3rem]">
          NEW ARRIVALS
        </p>

        <div className="w-full h-[215px] border-2 border-red-500 absolute top-[1217px] gap-[20px] flex justify-center">
          {/* first container */}
          <div className="relative w-full h-full">
            {/* Image Section */}
            <Image
              src="/shirt1.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />

            {/* Title Text */}
            <div className="absolute left-[10px] top-[220px] font-bold w-[200px] h-[22px] text-left">
              T-shirt with Tape Details
            </div>

            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[260px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>

            {/* Price */}
            <p className="absolute left-[10px] top-[300px] font-bold text-black">$120</p>
          </div>
          {/* second container */}
          <div className="relative w-full h-full">
            {/* Image Section */}
            <Image
              src="/jeans.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />

            {/* Title Text */}
            <div className="absolute left-[10px] top-[220px] font-bold w-[200px] h-[22px] text-left">
              T-shirt with Tape Details
            </div>

            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[260px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>

            {/* Price */}
            <p className="absolute left-[10px] top-[300px] font-bold text-black">$240</p>
            <p className="absolute left-[55px] top-[300px] font-bold text-gray-500 line-through">$260</p>
            {/* Discount Box */}
            <div className="absolute w-[60px] h-[30px] flex items-center justify-center bg-red-200 left-[95px] top-[300px] text-red-400 text-xs font-bold rounded-[24px]">
              -20%
            </div>
          </div>
          <button className="w-full h-[60px] absolute top-[350px]  gap-0 text-black font-bold rounded-[16px] border-2 border-gray-300">
            View All
          </button>
        </div>
      </div>

      {/* New Arrivals Container Desktop */}
      <div className="hidden md:flex flex-col w-full h-[780px] relative top-[660px] items-center justify-center border-2 border-red-500">
        <p className="font-[IntegralCF] text-[48px] mb-5 font-[700] leading-[57.6px] text-center underline-from-font decoration-none hidden md:block">
          NEW ARRIVALS
        </p>
        <div className="flex flex-row gap-[50px]">
          {/* Third container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/shirt1.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              T-shirt with Tape Details
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>
            {/* Price */}
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$120</p>

          </div>
          {/* second container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/jeans.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              Skinny Fit Jeans
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$240</p>
            <p className="absolute left-[55px] top-[365px] font-bold text-gray-500 line-through">$260</p>
            {/* Discount Box */}
            <div className="absolute w-[60px] h-[30px] flex items-center justify-center bg-red-200 left-[95px] top-[365px] text-red-400 text-xs font-bold rounded-[24px]">
              -20%
            </div>
          </div>
          {/* Third container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/checkshirt.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              CHECKERED SHIRT
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>
            {/* Price */}
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$180</p>

          </div>
          {/* fourth container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/sleeveshirt.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              SLEEVE STRIPED T-SHIRT
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>
            {/* Price */}
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$130</p>
            <p className="absolute left-[55px] top-[365px] font-bold text-gray-500 line-through">$160</p>
            {/* Discount Box */}
            <div className="absolute w-[60px] h-[30px] flex items-center justify-center bg-red-200 left-[95px] top-[365px] text-red-400 text-xs font-bold rounded-[24px]">
              -30%
            </div>
          </div>
        </div>
        <button className="w-[218px] h-[52px] absolute top-[700px]  gap-0 text-black font-bold rounded-[30px] border-2 border-gray-300">
          View All
        </button>


      </div>
      

      {/* Top Selling Container Mobile */}
      <div className="sm:w-full h-[550px] border-2 border-red-500  md:hidden">
        <p className="font-integral text-32px mt-[24px] font-extrabold leading-[38.4px] text-center underline-from-font decoration-none sm:text-2xl sm:leading-[2.5rem] sm:mt-6 md:text-3xl md:leading-[2.75rem] lg:text-4xl lg:leading-[3rem]">
          TOP SELLING
        </p>

        <div className="w-full h-[215px] border-2 border-red-500 absolute top-[1800px] gap-[20px] flex justify-center">
          {/* first container */}
          <div className="relative w-full h-full">
            {/* Image Section */}
            <Image
              src="/vstripshirt.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />

            {/* Title Text */}
            <div className="absolute left-[10px] top-[220px] font-bold w-[200px] h-[22px] text-left">
              Vertical Striped shirt
            </div>

            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[260px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>

            {/* Price */}
            <p className="absolute left-[10px] top-[300px] font-bold text-black">$212</p>
            <p className="absolute left-[55px] top-[300px] font-bold text-gray-500 line-through">$235</p>
            {/* Discount Box */}
            <div className="absolute w-[60px] h-[30px] flex items-center justify-center bg-red-200 left-[95px] top-[300px] text-red-400 text-xs font-bold rounded-[24px]">
              -20%
            </div>
          </div>
          {/* second container */}
          <div className="relative w-full h-full">
            {/* Image Section */}
            <Image
              src="/orangeshirt.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />

            {/* Title Text */}
            <div className="absolute left-[10px] top-[220px] font-bold w-[200px] h-[22px] text-left">
              Courage Graphic T-shirt
            </div>

            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[260px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>

            {/* Price */}
            <p className="absolute left-[10px] top-[300px] font-bold text-black">$120</p>
          </div>
          <button className="w-full h-[60px] absolute top-[350px]  gap-0 text-black font-bold rounded-[16px] border-2 border-gray-300">
            View All
          </button>
        </div>
      </div>

      {/* Top Selling Container Desktop */}
      <div className="hidden md:flex flex-col w-full h-[780px] relative top-[660px] items-center justify-center border-2 border-red-500">
       
        <p className="font-[IntegralCF] text-[48px] mb-5 font-[700] leading-[57.6px] text-center underline-from-font decoration-none hidden md:block">
          TOP SELLING
        </p>
        <div className="flex flex-row gap-[50px]">
          {/* Third container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/vstripshirt.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              Vertical Striped Shirt
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">5.0/5</div>
            </div>
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$212</p>
            <p className="absolute left-[55px] top-[365px] font-bold text-gray-500 line-through">$232</p>
            {/* Discount Box */}
            <div className="absolute w-[60px] h-[30px] flex items-center justify-center bg-red-200 left-[95px] top-[365px] text-red-400 text-xs font-bold rounded-[24px]">
              -20%
            </div>

          </div>
          {/* second container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/orangeshirt.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              Courage Graphic T-shirt
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.0/5</div>
            </div>
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$145</p>

          </div>
          {/* Third container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/looseshort.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              Loose Fit Bermuda shorts
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">3.0/5</div>
            </div>
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$80</p>

          </div>
          {/* fourth container */}
          <div className="relative w-[300px] h-[300px]">
            {/* Image Section */}
            <Image
              src="/skinnyjeans.png" // Replace with your image path
              alt="Description of Image" // Add a description for accessibility
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the entire space without distortion
              className="rounded-tl-[13.42px]" // Optional for rounding corners
            />
            {/* Title Text */}
            <div className="absolute left-[10px] top-[315px] font-bold w-[200px] h-[22px] text-left">
              Faded Skinny Jeans
            </div>
            {/* Stars & Rating */}
            <div className="absolute left-[10px] top-[335px] flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      d="M9.049 2.927a1 1 0 011.902 0l2.1 4.26 4.704.686a1 1 0 01.554 1.707l-3.4 3.314.802 4.654a1 1 0 01-1.45 1.054L10 15.348l-4.181 2.198a1 1 0 01-1.45-1.054l.802-4.654-3.4-3.314a1 1 0 01.554-1.707l4.704-.686 2.1-4.26z"
                    />
                  </svg>
                ))}
              </div>
              <div className="ml-2 text-gray-600">4.5/5</div>
            </div>
            {/* Price */}
            <p className="absolute left-[10px] top-[365px] font-bold text-black">$210</p>

          </div>
        </div>
        <button className="w-[218px] h-[52px] absolute top-[700px]  gap-0 text-black font-bold rounded-[30px] border-2 border-gray-300">
          View All
        </button>


      </div>

      <div className="w-full">
        <div>
         
        </div>
      </div>








































    </div>

  );
}
