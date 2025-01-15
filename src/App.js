import logo from './logo.svg';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import DraggableItem from './components/draggable';
import DroppableArea from './components/dropable';
import { DndContext } from '@dnd-kit/core';
import CustomList from './components/customList';
import { useSelector,useDispatch } from 'react-redux';
import { setTodo,removeTodo,setDoing,removeDoing,setDone,removeDone } from './slices/todoSlice';


function App() {
  const dispatch=useDispatch()
  const todo=useSelector((state)=>state.todo)
  const doing=useSelector((state)=>state.doing)
  const done=useSelector((state)=>state.done)
 

  const handleDragEnd = (event) => {
  
    let arr=event.active.id.split("^")
    let id=parseInt(arr[0])
    let type=arr[1]

    if(type==event?.over?.id || event.over==null){
      return
    }

    if(type=='todo'){
      let drageditem=todo.filter((item)=>item.id==id)

      if(event.over.id=='doing'){
       
        dispatch(setDoing(drageditem[0]))
      }
      if(event.over.id=='done'){
     
        dispatch(setDone(drageditem[0]))
      }

      dispatch(removeTodo(id))
    }


    if(type=='doing'){
      let drageditem=doing.filter((item)=>item.id==id)

      if(event.over.id=='todo'){
        dispatch(setTodo(drageditem[0]))
      }
      if(event.over.id=='done'){
       
        dispatch(setDone(drageditem[0]))
      }

      dispatch(removeDoing(id))
    }

    if(type=='done'){
      let drageditem=done.filter((item)=>item.id==id)

      if(event.over.id=='todo'){
        dispatch(setTodo(drageditem[0]))
      }
      if(event.over.id=='doing'){
      
        dispatch(setDoing(drageditem[0]))
      }

      setDone(done.filter((item)=>item.id!==id))
       dispatch(removeDone(id))
    }
   

  }
  return (
    <div className='main'>
      <DndContext onDragEnd={handleDragEnd}>
      <Row className='m-0 gap10'>
        <Col className='whiteCard'>
        <CustomList label={"Todo"} arr={todo} type={"todo"}/>
       
        </Col>
        <Col className='whiteCard'>
        <CustomList label={"Doing"} arr={doing} type={"doing"}/>
       
        </Col>
        <Col className='whiteCard'>
        <CustomList label={"Done"} arr={done} type={"done"}/>
        </Col>
      </Row>
      </DndContext>
    </div>
  );
}

export default App;
