import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

const dropzoneStyle = {
  width: '100%',
  height: '150px',
  padding: '35px 20px 20px 20px',
  marginBottom: '20px',
  border: '2px dashed rgb(211, 211, 211)',
  borderRadius: '5px',
  fontSize: '28px',
  color: 'grey',
  textAlign: 'center',
  cursor: 'pointer'
};

const DragAndDrop = ({ onDrop }) => (
  <Dropzone onDrop={onDrop} multiple={false}>
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps({ style: dropzoneStyle })}>
        <input {...getInputProps()} />
        <h3>Drop your file here, or click to select.</h3>
      </div>
    )}
  </Dropzone>
);

DragAndDrop.propTypes = {
  onDrop: PropTypes.func.isRequired
};

export default DragAndDrop;
