import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { Wrapper } from './Playist.styles'
import Swiper from '../../../components/Swiper/Swiper'
function Playlist({ list }) {
  const [playlist, setPlaylist] = useState(list)

  useEffect(() => {
    setPlaylist(list)
  }, [list])

  return (
    <Wrapper>
      <Swiper>
        {playlist &&
          playlist.map((item) => (
            <SwiperSlide>
              <PlaylistItem
                id={item._id}
                name={item.name}
                thumbnail={item.thumbnail}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  )
}

export default Playlist
