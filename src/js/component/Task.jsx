import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Task = (props) => {
    return (
        <>
            <div className={`${props.item.status ? "done" : ""} taskMargin`}>
				<div>
				    <span className="indexSpan">{props.index + 1}</span>
				    <span className="taskItem" key={props.index}>{props.item.title}</span>
				<div className="icons">
					<span title="Edit"><FontAwesomeIcon icon={props.faPencil}/></span>
					<span onClick={props.deleteTask} title="Delete"><FontAwesomeIcon icon={props.faTrash}/></span>
					<span title="Completed/ Not Completed"><FontAwesomeIcon icon={props.faCircleCheck} /></span>
				</div>
				</div>
			</div>
        </>
    )
}

export default Task;