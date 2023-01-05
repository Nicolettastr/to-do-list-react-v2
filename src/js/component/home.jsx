import React, { useState } from "react";
import AddTaskBtn from "./addTaskBtn.jsx";
import Task from "./Task.jsx";
import UpdateBtn from "./updateTaskBtn.jsx";
//create your first component
const Home = (props) => {

	const [list, setList] = useState([
		{id: 1, title: "task 1", status: false},
		{id: 2, title: "task 2", status: false}
	])

	const [newTask, setNewTask] = useState("");
	const [updateTask, setUpdateTask] = useState("");

	const addTask = () => {
		if(newTask) {
			let idNumber = list.length + 1;
			let newItem = {id: idNumber, title: newTask, status: false};
			setList([...list, newItem])
		}

		setNewTask("")
	}

	const deleteTask = (id) => {
		list.splice(id, 1)
		setList([...list])
	}

	const markTask = (id) => {

	}

	const cancel = (id) => {

	}

	const changeTask = (event) => {

	}

	const updateItem = () => {

	}

	const listElement = list.map((item, index) => {
		return (
			<Task item={item} index={index} faCircleCheck={props.faCircleCheck} faPencil={props.faPencil} faTrash={props.faTrash} deleteTask={deleteTask} /> 
		)
	})
	
	const handleChangeText = (value) => {
		setNewTask(value)
	}

	const handleKeyUp = () => {
		if(newTask === ""){
			alert("Introduce a task")
		}else {
			let idNumber = list.length + 1;
			let newItem = {id: idNumber, title: newTask, status: false};
			setList([...list, newItem])
			setNewTask("")
		}
	}

	return (
		<div className="text-center w-75 m-auto">

			<h1 className="text-center mt-5">To do list</h1>

			<UpdateBtn />

			<AddTaskBtn addTask={addTask} newTask={newTask} handleKeyUp={handleKeyUp} handleChangeText={handleChangeText}/>

			{list && list.length ? "" : "No tasks"}

			<div className="taskSection">
				{listElement}
			</div>
			
		</div>
	);
};

export default Home;
