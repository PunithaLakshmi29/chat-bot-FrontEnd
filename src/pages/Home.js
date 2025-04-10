import React, {useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import {toast} from "react-toastify"
import axios from "axios"

const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async ()=>{
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };
     console.log(data);
    useEffect(()=>{
        loadData();
    },[]);

    const deleteContact =(id) => {
        if(window.confirm("Are you sure you want to delete")){
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            toast.success("Deleted Successfully");
            setTimeout(() => loadData(), 500);
        }
    }
  return (
    <div style={{marginTop: "50px"}}>
        <Link to="/addContact">
           <button className="btn btn-contact">Add Project</button>
        </Link>
        <table className="styled-table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>
                        No.
                    </th>
                    <th style={{textAlign: "center"}}>
                        Project Name
                    </th>
                    <th style={{textAlign: "center"}}>
                        Dev_Status
                    </th>
                    <th style={{textAlign: "center"}}>
                        UAT_Status
                    </th>
                    <th style={{textAlign: "center"}}>
                        Due_Days
                    </th>
                    <th style={{textAlign: "center"}}>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return(
                        <tr key={item.id}>
                            <th scope="row">{index+1}</th>
                            <td>{item.projectname}</td> 
                            <td>{item.devstatus}</td>
                            <td>{item.teststatus}</td>
                            <td>{item.duedays}</td>
                            <td>
                                <Link to={`/update/${item.id}`}>
                                <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={() => deleteContact(item.id)}>Delete</button>
                                <Link to={`/view/${item.id}`}>
                                <button className='btn btn-view'>View</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    </div>
  )
}

export default Home