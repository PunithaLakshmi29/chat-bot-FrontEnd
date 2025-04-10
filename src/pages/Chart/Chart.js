import React from 'react'
import Graph from '../Graph'

const Chart = () => {
  return (
         
      <div style={{display: "flex",justifyContent:"center",marginTop: "70px"}} >
        <div style={{width: "50%",borderRadius: "10px",marginLeft: "3px",height: "459px",backgroundColor: "white" ,padding: "10px",marginTop: "20px",marginRight: "50px"}}>
        <Graph/>
        </div>
    </div>
  )
}

export default Chart