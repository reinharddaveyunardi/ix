import React from "react";
import studentsData from "../../data/students.json";

const Students = () => {
  return (
    <div>
      <h1>Student List</h1>
      {Object.keys(studentsData.class).map((className) => (
        <div key={className}>
          <h2>{className}</h2>
          <h3>Homeroom:</h3>
          <ul>
            {studentsData.class[className].homeroom.map((teacher) => (
              <li key={teacher.homeroom_id}>
                <p>Name: {teacher.name}</p>
                <p>Role: {teacher.role}</p>
              </li>
            ))}
          </ul>
          <h3>Students:</h3>
          <ul>
            {studentsData.class[className].students.map((student) => (
              <li key={student.student_id}>
                <h4>{student.name}</h4>
                <p>Student ID: {student.student_id}</p>
                <p>Quotes: {student.quotes}</p>
                <p>Subject: {student.subject}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Students;
