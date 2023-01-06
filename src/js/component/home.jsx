import React, { useEffect, useState } from "react";
import AddTaskBtn from "./addTaskBtn.jsx";
import Task from "./Task.jsx";
import UpdateBtn from "./updateTaskBtn.jsx";
import GetApi from "../services/GetApi.js"
import PutApi from "../services/PutApi.js"
//create your first component
const Home = (props) => {

	useEffect(() => {
		GetApi().then((data) => {
			const items = data.map((element) => {
				return element
			})

			setList(items)
		})
	}, [])

	useEffect(() => {
		PutApi(list)
	}, [list])

	const [list, setList] = useState([])

	const [newTask, setNewTask] = useState("");
	const [updateTask, setUpdateTask] = useState("");

	const addTask = () => {
		if(newTask) {
			let idNumber = list.length + 1;
			let newItem = {id: idNumber, label: newTask, done: false};
			setList([...list, newItem])
		}

		setNewTask("")
	}

	const deleteTask = (itemId) => {
		let eliminateTask = list.filter((item) => item.id !== itemId)
		setList(eliminateTask)
	}

	const markTask = (id) => {
		let complete = list.map((item) => {
			if(item.id === id) {
				return({...item, done: !item.done})
			}
			return item
		})

		setList(complete)
	}

	const cancel = () => {
		setUpdateTask("")
	}

	const changeTask = (value) => {
		let newEntry = {
			id: updateTask.id ,
			label: value,
			done: updateTask.done ? true : false
		}
		setUpdateTask(newEntry);
	}

	const updateItem = () => {
		let item = [...list].filter((item) => item.id !== updateTask.id)
		let newItem = [...item, updateTask]
		setList(newItem)
		setUpdateTask("")
	}

	const editBtn = (itemId, itemStatus, itemTitle) => {
		setUpdateTask({
			id: itemId,
			label: itemTitle,
			done: itemStatus ? true : false,
		})
	}

	const listElement = list.map((item, index) => {
		return (
			<Task editBtn={editBtn} markTask={markTask} item={item} index={index} faCircleCheck={props.faCircleCheck} faPencil={props.faPencil} faTrash={props.faTrash} deleteTask={deleteTask} /> 
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
			let newItem = {id: idNumber, label: newTask, done: false};
			setList([...list, newItem])
			setNewTask("")
		}
	}

	return (
		<div className="text-center w-75 m-auto">

			<h1 className="text-center mt-5">To do list</h1>

			{updateTask && updateTask ? (
				<>
					<UpdateBtn setUpdateTask={setUpdateTask} updateTask={updateTask} cancel={cancel} updateItem={updateItem} changeTask={changeTask}/>
				</>
			):
			(
				<>
					<AddTaskBtn  addTask={addTask} newTask={newTask} handleKeyUp={handleKeyUp} handleChangeText={handleChangeText}/>
				</>
			)
			}

		

			{list && list.length ? "" : "Entry new Task"}

			<div className="taskSection">
				{listElement}
			</div>

			<div className="pending">
				<span>Tasks {list.length}</span>
			</div>
			
		</div>
	);
};

export default Home;
