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
    let [todo , setTodo] = useState('')
    let hendleTodo = (e) => {
        setTodo(e.target.value)
    }

    useEffect(()=>{
        const userTodoRef = ref( db , "todoLists")
        onValue(userTodoRef , (snapshot) => {
            let array = []
            snapshot.forEach((items) => {
                if(tododata.uid == items.key){
                    array.push({...items.val() , id:items.key})
                }
            })
            setTodoList(array)
        })

    },[])

    useEffect(()=>{
        const userparsonalTodoRef = ref( db , "parsonalTodo")
        onValue(userparsonalTodoRef , (snapshot) => {
            let array = []
            snapshot.forEach((item) => {
                if(tododata.uid !== item.key){
                    array.push({...item.val() , id:item.key})
                }
            })
            setparsonalTodoList(array)
        })

    },[])
    let handleAdd = ()=>{
        set(push(ref(db , 'parsonalTodo')) , {
            todos : todo
        })
        setTodo("")
        alert("todo send Succesful")
    }
    console.log(parsonalTodoList);
    let handleTodoDelete = (deletetodo) => {
        remove(ref(db , 'parsonalTodo/' + deletetodo.id)).then(() =>{
            alert("Delete Todo Succesfuly")
        })
    }
  return (
   <section id='home-page'>
        <div className="container">
            <div className='home-page-contant-wrapper'>
                <Heads text='Enter ypur list' style='home-page-heading'/>
                <div className="input-box">
                    <input className='input-list' type='text' placeholder='inter your list' value={todo} name = "todo" onChange={hendleTodo}/>
                </div>
               {
                todoList &&
                todoList.map((item , index) => (
                     <div key={index} className='home-page-add-btn-box'>
                        <button onClick={handleAdd} className='home-page-btn'>Add</button>
                    </div>
                ))
               }
               {
                parsonalTodoList &&
                parsonalTodoList.map((items , index) => (
                    <li className='persolan-todos' key={index}>{items.todos}<button className='personal-todo-delete' onClick={() =>handleTodoDelete(items)}>Delete</button></li>
                ))
               }
            </div>
        </div>
   </section>
  )
}

export default Homepage