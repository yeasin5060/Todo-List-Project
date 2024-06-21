import React, { useState } from 'react'
import './Homepage.css'
import Heads from '../../utilities/Heads'
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";
import { useSelector } from 'react-redux';

const Homepage = () => {
    const db = getDatabase();
    const tododata = useSelector((state) => state.userdata.value)
    console.log(tododata);
    let [todo , setTodo] = useState({
        todo : ""
    })
    let hendleTodo = (e) => {
        let {name , value} = e.target
        setTodo({...todo , [name]:value})
    }
    let handleAdd = ()=>{
        set(ref(db, 'usertodo/'), {
           todolist : todo
        });
        alert("todo  Succesful")
        console.log()
    
    }
  return (
   <section id='home-page'>
        <div className="container">
            <div className='home-page-contant-wrapper'>
                <Heads text='Enter ypur list' style='home-page-heading'/>
                <div className="input-box">
                    <input className='input-list' type='text' placeholder='inter your list' name = "todo" onChange={hendleTodo}/>
                </div>
                <div className='home-page-add-btn-box'>
                    <button onClick={handleAdd} className='home-page-btn'>Add</button>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Homepage