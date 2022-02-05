import HomeHeader from './HomeHeader/HomeHeader'
import { Header, Main } from '../../layout/Layout.styles'

function Dashboard() {
  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <Main>
        <h1>home content</h1>
      </Main>
    </>
  )
}

export default Dashboard
