import React from "react";

const UpdateBtn = () => {
    return(
        <>
		    <div className="row ">
				<div className="col"><input className="form-control form-control-lg" type="text" /></div>
				<div className="col-auto updateBtns">
					<button className="btn btn-lg btn-success">Update</button>
					<button className="btn btn-lg btn-danger">Cancel</button>
				</div>
			</div>
        </>
    )
}

export default UpdateBtn;