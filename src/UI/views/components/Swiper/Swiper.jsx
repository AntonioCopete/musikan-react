import { SwiperWrapper } from './Swiper.styles'
import 'swiper/css'

function Swiper({ children }) {
  return (
    <SwiperWrapper
      slidesPerView={3.5}
      spaceBetween={20}
      breakpoints={{
        375: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }}
    >
      {children}
    </SwiperWrapper>
  )
}

export default Swiper
