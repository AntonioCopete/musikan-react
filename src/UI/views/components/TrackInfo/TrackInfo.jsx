import picture from '../../../img/noImage.jpg'
import { InfoWrapper, Image, Text } from './TrackInfo.styles'
import { useSelector } from 'react-redux'

function TrackInfo() {
  const { name, thumbnail } = useSelector((state) => state.currentTrack)
  console.log(name)
  return (
    <InfoWrapper>
      <Image src={thumbnail} alt={thumbnail} />
      <Text>{name}</Text>
    </InfoWrapper>
  )
}

export default TrackInfo
