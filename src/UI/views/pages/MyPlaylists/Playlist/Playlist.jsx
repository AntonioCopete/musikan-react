import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
// import Swiper from '../../../components/Swiper/Swiper'
// import { SwiperSlide } from 'swiper/react'
import { Wrapper } from './Playist.styles'

function MyPlaylist({}) {
  const list = ['hola']
  return (
    <Wrapper>{list.length > 0 && list.map((item) => <PlaylistItem />)}</Wrapper>
  )
}

export default MyPlaylist
