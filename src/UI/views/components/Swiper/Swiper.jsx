import { SwiperWrapper } from './Swiper.styles'
import 'swiper/css'

export default function App({ children }) {
  return (
    <SwiperWrapper
      slidesPerView={3}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {children}
    </SwiperWrapper>
  )
}
