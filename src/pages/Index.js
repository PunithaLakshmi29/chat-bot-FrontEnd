import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
        <Link to="/">
        <button style={{backgroundColor: "#17EBA0", padding: "15px",width: "200px", borderRadius: "10px",marginRight: "950px",marginTop: "20px",fontSize: "21px"}}>Home</button>
        </Link>
        <Link to="/graph">
        <button style={{backgroundColor: "#17EBA0", padding: "15px",width: "200px", borderRadius: "10px",marginTop: "20px",fontSize: "21px"}}>chart</button>
        </Link>
    </div>
  )
}

export default Index