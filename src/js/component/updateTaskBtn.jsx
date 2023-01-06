import React from "react";

const UpdateBtn = (props) => {


	const handleCancel = (event) => {
		props.cancel(event.target.value)
	}

	const handleUpdate = () => {
		props.updateItem()
	}

	const handleValue = (event) => {
		props.changeTask(event.target.value)
	}

	const handleValueEnter = (event) => {
		if(event.key === "Enter"){
			props.updateItem(event.target.value)
		}
	}

    return(
        <>
		    <div className="row updateSection">
				<div className="col">
					<input 
					value={props.updateTask && props.updateTask.label}
					onChange={handleValue}
					onKeyUp={handleValueEnter}
					className="form-control form-control-lg" 
					type="text"
					 />
				</div>
				<div className="col-auto updateBtns">
					<button onClick={handleUpdate} className="btn btn-lg btn-success btnColor">Update</button>
					<button onClick={handleCancel} className="btn btn-lg btn-danger btnColorCancel">Cancel</button>
				</div>
			</div>
        </>
    )
}

export default UpdateBtn;