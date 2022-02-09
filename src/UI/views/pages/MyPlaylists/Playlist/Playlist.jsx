import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import PlaylistItem from '../../../components/PlaylistItem/PlaylistItem'
import { Wrapper } from './Playist.styles'
import Swiper from '../../../components/Swiper/Swiper'
function Playlist({ list, followed, reload }) {
  const [playlist, setPlaylist] = useState(list)

  useEffect(() => {
    setPlaylist(list)
  }, [list])

  return (
    <Wrapper>
      <Swiper>
        {playlist &&
          playlist.map((item) => (
            <SwiperSlide key={item._id}>
              <PlaylistItem
                id={item._id}
                name={item.name}
                thumbnail={item.thumbnail}
                followed={followed}
                reload={reload}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </Wrapper>
  )
}

export default Playlist
