import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* 
      -----------------------------Navbar------------------------------------------
      --------------------------------------------------------------------------- */}
      <nav className="w-full h-[92px] px-4 lg:px-[220px] py-[16px] flex justify-between items-center bg-[#043873]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={191} // Fixed width for desktop
            height={34} // Fixed height
            className="block"
          />
        </div>

        {/* Menu items */}
        <div className="hidden lg:flex w-[737.5px] h-[60px] items-center justify-between">
          <ul className="flex w-[549px] list-none gap-[32px] text-white">
            <li className="cursor-pointer hover:text-[#FFE492]">Products</li>
            <li className="cursor-pointer hover:text-[#FFE492]">Solutions</li>
            <li className="cursor-pointer hover:text-[#FFE492]">Resources</li>
            <li className="cursor-pointer hover:text-[#FFE492]">Pricing</li>
          </ul>
          <button className="w-[126px] h-[60px] px-[40px] py-[16px] gap-[10px] rounded-[8px] bg-[#FFE492] hover:bg-[#FFD162]">
            Login
          </button>
        </div>

        {/* Hamburger menu (visible on mobile only) */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>


      </nav>



      {/* -------------------------------------HERO-SECTION--------------------------------
      --------------------------------------------------------------------------------- */}
      <div className="w-full h-auto top-[92px] left-[1px] px-[20px] sm:px-[40px] md:px-[80px] lg:px-[220px] py-[40px] sm:py-[80px] lg:py-[140px] gap-0 bg-[#043873] flex flex-col lg:flex-row">
        {/* Heading */}
        <div className="w-full lg:w-[656px] h-auto gap-[60px] mb-8 lg:mb-0">
          {/* Text Block */}
          <div className="w-full lg:w-[656px] h-auto gap-[24px]">
            <h2 className="w-full h-auto font-[Inter] text-[32px] sm:text-[48px] lg:text-[64px] text-white font-extrabold leading-tight text-left decoration-skip-none">
              Get More Done with white space
            </h2>
            <p className="w-full h-auto font-[Inter] text-[14px] sm:text-[16px] lg:text-[18px] text-white font-normal leading-[24px] sm:leading-[28px] lg:leading-[30px] tracking-[-0.02em] text-left decoration-skip-none">
              Project management software that enables your teams to collaborate, plan,<br /> analyze and manage everyday tasks
            </p>
          </div>

          <button className="w-[200px] h-[60px] p-[20px_0px_0px_0px] justify-center gap-[10px] rounded-[8px] bg-[#4F9CF9] flex items-center mt-4 sm:mt-6 lg:mt-8">
            <p className="w-[159px] h-[23px] font-[Inter] text-[16px] sm:text-[18px] text-white font-medium leading-[23px] tracking-[-0.02em] text-left decoration-skip-none">
              Try Whitepace free
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

        {/* Image-container */}
        <div className="w-full lg:w-[824px] h-[300px] sm:h-[400px] lg:h-[449px] bg-[#C4DEFD] mt-4 sm:mt-6 lg:mt-0">
          {/* Image or content can go here */}
        </div>
      </div>



      {/* 
      --------------------------------------------WORK MANAGEMENT---------------------------
      -------------------------------------------------------------------------------------- */}
      <div className="w-full h-auto p-6 sm:p-10 lg:p-[140px_220px_140px_220px] gap-8 flex flex-col">
        {/* Content */}
        <div className="w-full max-w-[1480px] min-h-[547px] gap-8 flex flex-col lg:flex-row">

          {/* Left Section */}
          <div className="w-full max-w-[672px] min-h-[411px] gap-8">
            <div className="w-full max-w-[672px] min-h-[288px] gap-6">
              <h1 className="text-4xl sm:text-4xl lg:text-[72px] font-inter font-bold leading-tight text-left underline-offset-auto decoration-slice">
                <span className="mb-4 block">Project</span>
                Management
              </h1>

              <h2 className="text-base sm:text-lg mt-8 lg:text-[18px] font-inter font-normal leading-relaxed text-left underline-offset-auto decoration-slice">
                Images, videos, PDFs, and audio files are supported. Create math expressions and <br /> diagrams directly from the app. Take photos with the mobile app and save them <br /> to a note.
              </h2>
            </div>

            {/* Button */}
            <button className="w-[219px] h-[63px] p-[20px_0px_0px_0px] justify-center gap-2 rounded-[8px] bg-[#4F9CF9] flex mx-auto sm:mx-0">
              <p className="w-[159px] h-[23px] font-[Inter] text-[18px] text-white align-center font-medium leading-[23px] tracking-[-0.02em] text-left decoration-skip-none">
                Try Whitepace free
              </p>
              <div className="flex items-center align-center">
                <Image src="/arrow.svg" alt="Arrow" width={16} height={16} className="ml-2" />
              </div>
            </button>
          </div>

          {/* Right Image Box */}
          <div className="w-full lg:w-[824px] h-[300px] sm:h-[400px] bg-[#C4DEFD] mt-4 lg:mt-0">
            {/* Image or content for right section */}
          </div>
        </div>

        {/* Second Content Block */}
        <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <Image
            src="/work.png"
            alt="Description"
            width={710}
            height={661}
            className="w-full lg:w-[710px] h-auto"
          />

          <div className="w-full lg:w-[670px] h-auto gap-8 flex flex-col p-4 justify-center items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-[72px] font-inter font-extrabold leading-snug text-left decoration-none">
              Work <br /> together
            </h1>
            <p className="text-base sm:text-lg lg:text-[18px] font-inter font-normal leading-relaxed text-left decoration-none">
              With Whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p>

            {/* Button */}
            <button className="w-[186px] h-[63px] p-[20px_40px] gap-2 rounded-[6px] bg-[#4F9CF9] flex justify-center lg:justify-start">
              <p className="w-full h-full font-[Inter] text-[18px] text-white font-medium leading-[23px] tracking-[-0.02em] text-left decoration-skip-none justify-center items-center flex">
                Try it now
              </p>
              <div className="flex items-center">
                <Image src="/arrow.svg" alt="Arrow" width={16} height={16} className="ml-2" />
              </div>
            </button>
          </div>
        </div>
      </div>



      {/* -------------------------------------------------USE AS EXTENSION SECTION--------------------------------------------
      ---------------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full h-auto p-10 sm:p-16 md:p-20 lg:p-[140px_220px] gap-8 bg-[#043873] overflow-x-hidden flex justify-center">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-8">

          {/* Left Section */}
          <div className="w-full max-w-[697px] h-auto flex flex-col gap-6 items-center justify-center text-center lg:text-left">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-inter font-bold leading-snug lg:leading-[87.14px] tracking-[-0.02em] text-white">
              Use as Extension
            </h1>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-[18px] font-inter font-normal leading-relaxed lg:leading-[30px] tracking-[-0.02em] text-white">
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>

            {/* Button */}
            <button className="w-[186px] sm:w-[220px] h-[63px] p-[16px_32px] gap-[10px] rounded-[6px] bg-[#4F9CF9] mt-6 flex justify-center lg:justify-start">
              <p className="font-[Inter] text-[18px] text-white font-medium leading-[23px] tracking-[-0.02em] text-left">
                Try it now
              </p>
              <div className="flex items-center">
                <Image src="/arrow.svg" alt="Arrow" width={16} height={16} className="ml-2" />
              </div>
            </button>
          </div>

          {/* Right Section */}
          <div className="w-full max-w-[686px] h-auto flex items-center justify-center">
            <div className="w-full max-w-[486px] h-[479px] gap-0 rounded bg-[#C4DEFD] mt-6">
              {/* Content for the right section */}
            </div>
          </div>
        </div>
      </div>





      {/* ---------------------------------------------------CUSTOMIZE TO YOUR NEEDS---------------------------------------------
      ------------------------------------------------------------------------------------------------------------------------ */}
      <div className="w-full h-auto p-10 sm:p-16 md:p-20 lg:p-[140px_220px] flex flex-col lg:flex-row gap-8 lg:gap-[98px] overflow-x-hidden">
        {/* Left Section */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[532.09px] rounded bg-[#C4DEFD]">
          {/* Add your content or image here */}
        </div>

        {/* Right Section */}
        <div className="w-full h-auto flex flex-col gap-6 md:gap-10">
          <div className="w-full h-auto">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-inter font-bold leading-snug lg:leading-[87.14px] tracking-[-0.02em] text-left">
              Customise it to your needs
            </h1>

            {/* Paragraph */}
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-[18px] font-inter font-normal leading-relaxed lg:leading-[30px] tracking-[-0.02em] text-left">
              Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
          </div>
        </div>
      </div>


      {/* 
      -----------------------------------------------YOUR WORK---------------------------------------------------------------
      ----------------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full h-auto bg-[#043873] p-10 sm:p-16 md:p-20 lg:p-[140px_220px] overflow-hidden">
        <div className="w-full max-w-screen-xl mx-auto h-auto gap-8">
          <div className="w-full h-auto text-center sm:text-left gap-6">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-inter font-bold text-white leading-snug lg:leading-[87.14px] tracking-[-0.02em]">
              Your work, everywhere you are
            </h1>

            {/* Paragraph */}
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-[18px] text-white font-normal leading-relaxed lg:leading-[30px] tracking-[-0.02em]">
              Access your notes from your computer, phone or tablet by synchronising with various services, including Whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
            </p>
          </div>
        </div>
      </div>


      {/* 
      ------------------------------------------------OUR SPONSORS-------------------------------------------------
      ------------------------------------------------------------------------------------------------------------- */}
      <div className="w-full max-w-screen-xl h-auto p-10 sm:p-16 md:p-20 lg:p-[140px_220px] gap-8 mx-auto overflow-x-hidden">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-inter font-bold leading-tight text-black text-center decoration-skip-ink-none">
          Our Sponsors
        </h1>

        <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-4 sm:gap-6 md:gap-8 mt-8">
          {/* Image 1 */}
          <div className="flex-shrink-0">
            <Image
              src="/apple.png"
              alt="Apple Logo"
              width={55}
              height={68}
              className="h-auto max-h-[68px] object-contain"
            />
          </div>
          {/* Image 2 */}
          <div className="flex-shrink-0">
            <Image
              src="/Microsoft.png"
              alt="Microsoft Logo"
              width={220}
              height={62}
              className="h-auto max-h-[62px] object-contain"
            />
          </div>
          {/* Image 3 */}
          <div className="flex-shrink-0">
            <Image
              src="/Slack.png"
              alt="Slack Logo"
              width={200}
              height={71}
              className="h-auto max-h-[71px] object-contain"
            />
          </div>
          {/* Image 4 */}
          <div className="flex-shrink-0">
            <Image
              src="/Google.png"
              alt="Google Logo"
              width={170}
              height={70}
              className="h-auto max-h-[70px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* 
      -------------------------------------------------FOOTER--------------------------------------------------
      --------------------------------------------------------------------------------------------------------- */}
      <footer className="w-full p-8 sm:p-[32px_64px] lg:p-[140px_220px] bg-[#043873] flex flex-col gap-8 lg:gap-[200px] overflow-hidden">
        <div className="w-full flex flex-wrap gap-8 lg:gap-[100px]">
          {/* First Column */}
          <div className="flex-1 max-w-[295px]">
            <Image
              src="/Logo.png"
              alt="description"
              width={191}
              height={34}
            />
            <p className="mt-4 text-[14px] sm:text-[16px] lg:text-[18px] text-white font-light leading-[24px] sm:leading-[30px] tracking-[-0.02em]">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Second Column */}
          <div className="flex-1 max-w-[295px]">
            <p className="text-[16px] sm:text-[18px] text-white font-bold leading-[22px] tracking-[-0.02em]">
              Product
            </p>
            <ul className="mt-2 space-y-2">
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Overview
              </li>
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Pricing
              </li>
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Customer stories
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex-1 max-w-[295px]">
            <p className="text-[16px] sm:text-[18px] text-white font-bold leading-[22px] tracking-[-0.02em]">
              Resources
            </p>
            <ul className="mt-2 space-y-2">
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Blog
              </li>
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Guides and tutorials
              </li>
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Help center
              </li>
            </ul>
          </div>

          {/* Fourth Column */}
          <div className="flex-1 max-w-[295px]">
            <p className="text-[16px] sm:text-[18px] text-white font-bold leading-[22px] tracking-[-0.02em]">
              Company
            </p>
            <ul className="mt-2 space-y-2">
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                About us
              </li>
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Careers
              </li>
              <li className="text-[14px] sm:text-[16px] text-white font-normal leading-[20px] tracking-[-0.02em]">
                Media kit
              </li>
            </ul>
          </div>
        </div>
      </footer>


















    </div>
  );
}
