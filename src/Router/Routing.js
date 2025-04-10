import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import AddEdit from '../pages/AddEdit'
import Chart from '../pages/Chart/Chart'
// import Graph from '../pages/Graph'
import Home from '../pages/Home'
import View from '../pages/View'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/addContact" element={<AddEdit/>}></Route>
        <Route path="/update/:id" element={<AddEdit/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>
        <Route path="/graph" element={<Chart/>}></Route>
        </Routes>
    </div>
  )
}

export default Routing