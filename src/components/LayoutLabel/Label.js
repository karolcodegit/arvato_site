import React from 'react'

const Label = ({ barcode, number }) => {
    return (
      <div style={{ width: '7cm', height: '4cm', border: '1px solid black', marginBottom: '1cm' }}>
        <p>Barcode: {barcode}</p>
        <p>Number: {number}</p>
      </div>
    );
  };

export default Label