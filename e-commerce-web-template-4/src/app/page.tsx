import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* // Hero Section */}
      <section className="relative h-[900px] bg-gradient-to-r from-white via-pink-50/50 to-pink-100/30">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column with Lamp and Content */}
          <div className="space-y-2  lg:space-y-10 flex flex-row justify-start">
            <div className="relative pr-10 w-32 h-40 sm:w-40 sm:h-48 lg:w-48 lg:h-56 xl:w-56 xl:h-64">
              <Image
                src="/lamp.png"
                alt="Black Pendant Lamp"
                fill
                className="object-cover"  // Changed to object-cover
                priority
              />
            </div>


            <div className="space-y-3 mt-[20px] ml-7">
              <p className="text-pink-500 font-medium tracking-wide ">
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-3xl font-josefin sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.2]">
                New Furniture Collection Trends in 2020
              </h1>
              <p className="text-gray-600 max-w-xl text-base sm:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.
              </p>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column with Chair Image */}
          <div className="relative ">


            {/* Chair Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
              <Image
                src="/sofa.png"
                alt="Pink Velvet Chair"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-8 sm:mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-pink-200"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-pink-200"></div>
        </div>

      </section>
      {/* Features Section */}
      <section className="border-2 border-red-400 w-full h-auto mt-2 flex justify-center items-center">
        <div className="border-2 border-green-500 h-auto w-full max-w-[1020px]">
          {/* Featured Products */}
          <div className="py-8 px-4 border-2 border-red-400 h-auto">
            <h2 className="text-3xl font-bold text-[#1A0B5B] font-josefin text-center text-gray-900 mb-8">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Product Card 1 */}
              <div className="bg-white w-full border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 bg-[#F6F7FB]">
                  <img
                    src="/product1.png"
                    alt="Product 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md h-full w-full">
                  <h2 className="text-xl md:text-2xl font-lato font-semibold text-pink-500 text-center mb-4">
                    Cantilever Chair
                  </h2>
                  <div className="flex justify-between gap-3 mb-4">
                    <div className="w-12 md:w-16 h-3 bg-[#05E6B7] rounded-md"></div>
                    <div className="w-12 md:w-16 h-3 bg-[#F701A8] rounded-md"></div>
                    <div className="w-12 md:w-16 h-3 bg-[#00009D] rounded-md"></div>
                  </div>
                  <p className="text-sm md:text-lg text-[#151875] text-center mb-2">Code - Y523201</p>
                  <p className="text-lg md:text-xl font-semibold text-[#151875] text-center">$42.00</p>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white border w-full border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-56 bg-[#F6F7FB]">
                  {/* Product Image */}
                  <img
                    src="/product2.png" // Replace with actual image path
                    alt="Product 2"
                    className="object-cover w-full h-full"
                  />

                  {/* Top-left Icons */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {/* Cart Icon */}
                    <div className="bg-[#E6E3FF] p-2 rounded-full">
                      <Image
                        src="/cart.png" // Replace with actual cart icon path
                        alt="Cart Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    {/* Heart Icon */}
                    <div className="bg-white border border-blue-400 p-2 rounded-full">
                      <Image
                        src="/heart.png" // Replace with actual heart icon path
                        alt="Heart Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    {/* Search Icon */}
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Image
                        src="/searchplus.png" // Replace with actual search icon path
                        alt="Search Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Green Button */}
                  <button
                    className="absolute top-[190px] left-[65px] mb-4 w-[94px] h-[29px] bg-green-500 hover:bg-green-600 text-white text-sm 
  flex justify-center items-center gap-0 rounded-tl-sm "
                  >
                    View Details
                  </button>

                </div>

                {/* Card Content */}
                <div className="bg-[#2F1AC4] p-8">
                  {/* Heading */}
                  <h2 className="text-3xl font-lato font-semibold text-white text-center mb-6">
                    Cantilever Chair
                  </h2>

                  {/* Colored Rectangles */}
                  <div className="flex justify-between gap-3 mb-6">
                    <div className="w-16 h-3 bg-[#05E6B7] rounded-md"></div>
                    <div className="w-16 h-3 bg-[#F701A8] rounded-md"></div>
                    <div className="w-16 h-3 bg-[#FFEAC1] rounded-md"></div>
                  </div>

                  {/* Product Code */}
                  <p className="text-xl text-white text-center mb-4">Code - Y523201</p>

                  {/* Price */}
                  <p className="text-2xl font-semibold text-white text-center">$42.00</p>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="bg-white w-full border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 bg-[#F6F7FB]">
                  <img
                    src="/product3.png"
                    alt="Product 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md h-full w-full">
                  <h2 className="text-xl md:text-2xl font-lato font-semibold text-pink-500 text-center mb-4">
                    Cantilever Chair
                  </h2>
                  <div className="flex justify-between gap-3 mb-4">
                    <div className="w-12 md:w-16 h-3 bg-[#05E6B7] rounded-md"></div>
                    <div className="w-12 md:w-16 h-3 bg-[#F701A8] rounded-md"></div>
                    <div className="w-12 md:w-16 h-3 bg-[#00009D] rounded-md"></div>
                  </div>
                  <p className="text-sm md:text-lg text-[#151875] text-center mb-2">Code - Y523201</p>
                  <p className="text-lg md:text-xl font-semibold text-[#151875] text-center">$42.00</p>
                </div>
              </div>
              {/* Product Card 4 */}
              <div className="bg-white w-full border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 bg-[#F6F7FB]">
                  <img
                    src="/product4.png"
                    alt="Product 1"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md h-full w-full">
                  <h2 className="text-xl md:text-2xl font-lato font-semibold text-pink-500 text-center mb-4">
                    Cantilever Chair
                  </h2>
                  <div className="flex justify-between gap-3 mb-4">
                    <div className="w-12 md:w-16 h-3 bg-[#05E6B7] rounded-md"></div>
                    <div className="w-12 md:w-16 h-3 bg-[#F701A8] rounded-md"></div>
                    <div className="w-12 md:w-16 h-3 bg-[#00009D] rounded-md"></div>
                  </div>
                  <p className="text-sm md:text-lg text-[#151875] text-center mb-2">Code - Y523201</p>
                  <p className="text-lg md:text-xl font-semibold text-[#151875] text-center">$42.00</p>
                </div>
              </div>




            </div>
          </div>
          {/* Progress Indicators  */}
          <div className="flex border-2 ml-auto border-red-400 justify-center items-center gap-2 mt-8">
            {/* Progress 1 */}
            <div
              className="w-24 h-2 rounded-full"
              style={{ backgroundColor: "#FB2E86" }}
            ></div>

            {/* Progress 2 */}
            <div
              className="w-16 h-2 rounded-full"
              style={{ backgroundColor: "#FEBAD7" }}
            ></div>

            {/* Progress 3 */}
            <div
              className="w-16 h-2 rounded-full"
              style={{ backgroundColor: "#FEBAD7" }}
            ></div>

            {/* Progress 4 */}
            <div
              className="w-16 h-2 rounded-full"
              style={{ backgroundColor: "#FEBAD7" }}
            ></div>
          </div>
          {/* Latest Products */}
          <div className="py-8 px-4 border-2 border-red-400 h-auto">
            <h2 className="text-3xl font-bold text-[#1A0B5B] font-josefin text-center text-gray-900 mb-8">
              Latest Products
            </h2>

            {/* <!-- Options Container --> */}
            <div className="flex justify-center gap-8 mb-8">
              {/* <!-- New Arrival Option --> */}
              <div className="text-center">
                <h3 className="text-xl font-semibold" style={{ color: "#FB4997" }}>
                  New Arrival
                </h3>
              </div>

              {/* <!-- Best Seller Option --> */}
              <div className="text-center">
                <h3 className="text-xl font-semibold" style={{ color: "#151875" }}>
                  Best Seller
                </h3>
              </div>

              {/* <!-- Featured Option --> */}
              <div className="text-center">
                <h3 className="text-xl font-semibold" style={{ color: "#151875" }}>
                  Featured
                </h3>
              </div>

              {/* <!-- Special Offer Option --> */}
              <div className="text-center">
                <h3 className="text-xl font-semibold" style={{ color: "#151875" }}>
                  Special Offer
                </h3>
              </div>
            </div>

            {/* Latest Products container */}
            <div className="py-8 px-4 border-2 w-full border-green-400 h-auto">
              {/* <!-- Latest Products Heading --> */}
              <h2 className="text-3xl font-bold text-[#1A0B5B] font-josefin text-center text-gray-900 mb-8">
                Latest Products
              </h2>

              {/* <!-- Product Container with Image and Info --> */}
              <div className="flex justify-between gap-x-4 mb-8">
                {/* <!-- Product Container 1 --> */}
                <div className="flex border-2 border-red-400 flex-col justify-center mb-8 w-1/3">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="comforthandy.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[300px] max-h-[306px]"
                    />
                  </div>

                  {/* <!-- Product Information (Heading, Price) --> */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* <!-- Product Heading --> */}
                    <h3 className="text-sm font-semibold text-[#151875] font-josefin mb-2">
                      Comfort Handy Craft
                    </h3>

                    {/* <!-- Price Section --> */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-[#151875] mr-2">$42.00</p>
                        <p className="text-sm font-semibold text-red-500 line-through">$65.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Product Container 2 --> */}
                <div className="flex border-2 border-red-400 flex-col justify-center mb-8 w-1/3">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="yellowchair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[365px] max-h-[306px]"
                    />
                  </div>

                  {/* <!-- Product Information (Heading, Price) --> */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* <!-- Product Heading --> */}
                    <h3 className="text-sm font-semibold text-[#151875] font-josefin mb-2">
                      Comfort Handy Craft
                    </h3>

                    {/* <!-- Price Section --> */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-[#151875] mr-2">$42.00</p>
                        <p className="text-sm font-semibold text-red-500 line-through">$65.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Product Container 3 --> */}
                <div className="flex border-2 border-red-400 flex-col justify-center mb-8 w-1/3">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="whitechair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[300px] max-h-[306px]"
                    />
                  </div>

                  {/* <!-- Product Information (Heading, Price) --> */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* <!-- Product Heading --> */}
                    <h3 className="text-sm font-semibold text-[#151875] font-josefin mb-2">
                      Comfort Handy Craft
                    </h3>

                    {/* <!-- Price Section --> */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-[#151875] mr-2">$42.00</p>
                        <p className="text-sm font-semibold text-red-500 line-through">$65.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Product Container with Image and Info  Row 2--> */}
              <div className="flex justify-between gap-x-4 mb-8">
                {/* <!-- Product Container 1 --> */}
                <div className="flex border-2 border-red-400 flex-col justify-center mb-8 w-1/3">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="graysofa.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[300px] max-h-[306px]"
                    />
                  </div>

                  {/* <!-- Product Information (Heading, Price) --> */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* <!-- Product Heading --> */}
                    <h3 className="text-sm font-semibold text-[#151875] font-josefin mb-2">
                      Comfort Handy Craft
                    </h3>

                    {/* <!-- Price Section --> */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-[#151875] mr-2">$42.00</p>
                        <p className="text-sm font-semibold text-red-500 line-through">$65.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Product Container 2 --> */}
                <div className="flex border-2 border-red-400 flex-col justify-center mb-8 w-1/3">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="blackchair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[365px] max-h-[306px]"
                    />
                  </div>

                  {/* <!-- Product Information (Heading, Price) --> */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* <!-- Product Heading --> */}
                    <h3 className="text-sm font-semibold text-[#151875] font-josefin mb-2">
                      Comfort Handy Craft
                    </h3>

                    {/* <!-- Price Section --> */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-[#151875] mr-2">$42.00</p>
                        <p className="text-sm font-semibold text-red-500 line-through">$65.00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Product Container 3 --> */}
                <div className="flex border-2 border-red-400 flex-col justify-center mb-8 w-1/3">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="goldenchair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[300px] max-h-[306px]"
                    />
                  </div>

                  {/* <!-- Product Information (Heading, Price) --> */}
                  <div className="flex flex-row justify-between items-center w-full">
                    {/* <!-- Product Heading --> */}
                    <h3 className="text-sm font-semibold text-[#151875] font-josefin mb-2">
                      Comfort Handy Craft
                    </h3>

                    {/* <!-- Price Section --> */}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-2">
                        <p className="text-sm font-bold text-[#151875] mr-2">$42.00</p>
                        <p className="text-sm font-semibold text-red-500 line-through">$65.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* What Shopex Offer Container */}
              <h2 className="text-3xl font-bold text-[#1A0B5B] font-josefin text-center text-gray-900 mb-8">
                What Shopex Offer!
              </h2>

              {/* Card Container with Flex */}
              <div className="flex justify-center space-x-4 mb-8">
                {/* First Card */}
                <div className="relative w-[270px] h-[320px] border-2  rounded-lg shadow-lg p-4">
                  {/* Image Container */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src="deliverybus.png"
                      alt="Image"
                      className="object-contain w-[200px] h-[150px]"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-[#151875] mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Second Card */}
                <div className="relative w-[270px] h-[320px] border-2  rounded-lg shadow-lg p-4">
                  {/* Image Container */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src="cashback.png"
                      alt="Image"
                      className="object-contain w-[200px] h-[150px]"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-[#151875] mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Third Card */}
                <div className="relative w-[270px] h-[320px] border-2  rounded-lg shadow-lg p-4">
                  {/* Image Container */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src="premium-quality.png"
                      alt="Image"
                      className="object-contain w-[200px] h-[150px]"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-[#151875] mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                {/* Fourth Card */}
                <div className="relative w-[270px] h-[320px] border-2  rounded-lg shadow-lg p-4">
                  {/* Image Container */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src="hourssupport.png"
                      alt="Image"
                      className="object-contain w-[200px] h-[150px]"
                    />
                  </div>
                  {/* Card Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-[#151875] mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>


            </div>





          </div>

        </div>
      </section>





    </>

  );
}
