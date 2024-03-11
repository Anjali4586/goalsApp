import React,{useState} from 'react'
import Task from './Task/Task';

const Home = () => {
    const [tasks,setTasks]=useState([]);
    const [title,setTitle]= useState("");
    const [description,setDescription]= useState("");

    const submitHandler=(e) =>{
        e.preventDefault();
        setTasks([...tasks,{
            title, description
        }])
            
    };

    const deleteTask = (index)=>{
        const filteredArr = tasks.filter((val,i) =>{
            return i!==index;
        });
        setTasks(filteredArr);

    }
  return (
    <div className='foreground'>
    <div className='container'>
        <h1>DAILY GOALS!!!</h1>
      <form onSubmit={submitHandler}>
        <input type="text"placeholder='Title'
         value={title} 
         onChange={(e)=> setTitle(e.target.value)}/>
        <textarea placeholder='Description'
        value={description} 
        onChange={(e)=> setDescription(e.target.value)} ></textarea>
        <button >Add</button>

      </form>
      
      {tasks.map((item,index)=>(
        <Task key = {index}
         title ={item.title} 
         description = {item.description}
         deleteTask = {deleteTask}
         index = {index}
         />
      ))}
      
    </div>
    </div>
  )
}

export default Home