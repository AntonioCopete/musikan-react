import { SpinnerWrapper, SpinnerContent, SpinnerItem } from './Spinner.styles'

function Spinner() {
  return (
    <SpinnerWrapper>
      <SpinnerContent>
        <SpinnerItem className="rect1"></SpinnerItem>
        <SpinnerItem className="rect2"></SpinnerItem>
        <SpinnerItem className="rect3"></SpinnerItem>
        <SpinnerItem className="rect4"></SpinnerItem>
        <SpinnerItem className="rect5"></SpinnerItem>
      </SpinnerContent>
    </SpinnerWrapper>
  )
}

export default Spinner
