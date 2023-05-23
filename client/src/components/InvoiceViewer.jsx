import React from 'react';
import {useSelector} from 'react-redux'

const OpenBlobButton = () => {
  const blobURL = useSelector((state)=> state.orderReducer.invoice) 
console.log(blobURL)
  const handleOpenBlob = () => {
    window.location.href = blobURL;


  };

  return (
    <button onClick={handleOpenBlob}>Open Blob</button>
  );
};

export default OpenBlobButton;