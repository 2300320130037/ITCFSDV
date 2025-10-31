import React from 'react';
import Profile from './Profile';
import './gallery.css'; // optional if you want styling

export default function Gallery() {
  const students = [
    {
      pic: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
      name: "Alok",
      branch: "IT",
      section: "C",
      college: "ABESEC"
    },
    {
      pic: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
      name: "Aditya",
      branch: "CSE",
      section: "A",
      college: "ABESEC"
    },
    {
      pic: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
      name: "Asit",
      branch: "ECE",
      section: "B",
      college: "ABESEC"
    },
    {
      pic: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
      name: "Ashok",
      branch: "IT",
      section: "A",
      college: "ABESEC"
    }
  ];

  return (
    <div className="gallery">
      {students.map((student, index) => (
        <Profile key={index} data={student} />
      ))}
    </div>
  );
}