import React from "react";

export default function UpperInputs() {
  return (
    <div className=" mt-4">
      <div className="row g-4 mb-3">
        <div className="col-md-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title*
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            height={300}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={1}
            placeholder="Description"
          />
        </div>
        <div className="col-md-3">
          <div className="dropdown">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Smart Doc Type dropdown*
            </label>
            <select
              className="form-select"
              aria-label="Disabled select example"
            >
              <option selected>Select</option>
              <option value="2">MOP</option>
              <option value="1">EOP</option>
              <option value="3">SOP</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Smart Doc Section
          </label>
          <div className="form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
