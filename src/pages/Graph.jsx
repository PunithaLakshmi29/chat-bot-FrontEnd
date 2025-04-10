import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';
import axios from 'axios';




const Graph = () => {

  const [data, setData] = useState([]);

  const loadData = async ()=>{
      const response = await axios.get("http://localhost:5000/api/get");
      setData(response.data);
  };
  //  console.log(data);
  useEffect(()=>{
      loadData();
  },[]);

  const uvBillData = 
    data.map((el) => {
      return(
        {
          name: el.projectname,
          value: el.devstatus,
          type: 'Developer',
        }
      )

    })
    

  const uvBillData2 = 
    data.map((el) => {
      return(
        {
          name: el.projectname,
          value: el.teststatus,
          type: 'Tester',
        }
      )

    })
  const status = [...uvBillData, ...uvBillData2];
  const transformData = 
  data?.map((el) => {
    return(
      {
        name: el.projectname,
        duedays: el.duedays,
      }
    )

  })
   
  console.log(status);  
  
  const config = {
    data: [status, transformData],
    colorField: 'type',
    xField: 'name',
    yField: ['value', 'duedays'],
    geometryOptions: [
      {
        geometry: 'column',
        color: ["#01A982","#17EBA0"],
        isGroup: true,
        seriesField: 'type',
      },
      {
        geometry: 'line',
        color: "black",
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
  };
  return <DualAxes {...config} />;
};
export default Graph


