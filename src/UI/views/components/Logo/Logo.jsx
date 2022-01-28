import LogoImg from '../../../img/logo.svg'
import { Logotype, LogoBrand } from './Logo.styles'

function Logo() {
  return (
    <Logotype>
      <img src={LogoImg} alt="Musikan" />
      <LogoBrand>Musikan</LogoBrand>
    </Logotype>
  )
}

export default Logo
