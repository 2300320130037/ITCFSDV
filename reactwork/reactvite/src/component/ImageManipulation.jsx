import React from 'react';
import parrot from './OIP.jpeg'; 

function ImageManipulation() {
  const [parrotHeight, setParrotHeight] = React.useState(200);
  const [parrotWidth, setParrotWidth] = React.useState(300);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Image Manipulation</h2>
      <div>
        <img 
          src={parrot}  
          height={parrotHeight}  
          width={parrotWidth}  
          alt="Parrot" 
          style={{
            border: '4px solid #4CAF50',
            borderRadius: '10px',     
          }}
        />
      </div>
      <div>
        <button onClick={() => setParrotHeight(parrotHeight + 50)}>
          Increase height
        </button>
        <button onClick={() => setParrotWidth(parrotWidth + 50)}>
          Increase Width
        </button>
        <button onClick={() => setParrotHeight(parrotHeight -50)}>
          decrease height
        </button>
        <button onClick={() => setParrotWidth(parrotWidth -50)}>
          decrease Width
        </button>
      </div>
    </div>
  );
}

export default ImageManipulation;