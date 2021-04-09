import React from 'react';
import './Upload.css';
import FileUpload from './Components/FileUpload';

const Upload = () => {
  return (
    <div className="upload">
      <h4 className="upload__title">
        <i className="fab fa-react">Upload File</i>
      </h4>
      <FileUpload />
    </div>
  );
};
export default Upload;
