import React from 'react';
import './FileUpload.css';

const FileUpload = () => {
  return (
    <div className="container">
      <h4 className="upload__title">
        <i className="fab fa-react">Upload File</i>

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
              <button type="submit" className="btn btn-primary">
                Remove data
              </button>
            </form>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default FileUpload;
