import { AppleCardsCarouselDemo } from "@/components/apple-card";
import { ExpandableCardDemo } from "@/components/expandable-portfolio";
import { FlipWordsDemo } from "@/components/flip-words-home";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <section>
    <FlipWordsDemo/>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="text-center mb-20">
    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Want to Know <mark className="px-1 text-white bg-yellow-400 rounded dark:bg-yellow-400"> About Us</mark> ?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-white">Proshala is a results-driven digital marketing agency dedicated to propelling your business to new heights in the online landscape. With our team of seasoned experts and cutting-edge strategies, we craft tailored solutions that drive growth, boost visibility, and maximize your return on investment. At Proshala, we combine data-driven insights with creative innovation to deliver measurable success for businesses of all sizes across diverse industries.</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-900">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Web Design and Development</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-900">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Pay-Per-Click Advertising (PPC)</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-900">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Search Engine Optimization (SEO)</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-900">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Social Media Marketing</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-900">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Content Strategy and Creation</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center dark:bg-gray-900">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium dark:text-white">Graphic Designing</span>
        </div>
      </div>
    </div>
  </div>
</section>
   <AppleCardsCarouselDemo/>
   <ExpandableCardDemo/>
   <Testimonials/>
   </section>
  );
}
