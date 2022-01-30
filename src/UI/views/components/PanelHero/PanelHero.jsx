import { PanelWrapper, PanelContainer, PanelContent } from './PanelHero.styles'

function PanelHero({ animated, children }) {
  return (
    <PanelWrapper animated={animated}>
      <PanelContainer>
        <PanelContent>{children}</PanelContent>
      </PanelContainer>
    </PanelWrapper>
  )
}

export default PanelHero
