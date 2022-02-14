import {
  ItemWrapper,
  ItemContent,
  Icon,
  Text,
  TextWrapper,
} from './TrackItem.styles'

function TrackItem({ name, artist, thumbnail }) {
  return (
    <ItemWrapper>
      <ItemContent bgImage={thumbnail}>
        <Icon />
      </ItemContent>
      <TextWrapper>
        <Text>{name}</Text>
        <Text small>{'artist'}</Text>
      </TextWrapper>
    </ItemWrapper>
  )
}

export default TrackItem
