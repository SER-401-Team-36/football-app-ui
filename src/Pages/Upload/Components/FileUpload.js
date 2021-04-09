import React, { Fragment, useState } from 'react';

const FileUpload = () => {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col">
          <form
            action="http://localhost:5000/upload/upload"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  name="file"
                  id="file"
                />
                <label
                  className="custom-file-label"
                  htmlFor="custom-file"
                ></label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
