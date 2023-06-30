import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Functionality Analyst</title>
        <meta property="og:title" content="Direct Functionality Analyst" />
      </Helmet>
    </div>
  )
}

export default Home
