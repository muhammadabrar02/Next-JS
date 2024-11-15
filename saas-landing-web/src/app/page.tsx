import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* 
      -----------------------------Navbar-----------------------------------------
      --------------------------------------------------------------------------- */}
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


      {/* -------------------------------------HERO-SECTION--------------------------------
      --------------------------------------------------------------------------------- */}
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

      {/* 
      --------------------------------------------WORK MANAGEMENT---------------------------
      -------------------------------------------------------------------------------------- */}
      <div className="w-full h-[1588px] top-[921px] left-[1px] p-[140px_220px_140px_220px] gap-[100px] flex flex-col ">

        {/* content */}
        <div className="w-full max-w-[1480px] min-h-[547px] gap-[60px] flex ">
          <div className="w-full max-w-[672px] min-h-[411px] gap-[60px]">
            <div className="w-full max-w-[672px] min-h-[288px] gap-[24px]">
              <h1 className="w-[672px] h-[174px] gap-0 font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left underline-offset-auto decoration-slice">Project Management</h1>
              <h2 className="w-[672px] h-[90px] gap-0 font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left underline-offset-auto decoration-slice">Images, videos, PDFs and audio files are supported. Create math expressions and <br /> diagrams directly from the app. Take photos with the mobile app and save them <br /> to a note.</h2>
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


          <div className="w-[824px] h-[449px] gap-[4px] bg-[#C4DEFD]">

          </div>

        </div>
        {/* content */}
        <div className="w-full h-[661px]  flex  justify-center">

          <Image
            src="/work.png" // Replace with your image path
            alt="Description"
            width={710}
            height={661}
            className="gap-0"
          // style={{ backgroundColor: '#A7CEFC' }}
          />

          <div className="w-[670px] h-full gap-[60px]  flex flex-col p-4 justify-center items-start">
            <div className="w-[670px] h-[171px] gap-[24px] flex flex-col  justify-center items-center">
              <h1 className="w-[670px] h-[87px] gap-0 font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left decoration-none">
                Work together
              </h1>
              <p className="w-[670px] h-[60px] gap-0 font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left  decoration-none">
                With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
              </p>
            </div>
            <button className="w-[186px] h-[63px] p-[20px_40px_20px_40px] gap-[10px] rounded-[6px] bg-[#4F9CF9] flex">
              <p className="w-full h-full font-[Inter] text-[18px] text-white font-medium leading-[23px] tracking-[-0.02em] text-left decoration-skip-none justify-center items-center flex">
                Try it now
              </p>
              <div className="flex items-center">
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






        </div>







      </div>

      {/* -------------------------------------------------USE AS EXTENSION SECTION--------------------------------------------
      ---------------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full h-[750px] top-[2509px] left-[1px] p-[140px_220px_140px_220px] gap-[98px] bg-[#043873] overflow-x-hidden flex justify-center">
        <div className="w-[697px] h-[294px] gap-[60px] flex  items-center justify-center">
          <div className="w-[620px] h-[171px] gap-[24px] flex-col ">
            <h1 className="w-[697px] h-[87px] gap-0 font-inter text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left text-white decoration-skip-ink-none">
              Use as Extension
            </h1>
            <p className="w-[697px] h-[60px] gap-0 font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left text-white decoration-skip-ink-none">
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>

            <button className="w-[186px] h-[63px] p-[20px_40px_20px_40px] gap-[10px] rounded-[6px] bg-[#4F9CF9] mt-6 flex">
              <p className="w-full h-full font-[Inter] text-[18px] text-white font-medium leading-[23px] tracking-[-0.02em] text-left decoration-skip-none justify-center items-center flex">
                Try it now
              </p>
              <div className="flex items-center">
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

          <div className="w-[686px] h-[479px] gap-[4px] flex items-center mt-4 justify-center">
            <div className="w-[486px] h-[479px] gap-0 rounded mt-6 bg-[#C4DEFD]">
            </div>
          </div>
        </div>
      </div>


      {/* ---------------------------------------------------CUSTOMIZE TO YOUR NEEDS---------------------------------------------
      ------------------------------------------------------------------------------------------------------------------------ */}
      <div className="w-full h-[812.09px] top-[3268px] left-[1px] p-[140px_220px_140px_220px] gap-[98px] flex overflow-x-hidden">
        <div className="w-full h-[532.09px] gap-[4px] rounded bg-[#C4DEFD]">

        </div>
        <div className="w-full h-[411px] gap-[60px]">
          <div className="w-full h-[288px] gap-[24px]">
            <h1 className="w-full h-[174px] gap-0 font-inter text-[72px] font-bold leading-[87.14px] overflow-x-hidden tracking-[-0.02em] text-left decoration-skip-ink-none">
              Customise it
              to your needs
            </h1>
            <p className="w-full h-[90px] gap-0 font-inter text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left decoration-skip-ink-none">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>


          </div>

        </div>

      </div>

      {/* 
      -----------------------------------------------YOUR WORK---------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full h-auto top-[4080px] left-[1px] p-[140px_220px_140px_220px] gap-0 bg-[#043873] overflow-hidden">
        <div className="w-full max-w-[1481px] h-auto gap-[60px]">
          <div className="w-full h-auto gap-[24px]">
            <h1 className="w-full h-[87px] gap-0 font-inter text-[72px] text-white font-bold leading-[87.14px] tracking-[-0.02em] text-left decoration-skip-ink-none">
              Your work, everywhere you are
            </h1>
            <p className="w-full h-[60px] gap-0 font-inter text-[18px] text-white font-normal leading-[30px] tracking-[-0.02em] text-center decoration-skip-ink-none">
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
          </div>
        </div>
      </div>

      {/* 
      ------------------------------------------------OUR SPONSORS-------------------------------------------------
      ------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full max-w-screen-xl h-auto top-[4654px] p-[140px_220px_140px_220px] gap-[100px] mx-auto overflow-x-hidden">
        <h1 className="w-full h-[87px] gap-0 font-inter text-[72px] text-black font-bold leading-[87.14px] tracking-[-0.02em] text-center decoration-skip-ink-none">
          Our sponsors
        </h1>

        <div className="w-full max-w-full h-[71px] flex justify-between items-center">
          {/* Image 1 */}
          <Image
            src="/apple.png"
            alt="description"
            width={55.47} // width property as required
            height={68}   // height property as required
          />
          {/* Image 2 */}
          <Image
            src="/Microsoft.png"
            alt="description"
            width={220} // width property as required
            height={62}   // height property as required
          />
          {/* Image 3 */}
          <Image
            src="/Slack.png"
            alt="description"
            width={200} // width property as required
            height={71}   // height property as required
          />
          {/* Image 4 */}
          <Image
            src="/Google.png"
            alt="description"
            width={170}// width property as required
            height={69.81}   // height property as required
          />
        </div>
      </div>
      {/* 
      -------------------------------------------------FOOTER-------------------------------------------------
      -------------------------------------------------------------------------------------------------------- */}
      <footer className="w-full h-[461px] top-[5195px] left-[1px] p-[140px_220px_32px_220px] gap-[200px] bg-[#043873] overflow-hidden">
        <div className="w-full h-[289px] gap-[100px]">
          <div className="w-full h-[169px] gap-[100px] flex">
            {/* first column */}
            <div className="w-[295px] h-[169px] gap-[15px]">
              <Image
                src="/Logo.png"
                alt="description"
                width={191} // width property as required
                height={34} // height property as required
              />
              <p className="w-[240px] h-[120px] gap-0 font-inter text-[18px] text-white mt-2 font-light leading-[30px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                whitepace was created for the new ways we live and work. We make a better workspace around the world
              </p>
            </div>
            {/* second column */}
            <div className="w-[295px] h-[127px] gap-[15px]">
              <p className="w-[68px] h-[22px] gap-0 font-inter text-[18px] text-white font-bold leading-[21.78px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Product
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Overview
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Pricing
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Customer stories
              </p>
            </div>
            {/* third column */}
            <div className="w-[295px] h-[127px] gap-[15px]">
              <p className="w-[68px] h-[22px] gap-0 font-inter text-[18px] text-white font-bold leading-[21.78px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Resources
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Blog
              </p>
              <p className="w-[200px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Guides and tutorials
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Help center
              </p>
            </div>
            {/* fourth column */}
            <div className="w-[295px] h-[127px] gap-[15px]">
              <p className="w-[68px] h-[22px] gap-0 font-inter text-[18px] text-white font-bold leading-[21.78px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Company
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                About us
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Careers
              </p>
              <p className="w-[70px] h-[20px] gap-0 text-white mt-2 font-inter text-[16px] font-normal leading-[20px] tracking-[-0.02em] text-left decoration-skip-ink-none">
                Media kit
              </p>
            </div>
          </div>
        </div>
      </footer>


















    </div>
  );
}
