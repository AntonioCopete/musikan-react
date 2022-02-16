import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Wrapper, SwiperWrapper } from './Playlist.styles'
import 'swiper/css'
import PlaylistItem from '../../../../../components/PlaylistItem/PlaylistItem'

function Playlist({ list, followed, reload }) {
  const [playlist, setPlaylist] = useState(list)

  useEffect(() => {
    setPlaylist(list)
  }, [list])

  return (
    <Wrapper>
      <SwiperWrapper
        slidesPerView={2.5}
        spaceBetween={10}
        breakpoints={{
          480: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          1224: {
            slidesPerView: 6.5,
            spaceBetween: 20,
          },
        }}
      >
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
      </SwiperWrapper>
    </Wrapper>
  )
}

export default Playlist
