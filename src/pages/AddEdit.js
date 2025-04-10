import React, {useState, useEffect} from 'react';
import {useNavigate, useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import {toast} from "react-toastify";

const initialState={
    projectname: "",
    devstatus: "",
    teststatus: "",
    duedays: "",
};

const AddEdit = () => {
    const [state,setState] = useState(initialState);

    const {projectname, devstatus, teststatus, duedays} = state;

    let navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => setState({ ...resp.data[0]}))
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!projectname || !devstatus || !teststatus || !duedays){
            toast.error("Please provide value into each input field");
        } else{
            if(!id){
                axios.post("http://localhost:5000/api/post",{
                    projectname,
                    devstatus,
                    teststatus, 
                    duedays
                }).then(() =>{
                    setState({projectname: "", devstatus: "", teststatus: "", duedays: ""});
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Details Added Successfully");
            }else{
                axios.put(`http://localhost:5000/api/update/${id}`,{
                    projectname,
                    devstatus, 
                    teststatus, 
                    duedays
            }).then(() =>{
                setState({projectname: "", devstatus: "", teststatus: "", duedays: ""});
            })
            .catch((err) => toast.error(err.response.data));
            toast.success("Details Updated Successfully");
            }
            
            setTimeout(() =>
                  navigate.push("/"),500);
        }
        }

    const handleInputChange =(e) =>{
        const {name,value} =e.target;
        setState({ ...state, [name]: value});
    };

    return (
    <div style={{marginTop: "100px"}}>
       <form style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alignContent: "center"
       }}
       onSubmit={handleSubmit}
       >
        <label htmlFor='projectname'>Project Name</label><br/>
        <input
         type="text"
         id="projectname" 
         name="projectname" 
         placeholder='Project Name...' 
         value={projectname || ""} 
         onChange={handleInputChange}/><br/>
       
        <label htmlFor='devstatus'> Dev_Status</label><br/>
        <input 
        type="text" 
        id="devstatus" 
        name="devstatus" 
        placeholder='Developer Status...' 
        value={devstatus || ""} 
        onChange={handleInputChange}/><br/>
        
        <label htmlFor='teststatus'>UAT_Status</label><br/>
        
        <input  
        type="text" 
        id="teststatus" 
        name="teststatus" 
        placeholder='UAT_Status...' 
        value={teststatus || ""} 
        onChange={handleInputChange}/><br/>

        <label htmlFor='duedays'> Due_Days</label><br/>
        <input 
        type="text" 
        id="duedays" 
        name="duedays" 
        placeholder='Due Days...' 
        value={duedays || ""} 
        onChange={handleInputChange}/>
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/">
            <input type="button" value="Go Back" />
        </Link>
       </form>
    </div>
  )
    }

export default AddEdit