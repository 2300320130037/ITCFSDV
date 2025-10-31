import React from 'react';
import './profile.css';

function Profile({ data }) {
  return (
    <div className="container">
      <img
        src={data.pic}
        alt={data.name}
        height="150"
        width="150"
      />
      <h2>{data.name}</h2>
      <p>Branch: {data.branch}</p>
      <p>Section: {data.section}</p>
      <p>College: {data.college}</p>
    </div>
  );
}

export default Profile;