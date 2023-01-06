import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Task = (props) => {

	let itemId = props.item.id;
	let itemTitle = props.item.label;
	let itemStatus = props.item.done;
	let itemComplete = props.item.status;

	const handleId = () => {
		props.markTask(itemId)
	}
    
	const handleEditBtn = () => {
		props.editBtn(itemId, itemStatus, itemTitle)
	}

	const handleDelete = () => {
		props.deleteTask(itemId)
	}

	return (
        <>
            <div className={`${props.item.done ? "done" : ""} taskMargin`}>
				<div>
				    <li className="indexSpan">{props.index + 1}</li>
				    <li className="taskItem" key={props.index}>{props.item.label}</li>
				<div className="icons">
					<li>{props.item.status}</li>
					<span className="edit" onClick={handleEditBtn} title="Edit"><FontAwesomeIcon icon={props.faPencil}/></span>
					<span className="delete" onClick={handleDelete} title="Delete"><FontAwesomeIcon icon={props.faTrash}/></span>
					<span className="status" onClick={handleId} title="Completed/ Not Completed"><FontAwesomeIcon icon={props.faCircleCheck} /></span>
				</div>
				</div>
			</div>
        </>
    )
}

export default Task;