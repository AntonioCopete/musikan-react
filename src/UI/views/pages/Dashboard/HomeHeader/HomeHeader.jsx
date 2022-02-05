import { useSelector } from 'react-redux'

import PanelHero from '../../../components/PanelHero/PanelHero'

function HomeHeader() {
  const { userName } = useSelector((state) => state.auth.currentUser)

  return (
    <PanelHero>
      <h1>
        <span>hello</span> {userName}
      </h1>
    </PanelHero>
  )
}

export default HomeHeader
