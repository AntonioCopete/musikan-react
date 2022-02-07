import { ItemWrapper, ItemContent, Icon, Text, Image } from './SquareItem.styles'
import { useSelector } from 'react-redux'

function SquareItem() {
	const { name, thumbnail } = useSelector((state) => state.currentTrack)

  const handleClick = () => {
    console.log('clicli...')
  }
  return (
    <ItemWrapper>
      <ItemContent>
				<Image src={thumbnail} alt={name} />
        <Icon onClick={() => handleClick()} />
      </ItemContent>
      <Text>{name}</Text>
    </ItemWrapper>
  )
}

export default SquareItem
