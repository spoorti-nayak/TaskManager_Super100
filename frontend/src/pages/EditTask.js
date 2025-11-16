import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';


const EditTask = () => {
  const { id } = useParams()
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  

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

  useEffect(()=>{
    axiosInstance.get(`tasks/${id}/`)
    .then((res) => {
        setTaskName(res.data.task_name)
        setTaskDescription(res.data.task_description)
    })
    .catch((err) => console.log(err))
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      user_name: user.username,
      task_name: taskName,
      task_description: taskDescription,
    };

    axiosInstance.put(`tasks/${id}/`, newTask)
      .then((response) => {
        console.log('Task created:', response.data);
        document.getElementById('div1').innerHTML = `<p class="alert alert-success w-75 mx-auto">Task Updated</p>`
        setTaskName('');
        setTaskDescription('');
      })
      .catch((error) => {
        document.getElementById('div1').innerHTML = `<p class="alert alert-danger w-75 mx-auto">Try Again!!</p>`
        console.error('Error creating task:', error);
      });
  };

  return (
    <div class="mx-auto w-50">
      <h1 class="text-center">Edit Task</h1>
      <form class="form" onSubmit={handleSubmit}>
        <div id="div1"></div>
        <input class="form-control w-75 mx-auto m-3" type="text" placeholder="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        <textarea class="form-control w-75 mx-auto m-3" placeholder="Task Description" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        <center class="w-75 mx-auto m-3">
          <button class="btn btn-success" type="submit">Update Task</button>
        </center>
      </form>
    </div>
    
  );
};

export default EditTask;
