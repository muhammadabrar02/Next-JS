import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#F6F5FF] px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-josefin font-bold">
              Hekto
            </Link>
            <form className="flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              />
              <button className="inline-flex whitespace-nowrap rounded-md bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600">
                Sign Up
              </button>
            </form>
            <div className="space-y-1 text-sm text-gray-600">
              <h3 className="font-medium">Contact Info</h3>
              <p className="break-words">17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-lg font-medium sm:mb-6">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600 sm:space-y-4">
              {['Laptops & Computers', 'Cameras & Photography', 'Smart Phones & Tablets', 'Video Games & Consoles', 'Waterproof Headphones'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-4 text-lg font-medium sm:mb-6">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-600 sm:space-y-4">
              {['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="mb-4 text-lg font-medium sm:mb-6">Pages</h3>
            <ul className="space-y-2 text-sm text-gray-600 sm:space-y-4">
              {['Blog', 'Browse the Shop', 'Category', 'Pre-Built Pages', 'Visual Composer Elements', 'WooCommerce Pages'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-gray-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-12 sm:flex-row md:gap-8">
          <p className="text-center text-sm text-gray-600 sm:text-left">©Webecy - All Rights Reserved</p>
          <div className="flex gap-4">
            {[
              { href: '#', src: '/facebook.png', alt: 'Facebook', width: 20, height: 20 },
              { href: '#', src: '/instagram.png', alt: 'Instagram', width: 20, height: 20 },
              { href: '#', src: '/twitter.png', alt: 'Twitter', width: 20, height: 20 },
            ].map((social) => (
              <Link key={social.alt} href={social.href} className="hover:opacity-80">
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={social.width}
                  height={social.height}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

