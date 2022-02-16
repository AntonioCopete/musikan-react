import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import api from '../../../../../../api/api'

import UserItem from '../../../../components/UserItem/UserItem'
import { Wrapper, SwiperWrapper } from './PopularUsers.styles'
import 'swiper/css'

function PopularUsers() {
  const [users, setUsers] = useState([])
  const amountUsersToDisplay = 4

  useEffect(() => {
    getRandomUsers()
  }, [])

  const getRandomUsers = async () => {
    const response = await api.getAllUsers()
    setUsers(response.data.data)
  }

  return (
    <Wrapper>
      <SwiperWrapper
        slidesPerView={3.5}
        spaceBetween={10}
        breakpoints={{
          375: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {users &&
          // eslint-disable-next-line array-callback-return
          users?.map((user, index) => {
            if (index < amountUsersToDisplay)
              return (
                <SwiperSlide>
                  <UserItem
                    key={user._id}
                    id={user._id}
                    user={user.userName}
                    thumbnail={user.profilePicture}
                  />
                </SwiperSlide>
              )
          })}
      </SwiperWrapper>
    </Wrapper>
  )
}

export default PopularUsers
