import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Employee = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const hanbleOnSubmit = (event) => {
    event.preventDefault();
    console.log("id : ", id);
    console.log("Name : ", name);
    console.log("selectedValue : ", selectedValue);
  };
  return (
    <>
      <NavBar />
      <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center mt-5 border border-secondary px-5 py-5">
        <h3 className="text-center mb-3">Employee Details</h3>
        <form onSubmit={hanbleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Employee Id
            </label>
            <input
              type="text"
              className="form-control"
              id="empId"
              aria-describedby="emailHelp"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue={selectedValue}
              onChange={(event) => setSelectedValue(event.target.value)}
            >
              <option> Select Department</option>
              <option>HR</option>
              <option>Operation</option>
              <option>Finance</option>
              <option>tech</option>
            </select>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <div className="">
              <button type="submit" className="btn btn-primary ">
                Add Employee
              </button>
            </div>
            <div className="mx-3">
              <button type="submit" className="btn btn-danger">
                <Link className="text-white text-decoration-none" to="/">
                  Back to Home
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 container justify-content-center mt-5">
        <table className="table table-striped table-hover border-1">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emp1</td>
              <td>Jack</td>
              <td>Tech</td>
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

export default Employee;
