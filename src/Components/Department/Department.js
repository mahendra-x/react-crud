import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Department = () => {
    const [deptid, setdeptId] = useState('');
    const [deptname, setdeptName] = useState('');

    const handleOnSubmitChange = (event) => {
        event.preventDefault();
        
        console.log("Deptid :", deptid);
        console.log("deptname :", deptname);
    }
  return (
    <>
      <NavBar />
      <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center mt-5 border border-secondary px-5 py-5">
        <h3 className="text-center mb-3">Department Details</h3>
        <form onSubmit={handleOnSubmitChange}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Department Id
            </label>
            <input
              type="text"
              className="form-control"
              id="deptid"
              aria-describedby=""
              value={deptid}
              onChange={(e) => setdeptId(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Department Name
            </label>
            <input
              type="text"
              className="form-control"
              id="deptname"
              aria-describedby=""
              value={deptname}
              onChange={(e) => setdeptName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <button type="submit" className="btn btn-primary ">
              Add Department
            </button>
            <button type="submit" className="btn btn-danger mx-3">
              <Link className="text-white text-decoration-none" to="/">
                Back to Home
              </Link>
            </button>
          </div>
        </form>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center mt-5">
        <table className="table table-striped table-hover border-1">
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Department</th>
              <th>Employee Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>F1</td>
              <td>Finance</td>
              <td>Emp1</td>
              <td>
                <div className="d-flex">
                  <div id="edit">
                    <button type="button" className="btn btn-warning">
                      Edit
                    </button>
                  </div>
                  <div className="mx-1">
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Department;
