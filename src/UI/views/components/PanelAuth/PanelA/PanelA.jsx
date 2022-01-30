// import { PanelWrapper, PanelContent } from './Panel.styles'
import './PanelA.scss'
import imgPanel1 from '../../../../img/bg-image1.svg'
import imgPanel2 from '../../../../img/bg-image2.svg'

import { Button } from '../../../../styles/GlobalComponents/Button'

function Panel({ handleSignin }) {
  return (
    <div className="panel-feed">
      <div className="panel panel__left">
        <div className="panel__content">
          <h2>New here ?</h2>
          <p>Enter your personal details and start journey with us</p>
          <Button className="btn btn-transparent" onClick={handleSignin}>
            Sign Up
          </Button>
        </div>
        <img className="panel__image" src={imgPanel1} alt={imgPanel1} />
      </div>
      <div className="panel panel__right">
        <div className="panel__content">
          <h2>One of us ?</h2>
          <p>To keep connected with us, please login with yout personal info</p>
          <Button onClick={handleSignin}>Login</Button>
        </div>
        <img className="panel__image" src={imgPanel2} alt={imgPanel2} />
      </div>
    </div>
  )
}

export default Panel
