import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Testimonies.css'
import y from '../../assets/youghurt11.png'

const testimonials = [
  {
    name: "miss Tope",
    text: "I’m so glad I found this brand. Every single product I’ve tried so far has been fresh, tasty, and well-packaged.",
    image: y,
    rating: 5,
  },
  {
    name: "Dayo",
    text: "Your chin chin flakes remind me of my childhood for Naija. I carry am go office, my colleagues rush it like theres no tomorrow.",
    image: y,
    rating: 5,
  },
  {
    name: "Charlie",
    text: "The cake was soft, moist, and very delicious. It had that authentic Nigerian taste that you hardly find abroad.",
    image: y,
    rating: 5,
  },
  {
    name: "Diana",
    text: "I ordered small chops for my daughter’s birthday, and it was a hit! The samosas were well-filled, the puff puff was soft, and everything tasted amazing.",
    image: y,
    rating: 5,
  },
  {
    name: "kola",
    text: "Honestly, I wasn’t expecting it to be this good. You’ve gained a loyal customer",
    image: y,
    rating: 5,
  },
  {
    name: "femi",
    text: "It was my first time trying, and I have no regrets at all. 100% satisfaction",
    image: y,
    rating: 5,
  },
];

export default function Testimonies() {
  return (
    <div data-aos="zoom-in" className="tes">
          <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      slidesPerGroup={1}
      breakpoints={{
        768: { slidesPerView: 4, slidesPerGroup: 1 }, // 2 at a time on desktop/tablet
      }}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev"
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
    >
      {testimonials.map((t, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-card">
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <p className="testimonial-text">“{t.text}”</p>
            <div className="testimonial-name">{t.name}</div>
            <div className="testimonial-rating">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <button className="custom-next">➡</button>
    <button className="custom-prev">⬅</button>
    </div>
  );
}