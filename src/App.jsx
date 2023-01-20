import React from 'react'
import Routes from './routes/routes'
import './styles.less'
const App = () => {
  return (
    <>
      <article className="title-range" title="main-title" style={{padding: '15px'}}>
        Range Slider
      </article>
      <Routes/>
    </>
  )
}

export default App