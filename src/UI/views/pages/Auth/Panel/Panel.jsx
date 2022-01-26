import { PanelContainer, PanelC } from './Panel.styles'
import imgPanel1 from '../../../../img/bg-image1.svg'
import imgPanel2 from '../../../../img/bg-image2.svg'

function Panel({ handleSignin }) {
  return (
    <PanelContainer>
      <PanelC className="panel panel__left">
        <div className="panel__content">
          <h3 className="panel__title">New here ?</h3>
          <p className="panel__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            adipisci tempore aliquid?
          </p>
          <button
            className="btn btn-transparent"
            id="sign-up-btn"
            onClick={handleSignin}
          >
            Sign Up
          </button>
        </div>
        <img className="panel__image" src={imgPanel1} alt="" />
      </PanelC>
      <PanelC className="panel panel__right">
        <div className="panel__content">
          <h3 className="panel__title">One of us ?</h3>
          <p className="panel__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            adipisci tempore aliquid?
          </p>
          <button className="btn btn-transparent" onClick={handleSignin}>
            Login
          </button>
        </div>
        <img className="panel__image" src={imgPanel2} alt="" />
      </PanelC>
    </PanelContainer>
  )
}

export default Panel
