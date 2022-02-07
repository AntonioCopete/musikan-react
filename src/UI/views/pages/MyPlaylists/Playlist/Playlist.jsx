import SquareItem from '../../../components/SquareItem/SquareItem'
import Swiper from '../../../components/Swiper/Swiper'
import { SwiperSlide } from 'swiper/react'
import { Wrapper } from './Playist.styles'

function MyPlayList() {
  return (
    <Wrapper>
      <Swiper>
        <SwiperSlide>
          <SquareItem />
        </SwiperSlide>
        <SwiperSlide>
          <SquareItem />
        </SwiperSlide>
        <SwiperSlide>
          <SquareItem />
        </SwiperSlide>
        <SwiperSlide>
          <SquareItem />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  )
}

export default MyPlayList
