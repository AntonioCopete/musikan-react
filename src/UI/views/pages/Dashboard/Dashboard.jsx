import { useState } from 'react'
import Layout from '../../layout/Layout'
import HomeHeader from '../../components/HomeHeader/HomeHeader'

function Dashboard() {
  return <Layout hero={<HomeHeader />} main={'Home main content'} />
}

export default Dashboard
