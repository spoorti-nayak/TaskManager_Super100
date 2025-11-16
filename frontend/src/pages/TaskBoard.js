import Axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import axiosInstance from '../api/axiosConfig';

function handleDelete(id) { 
        if(window.confirm('Are you sure to delete?'))
        {
            Axios.delete("http://localhost:8000/api/tasks/" +id +"/")
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => console.log(err))
        }
        else 
        {
            window.location.reload()
        }
    }

export function TaskBoard()
{

    const [user, setUser] = useState(null);

  useEffect(() => {
    axiosInstance.get('user/')
      .then((res) => {
        setUser(res.data)
        console.log("Success..")
      })
      .catch(() => {
        console.log("Failure....")
        alert("Not authorized")
    });
  }, []);

    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        Axios.get("http://localhost:8000/api/tasks/")
        .then((res) => setTasks(res.data))
        .catch((err) => console.log(err))
    },[])

    return(
        <div class="mt-3">
            <h1 class="text-center m-3">Task Board</h1>
            <table class="table table-striped table-success table-hover">
                <thead>
                    <tr class="text-center fw-bold">
                        <td>Task Name</td>
                        <td>Task Description</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((val)=>{
                        if(user && val.user_name === user.username)
                        {
                        return (
                            <tr key={val.id}>
                                <td>{val.task_name}</td>
                                <td>{val.task_description}</td>
                                <td class="d-flex justify-content-around">
                                    <Link to={`/edit/${val.id}`}>
                                        <button class="btn btn-success">Edit</button>
                                    </Link>
                                    <div>
                                        <button onClick={() => handleDelete(val.id)} class="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        );
                        }
                        else{
                            return null;
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}
