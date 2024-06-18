import React, { useState } from 'react'
import './Homepage.css'
import Heads from '../../utilities/Heads'

const Homepage = () => {
    let [todo , setTodo] = useState({
        todo : ""
    })
    let hendleTodo = (e) => {
        let {name , value} = e.target
        setTodo({...todo , [name]:value})
    }
    let handleAdd = ()=>{
       console.log(todo);
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