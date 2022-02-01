import LogoImg from '../../../img/logo.svg'
import { Logotype, LogoBrand } from './Logo.styles'

function Logo({ main }) {
  return (
    <Logotype>
      <img src={LogoImg} alt="Musikan" />
      <LogoBrand main={main}>Musikan</LogoBrand>
    </Logotype>
  )
}

export default Logo
