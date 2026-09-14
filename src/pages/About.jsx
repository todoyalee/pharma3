import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="dark:bg-gray-800">
    <div className='text-2xl text-center pt-8 border-t dark:border-gray-700'>
      <Title text1={'ABOUT'} text2={'US'} />
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img 
        src={assets.about} 
        className='w-full md:max-w-[450px] rounded-2xl' 
        alt='Nehed Medical Trading'
        loading='eager' 
        width='450' 
        height='338' 
        fetchpriority='high' 
        sizes='(max-width: 768px) 100vw, 450px' 
      />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-300'>
        <p>Welcome to Nehed Medical Trading, your trusted partner in diagnostic equipment and rapid testing solutions! Based in Tunisia, we supply clinical laboratories, hospitals, and healthcare facilities with reliable diagnostic analyzers and lateral-flow rapid tests, ensuring accurate results reach the point of care quickly and hassle-free.</p>
        <p>Our team works directly with leading manufacturers such as ACON Biotech and Wondfo to bring you a wide range of hematology analyzers, point-of-care systems, and rapid diagnostic tests spanning fertility, infectious disease, drugs of abuse, cardiac and tumor markers. We ensure every product we distribute meets CE, FDA and NMPA quality standards.</p>
        <b className='text-gray-800 dark:text-gray-100'>Our Mission</b>
        <p>At Nehed Medical Trading, we are committed to making accurate, reliable diagnostics accessible across Tunisia and beyond. Our mission is to equip healthcare providers with the right instruments and test kits at the right time, bridging the gap between global diagnostic manufacturers and local laboratories through dependable distribution and support.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border dark:border-gray-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-50 dark:hover:bg-gray-700'>
        <b className="dark:text-gray-100">Certified Diagnostic Products</b>
        <p className='text-gray-600 dark:text-gray-300'>We source analyzers and rapid tests only from certified manufacturers, backed by CE, FDA and NMPA qualifications. Accuracy and safety are our top priorities.</p>
      </div>

      <div className='border dark:border-gray-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-50 dark:hover:bg-gray-700'>
        <b className="dark:text-gray-100">Fast & Reliable Delivery</b>
        <p className='text-gray-600 dark:text-gray-300'>Order your diagnostic equipment and test kits with ease and get them delivered quickly, so your laboratory never runs short of supplies.</p>
      </div>

      <div className='border dark:border-gray-700 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-gray-50 dark:hover:bg-gray-700'>
        <b className="dark:text-gray-100">Secure & Easy Ordering</b>
        <p className='text-gray-600 dark:text-gray-300'>Our platform offers a user-friendly experience, allowing you to browse our product catalogue, track orders, and get doorstep delivery effortlessly.</p>
      </div>
    </div>
    
    <NewsLetterBox />
  </div>
  )
}

export default About
