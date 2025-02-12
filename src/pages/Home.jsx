import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

function Home() {
  return (
<React.Fragment>
  <Hero/>
  <LatestCollection/>
  <BestSeller/>
</React.Fragment>
  )
}

export default Home
