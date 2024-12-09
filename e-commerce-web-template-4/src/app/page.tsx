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
      <section className="w-full h-auto mt-2 flex justify-center items-center">
        <div className="h-auto w-full max-w-[1020px]">
          {/* Featured Products */}
          <div className="py-8 px-4 h-auto">
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
          <div className="flex ml-auto  justify-center items-center gap-2 mt-8">
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
          <div className="py-8 px-4  h-auto">
            <h2 className="text-3xl font-bold text-[#1A0B5B] font-josefin text-center text-gray-900 mb-8">
              Latest Products
            </h2>

            {/* <!-- Options Container --> */}
            <div className="flex justify-center gap-8 mb-8 flex-wrap">
              {/* <!-- New Arrival Option --> */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{ color: "#FB4997" }}>
                  New Arrival
                </h3>
              </div>

              {/* <!-- Best Seller Option --> */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{ color: "#151875" }}>
                  Best Seller
                </h3>
              </div>

              {/* <!-- Featured Option --> */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{ color: "#151875" }}>
                  Featured
                </h3>
              </div>

              {/* <!-- Special Offer Option --> */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{ color: "#151875" }}>
                  Special Offer
                </h3>
              </div>
            </div>



            {/* Latest Products container */}
            <div className="py-8 px-4 w-full h-auto">


              {/* <!-- Product Container with Image and Info --> */}
              <div className="flex flex-wrap justify-center mb-8">
                {/* Product Container 1 */}
                <div className="flex  flex-col justify-start gap-1 mb-8 max-w-[260px]">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="comforthandy.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[260px] max-h-[306px]"
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
                <div className="flex flex-col justify-center mb-8 max-w-[260px]">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="yellowchair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[260px] max-h-[306px]"
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
                <div className="flex flex-col justify-center mb-8 max-w-[260px]">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="whitechair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[260px] max-h-[306px]"
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
              {/* <!-- Product Container with Image and Info row 2--> */}
              <div className="flex flex-wrap justify-center mb-8">
                {/* Product Container 1 */}
                <div className="flex flex-col justify-start gap-1 mb-8 max-w-[260px]">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="graysofa.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[240px] max-h-[306px]"
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
                <div className="flex flex-col justify-center mb-8 max-w-[260px]">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] h-full flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="blackchair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[260px] max-h-[306px]"
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
                <div className="flex flex-col justify-center mb-8 max-w-[260px]">
                  {/* <!-- Product Image Container --> */}
                  <div className="bg-[#F7F7F7] h-full flex justify-center items-center relative">
                    {/* <!-- Image --> */}
                    <img
                      src="goldenchair.png"
                      alt="Product Image"
                      className="object-contain w-full h-full max-w-[230px] max-h-[306px]"
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

              {/* Card Container with Flex (responsive) */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                  </div>
                </div>
              </div>



            </div>





          </div>

        </div>
      </section>
      {/* Trending Product Section  */}
      <section className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 bg-[#F1F0FF] overflow-x-hidden">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1050px] 2xl:w-[1050px] h-[550px] flex flex-col sm:flex-row justify-between items-center p-6 mx-auto">
          {/* Image and Circle */}
          <div className="relative w-full sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[50%] 2xl:w-[50%] h-[200px] flex-shrink-0 mx-auto mb-4 sm:mb-0 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-[#F5E1FC] rounded-full">
              <Image
                src="/purplesofa.png"
                alt="Product Image"
                className="rounded-full"
                layout="intrinsic"
                width={300} // Adjust the size of the image here
                height={300} // Adjust the size of the image here
                objectFit="cover"
              />
            </div>
          </div>

          {/* Text Block on the Right */}
          <div className="flex flex-col justify-between ml-6 w-full sm:w-[60%] md:w-[60%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%]">
            {/* Heading */}
            <h2 className="text-[#151875] text-2xl font-semibold text-center sm:text-left">
              Unique Features Of Latest & Trending Products
            </h2>

            {/* Bullet Points */}
            <ul className="list-none mt-4 space-y-2 text-center sm:text-left">
              <li className="flex items-start gap-2 text-[#ACABC3]">
                <span className="text-xl text-[#F52B70]">•</span> All frames constructed with hardwood solids and laminates
              </li>
              <li className="flex items-start gap-2 text-[#ACABC3]">
                <span className="text-xl text-[#2B2BF5]">•</span> Reinforced with double wood dowels, glue, screw - nails corner blocks, and machine nails
              </li>
              <li className="flex items-start gap-2 text-[#ACABC3]">
                <span className="text-xl text-[#2BF5CC]">•</span> Arms, backs and seats are structurally reinforced
              </li>
            </ul>

            {/* Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 justify-center sm:justify-start">
              <button className="bg-[#F52B70] text-white px-6 py-2 rounded-md">Add to Cart</button>
              <div className="flex items-start flex-col space-x-2 text-[#151875] px-4 py-2 rounded-md mt-4 sm:mt-0 sm:ml-4">
                <span className="font-bold">B&B Italian Sofa</span>
                <span>$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trending Products Listing  */}
      <section className="flex flex-col justify-center items-center py-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-[#1A0B5B] mt-6 font-josefin text-center text-gray-900 mb-8">
          Trending Products
        </h2>

        {/* Card Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* First Card */}
          <div className="w-full sm:w-[300px] lg:w-[320px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-[250px] p-4">
              {/* Image with gap from top and sides */}
              <div className="relative w-full h-full p-4 bg-[#F5F6F8] border-2 border-white flex items-center justify-center">
                <Image
                  src="/tchair1.png" // Replace with your image
                  alt="Cantilever Chair"
                  layout="intrinsic" // Keeps the aspect ratio intact
                  width={300} // Specify a width to control size
                  height={250} // Specify height to control size
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center px-4 py-6">
              {/* Product Heading */}
              <h3 className="text-[#151875] text-xl font-semibold text-center">Cantilever Chair</h3>

              {/* Price */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="text-[#151875] text-lg font-bold">$26.00</span>
                <span className="text-gray-400 line-through text-lg">$42.00</span>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full sm:w-[300px] lg:w-[320px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-[250px] p-4">
              {/* Image with gap from top and sides */}
              <div className="relative w-full h-full p-4 bg-[#F5F6F8] border-2 border-white flex items-center justify-center">
                <Image
                  src="/tchair2.png" // Replace with your image
                  alt="Cantilever Chair"
                  layout="intrinsic" // Keeps the aspect ratio intact
                  width={300} // Specify a width to control size
                  height={250} // Specify height to control size
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center px-4 py-6">
              {/* Product Heading */}
              <h3 className="text-[#151875] text-xl font-semibold text-center">Cantilever Chair</h3>

              {/* Price */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="text-[#151875] text-lg font-bold">$26.00</span>
                <span className="text-gray-400 line-through text-lg">$42.00</span>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="w-full sm:w-[300px] lg:w-[320px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-[250px] p-4">
              {/* Image with gap from top and sides */}
              <div className="relative w-full h-full p-4 bg-[#F5F6F8] border-2 border-white flex items-center justify-center">
                <Image
                  src="/tchair3.png" // Replace with your image
                  alt="Cantilever Chair"
                  layout="intrinsic" // Keeps the aspect ratio intact
                  width={300} // Specify a width to control size
                  height={250} // Specify height to control size
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center px-4 py-6">
              {/* Product Heading */}
              <h3 className="text-[#151875] text-xl font-semibold text-center">Cantilever Chair</h3>

              {/* Price */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="text-[#151875] text-lg font-bold">$26.00</span>
                <span className="text-gray-400 line-through text-lg">$42.00</span>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="w-full sm:w-[300px] lg:w-[320px] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-[250px] p-4">
              {/* Image with gap from top and sides */}
              <div className="relative w-full h-full p-4 bg-[#F5F6F8] border-2 border-white flex items-center justify-center">
                <Image
                  src="/tchair4.png" // Replace with your image
                  alt="Cantilever Chair"
                  layout="intrinsic" // Keeps the aspect ratio intact
                  width={300} // Specify a width to control size
                  height={250} // Specify height to control size
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col items-center justify-center px-4 py-6">
              {/* Product Heading */}
              <h3 className="text-[#151875] text-xl font-semibold text-center">Cantilever Chair</h3>

              {/* Price */}
              <div className="mt-2 flex items-center justify-center gap-2">
                <span className="text-[#151875] text-lg font-bold">$26.00</span>
                <span className="text-gray-400 line-through text-lg">$42.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* under Trending products secitons */}
      <section className="flex flex-wrap justify-center items-center gap-4">
        {/* first Box */}
        <div className="w-full sm:w-[420px] h-[400px] gap-0 p-2 bg-[#FFF6FB] relative">
          {/* Heading */}
          <h2 className="text-[#151875] font-bold text-xl text-start">23% off in all products</h2>

          {/* Shop Now (underlined and pink) */}
          <p className="text-pink-500 text-start underline mt-2">Shop Now</p>

          {/* Image in the bottom-right */}
          <div className="absolute bottom-0 right-0">
            <Image
              src="/clock.png"
              alt="Clock"
              width={213}
              height={207}
              className="left-[576px]"
            />
          </div>
        </div>

        {/* second Box */}
        <div className="w-full sm:w-[420px] h-[400px] gap-0 p-2 bg-[#EEEFFB] relative">
          {/* Heading */}
          <h2 className="text-[#151875] font-bold text-xl text-start">23% off in all products</h2>

          {/* Shop Now (underlined and pink) */}
          <p className="text-pink-500 text-start underline mt-2">Shop Now</p>

          {/* Image in the bottom-right */}
          <div className="absolute bottom-0 right-0">
            <Image
              src="/shelf.png"
              alt="Shelf"
              width={213}
              height={207}
              className="left-[576px]"
            />
          </div>
        </div>

        <section className="flex flex-col items-center space-y-4 mt-4">
          {/* First Product Card */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg flex flex-col sm:flex-row">
            {/* Image Container (Left side) */}
            <div className="w-full sm:w-[120px] h-[120px] bg-gray-200 p-4 flex items-center justify-center">
              <Image
                src="/ch1.png"
                alt="Product 1"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            {/* Product Details (Right side) */}
            <div className="p-4">
              <h3 className="text-[#151875] font-bold text-lg">Executive Seat Chair</h3>
              <p className="text-[#151875] text-xl mt-2">$32.00</p>
            </div>
          </div>

          {/* Second Product Card */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg flex flex-col sm:flex-row">
            {/* Image Container (Left side) */}
            <div className="w-full sm:w-[120px] h-[120px] bg-gray-200 p-4 flex items-center justify-center">
              <Image
                src="/ch2.png"
                alt="Product 2"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            {/* Product Details (Right side) */}
            <div className="p-4">
              <h3 className="text-[#151875] font-bold text-lg">Executive Seat Chair</h3>
              <p className="text-[#151875] text-xl mt-2">$32.00</p>
            </div>
          </div>

          {/* Third Product Card */}
          <div className="w-full sm:w-[300px] bg-white shadow-lg flex flex-col sm:flex-row">
            {/* Image Container (Left side) */}
            <div className="w-full sm:w-[120px] h-[120px] bg-gray-200 p-4 flex items-center justify-center">
              <Image
                src="/ch3.png"
                alt="Product 3"
                width={120}
                height={120}
                className="object-cover"
              />
            </div>

            {/* Product Details (Right side) */}
            <div className="p-4">
              <h3 className="text-[#151875] font-bold text-lg">Executive Seat Chair</h3>
              <p className="text-[#151875] text-xl mt-2">$32.00</p>
            </div>
          </div>
        </section>
      </section>
      {/* Discount Item section  */}
      <section className="flex flex-col h-[880px] mt-6 w-full items-center space-y-6 px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A0B5B] font-josefin text-center text-gray-900 mb-8">
          Discount Item
        </h2>

        <div className=" w-full max-w-[1280px] h-[750px] p-4 sm:p-6 lg:p-8">
          {/* Options Container */}
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-6">
            <span className="text-[#FB4997] underline cursor-pointer">Wood Chair</span>
            <span className="text-[#151875] cursor-pointer">Plastic Chair</span>
            <span className="text-[#151875] cursor-pointer">Sofa Collection</span>
          </div>

          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Content Container */}
            <div className="max-w-lg space-y-4 text-center lg:text-left">
              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-bold text-[#151875]">
                20% Discount Of All Products
              </h1>
              {/* Subheading */}
              <p className="text-lg sm:text-xl text-[#FB2E86] font-semibold">
                Eams Sofa Compact
              </p>
              {/* Description */}
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
              </p>
              {/* Options with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-[#7569B2]">&#10003;</span>
                  <p className="text-gray-500">Material expose like metals</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#7569B2]">&#10003;</span>
                  <p className="text-gray-500">Clear lines and geometric figures</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#7569B2]">&#10003;</span>
                  <p className="text-gray-500">Simple neutral colours.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#7569B2]">&#10003;</span>
                  <p className="text-gray-500">Material expose like metals</p>
                </div>
              </div>
              {/* Button */}
              <button className="px-6 py-2 bg-[#FB2E86] text-white rounded-[8px] hover:bg-pink-700">
                Shop Now
              </button>
            </div>

            {/* Image Container */}
            <div className="relative flex justify-center items-center w-full max-w-md mt-8 lg:mt-0">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-[#FCECF1] rounded-full w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[384px] lg:h-[384px]"></div>
              {/* Image */}
              <div className="relative w-full h-full flex justify-center items-center">
                <Image
                  src="/brsofachair.png" // Replace this with the actual path to your image
                  alt="Sofa"
                  width={320}
                  height={320}
                  className="object-cover rounded-full w-3/4 h-3/4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Categories section */}
      <section className="py-10">
        {/* Heading */}
        <h2 className="text-center font-josefin text-[#151875] text-3xl font-bold mb-8">
          Top Categories
        </h2>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            {/* Circle with bottom-left border */}
            <div className="relative w-32 h-32 bg-[#F6F7FB] rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/catc1.png" // Replace with your image URL
                alt="Mini LCW Chair"
                width={128}
                height={128}
                className="object-cover"
              />
              {/* Bottom-left border */}
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  borderLeft: "4px solid #9877E7",
                  borderBottom: "4px solid #9877E7",
                }}
              ></div>
            </div>
            <h3 className="text-center text-[#151875] text-lg font-medium mt-4">
              Mini LCW Chair
            </h3>
            <p className="text-[#151875] text-sm font-semibold mt-1">$56.00</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F6F7FB] rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/catc2.png" // Replace with your image URL
                alt="Modern Chair"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-[#151875] text-lg font-medium mt-4">
              Modern Chair
            </h3>
            <p className="text-[#151875] text-sm font-semibold mt-1">$75.00</p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F6F7FB] rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/catc3.png" // Replace with your image URL
                alt="Classic Armchair"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-[#151875] text-lg font-medium mt-4">
              Classic Armchair
            </h3>
            <p className="text-[#151875] text-sm font-semibold mt-1">$95.00</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-[#F6F7FB] rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/catc4.png" // Replace with your image URL
                alt="Elegant Sofa"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h3 className="text-center text-[#151875] text-lg font-medium mt-4">
              Elegant Sofa
            </h3>
            <p className="text-[#151875] text-sm font-semibold mt-1">$120.00</p>
          </div>
        </div>
      </section>
      {/* Image background section */}
      <section className="py-10">
        {/* Image Section */}
        <div className="relative w-full md:w-full h-[500px] mb-6 md:mb-0">
          <Image
            src="/subscribe.png" // Replace with your image URL
            alt="Subscribe"
            layout="fill" // This ensures the image fills the container
            objectFit="cover" // Makes sure the image covers the full container without stretching
            className="rounded-lg"
          />

          {/* Content over the Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-6 py-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Get Latest Updates By Subscribe Our Newsletter
              </h2>
              <p className="text-lg mb-6">
                Stay updated with our latest news and offers. Subscribe to our newsletter today!
              </p>
              <button className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Logos Section*/}
      <section className="relative w-full h-[100px]  flex items-center justify-center py-10">
        {/* Container to hold the image */}
        <div className="relative mt-3 w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 2xl:w-1/3 
                  h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
          {/* Background Image */}
          <Image
            src="/logos.png" // Replace with your image URL
            alt="Subscribe"
            layout="intrinsic" // Use intrinsic to maintain original size
            width={904}  // Set the image width to the given width (904px)
            height={93}  // Set the image height to the given height (93px)
            objectFit="contain" // This ensures the image is fully contained within its parent
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Center image within container
          />
        </div>
      </section>
      {/* Latest Blog Section*/}
      <section className="py-16 px-6 bg-white">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-[#151875] font-josefin text-center mb-12">Latest Blog</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog1.png" // Replace with actual image path
              alt="Blog Image"
              width={600} // Increased width for better visibility
              height={350} // Increased height
              className="w-full h-auto object-cover" // Ensure the aspect ratio is preserved
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center text-blue-600">
                  <Image
                    src="/pen.png" // Replace with actual pen icon image path
                    alt="Pen Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span className="text-[#151875]">Saber Ali</span>
                </div>
                <div className="ml-auto flex items-center text-[#151875]">
                  <Image
                    src="/calendar.png" // Replace with actual calendar image path
                    alt="Calendar Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span>21, August, 2020</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#151875]">Top essential Trends in 2021</h3>
              <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '30px' }}>
                More off this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <a href="#" className="text-[#151875] underline mt-4 inline-block">Read More</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog2.png" // Replace with actual image path
              alt="Blog Image"
              width={600} // Increased width for better visibility
              height={350} // Increased height
              className="w-full h-auto object-cover" // Ensure the aspect ratio is preserved
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center text-[#151875]">
                  <Image
                    src="/pen.png" // Replace with actual pen icon image path
                    alt="Pen Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span className="text-[#151875]">Saber Ali</span>
                </div>
                <div className="ml-auto flex items-center text-[#151875]">
                  <Image
                    src="/calendar.png" // Replace with actual calendar image path
                    alt="Calendar Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span>21, August, 2020</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#FB2E86]">Top essential trends in 2021</h3>
              <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '30px' }}>
                More off this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <a href="#" className="text-[#FB2E86] underline mt-4 inline-block">Read More</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/blog3.png" // Replace with actual image path
              alt="Blog Image"
              width={600} // Increased width for better visibility
              height={350} // Increased height
              className="w-full h-auto object-cover" // Ensure the aspect ratio is preserved
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center text-[#151875]">
                  <Image
                    src="/pen.png" // Replace with actual pen icon image path
                    alt="Pen Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span className="text-[#151875]">Saber Ali</span>
                </div>
                <div className="ml-auto flex items-center text-[#151875]">
                  <Image
                    src="/calendar.png" // Replace with actual calendar image path
                    alt="Calendar Icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  <span>21, August, 2020</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#151875]">Top essential Trends in 2021</h3>
              <p className="text-sm text-gray-600 mt-2" style={{ fontFamily: 'Lato', fontSize: '16px', lineHeight: '30px' }}>
                More off this less hello samlande lied much over tightly circa horse taped mightly
              </p>
              <a href="#" className="text-[#151875] underline mt-4 inline-block">Read More</a>
            </div>
          </div>
        </div>
      </section>

































    </>

  );
}
