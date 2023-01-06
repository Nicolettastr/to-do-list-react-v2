import React from "react";

const AddTaskBtn = (props) => {

    const handleChange = (event) => {
        props.handleChangeText(event.target.value)
    }

    const handleKey = (event) => {
        if(event.key === "Enter") {
            props.handleKeyUp(event.target.value)
        }
    }

    return (
        <>
            <div className="row addBtns">
				<div className="col">
                    <input 
                    value={props.newTask}
                    onChange={handleChange} 
                    onKeyUp={handleKey} 
                    className="form-control form-control-lg" 
                    type="text" />
                </div>
				<div className="col-auto ">
					<button 
                    onClick={props.addTask}
                    className="btn btn-lg btn-success btnColor">
                        Add Task
                    </button>
				</div>
			</div>
        </>
    )
}

export default AddTaskBtn;