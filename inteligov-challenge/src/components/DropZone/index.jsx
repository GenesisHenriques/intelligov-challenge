import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import { BiErrorAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import './style.css';
import { csvFile } from '../../app/slices/selections';
import parseCSV from '../../utils/parseCsv';

function MyDropzone() {
  const dispatch = useDispatch();

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length === 0) window.alert('Upload apenas de arquivos csv \nUm arquivo por vez');

    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    fetch(fileUrl)
      .then((response) => response.text())
      .then((data) => {
        dispatch(csvFile(parseCSV(data)))
      });
  }, [dispatch])

  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
    accept: '.csv',
    maxFiles: 1,
    onDrop
  })

  return (
    <div className='dropzone' {...getRootProps()}>
      <input className='a' accept="image/*" {...getInputProps()} />
      <p>
      {
        isDragActive ?
        <p>Solte os arquivos aqui...</p> :
          isDragReject ?
        <BiErrorAlt /> :
        <FiUpload />
      }
      </p>
    </div>
  )
}

export default MyDropzone;