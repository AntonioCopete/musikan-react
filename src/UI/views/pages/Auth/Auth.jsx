import { useState } from 'react'
import PanelAuth from '../../components/PanelAuth/PanelAuth'
import './Auth.scss'
import PanelA from './PanelA/PanelA'
import Form from './Form/Form'

function Auth() {
  const [signup, setSignup] = useState('false')

  const handleSignin = () => {
    setSignup(!signup)
  }

  return (
    <main className={`container ${signup ? '' : 'sign-up-mode'}`}>
      <Form />
      <PanelA handleSignin={handleSignin} />
    </main>
  )
}

export default Auth
