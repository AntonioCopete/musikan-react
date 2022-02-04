import pic from '../../../img/default-pic.jpg'
import { InfoWrapper, Image, Text } from './TrackInfo.styles'

function TrackInfo() {
  return (
    <InfoWrapper>
      <Image src={pic} alt={pic} />
      <Text>track infoggg</Text>
    </InfoWrapper>
  )
}

export default TrackInfo
