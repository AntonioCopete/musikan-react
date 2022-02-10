import { PanelWrapper, PanelContainer, PanelContent } from './PanelHero.styles'

function PanelHero({ children }) {
  return (
    <PanelWrapper>
      <PanelContainer>
        <PanelContent>{children}</PanelContent>
      </PanelContainer>
    </PanelWrapper>
  )
}

export default PanelHero
