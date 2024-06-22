import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Heads from '../../utilities/Heads'
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";
import { useSelector } from 'react-redux';

const Homepage = () => {
    const db = getDatabase();
    const tododata = useSelector((state) => state.userdata.value)
    const [todoList , setTodoList] = useState([])
    const [parsonalTodoList , setparsonalTodoList] = useState([])
    let [todo , setTodo] = useState({
        todo : ""
    })
    let hendleTodo = (e) => {
        let {name , value} = e.target
        setTodo({...todo , [name]:value})
    }

    useEffect(()=>{
        const userTodoRef = ref( db , "todoLists")
        onValue(userTodoRef , (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if(tododata.uid == item.key){
                    array.push({...item.val() , id:item.key})
                }
            })
            setTodoList(array)
        })

    },[])
    let handleAdd = (personalTodo)=>{
        set(ref(db , 'parsonalTodo/' + personalTodo.id) , {
            todos : todo
        })
        alert("todo send Succesful")
        console.log(personalTodo) 
    }
    useEffect(()=>{
        const userparsonalTodoRef = ref( db , "parsonalTodo")
        onValue(userparsonalTodoRef , (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if(tododata.uid == item.key){
                    array.push({...item.val() , id:item.key})
                }
            })
            setparsonalTodoList(array)
        })

    },[])
    console.log(parsonalTodoList);
  return (
   <section id='home-page'>
        <div className="container">
            <div className='home-page-contant-wrapper'>
                <Heads text='Enter ypur list' style='home-page-heading'/>
                <div className="input-box">
                    <input className='input-list' type='text' placeholder='inter your list' name = "todo" onChange={hendleTodo}/>
                </div>
               {
                todoList &&
                todoList.map((item , index) => (
                     <div key={index} className='home-page-add-btn-box'>
                        <button onClick={() =>handleAdd(item)} className='home-page-btn'>Add</button>
                    </div>
                ))
               }
               {
                parsonalTodoList &&
                parsonalTodoList.map((item , index) => (
                    <li key={index}>{item.todo}</li>
                ))
               }
            </div>
        </div>
   </section>
  )
}

export default Homepage