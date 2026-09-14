import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Laboratory Director",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      stars: 5,
      text: "Nehed Medical Trading has been a great partner for our lab. The Mission HA-360 analyzer arrived quickly and their support team made setup effortless. Highly reliable service!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Clinic Procurement Manager",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      stars: 5,
      text: "We reorder our Wondfo rapid test kits every month and the consistency is excellent. Stock never runs low and their customer support is always responsive."
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Clinical Chemist",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      stars: 4,
      text: "As a clinical chemist, I'm particular about instrument accuracy. The On-Call MultiPro system consistently delivers precise HbA1c and CRP results, and the service was prompt and professional."
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Hospital Administrator",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      stars: 5,
      text: "I was new to sourcing diagnostic equipment, but Nehed Medical Trading exceeded my expectations. The analyzer arrived on time and was exactly as described. Will definitely order again!"
    },
    {
      id: 5,
      name: "Anita Sharma",
      role: "Pharmacy Owner",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
      stars: 5,
      text: "The delivery service from Nehed Medical Trading is excellent. The team is courteous, and every rapid test box arrives properly sealed and well packaged. Very satisfied!"
    }
  ];

  return (
    <section className="py-16 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <span className="bg-secondary dark:bg-gray-700 text-primary dark:text-green-300 px-4 py-1 rounded-full text-sm font-medium">
            Customer Feedback
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-primary dark:text-[#02ADEE]">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Read testimonials from our satisfied customers who trust Nehed Medical Trading for their diagnostic equipment needs.
          </p>
        </div>
        
        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div 
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md flex flex-col h-full mx-2 mb-8"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary dark:border-[#02ADEE]"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18} 
                        className={`${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">{testimonial.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 