import Image from "next/image"

export const Footer = () => {
    return (
<footer className="p-4 mt-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl text-center">
      <a href="https://proshala.com" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
      <Image
              src="/Proshala-logo.png"
              alt="Proshala"
              height="500"
              width="500"
              className="h-8 w-8 mx-1 object-contain"
            />
          Proshala Tech 
      </a>
      <p className="my-6 text-gray-500 dark:text-gray-400">Proshala Tech have been a Digital Marketing Company for 5 years now and have a large client base for which we make amazing products and solutions.</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
              <a href="https://proshala.com" className="mr-4 hover:underline md:mr-6 ">Home</a>
          </li>
          <li>
              <a href="https://proshala.com" className="mr-4 hover:underline md:mr-6">Services</a>
          </li>
          <li>
              <a href="https://proshala.com" className="mr-4 hover:underline md:mr-6 ">Contact</a>
          </li>
          <li>
              <a href="https://proshala.com" className="mr-4 hover:underline md:mr-6">Blog</a>
          </li>
          <li>
              <a href="https://proshala.com" className="mr-4 hover:underline md:mr-6">About Us</a>
          </li>
          <li>
              <a href="https://proshala.com" className="mr-4 hover:underline md:mr-6">FAQs</a>
          </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2020-2025 <a href="https://proshala.com" className="hover:underline">Proshala™</a>. All Rights Reserved.</span>
  </div>
</footer>


    )
}