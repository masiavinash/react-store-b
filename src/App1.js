import React from 'react'
export default function App1(props) {
  return (
    <div style={{ backgroundColor:'pink' , textAlign:'center' , textstyle:'bold' }}>
        {props.name} - {props.age}
    </div>
  );
}