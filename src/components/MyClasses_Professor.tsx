// MyClasses.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";

interface Class {
  id: string;
  image: string;
  courseName: string;
}

interface Props {
  classes: Class[];
}

const MyClasses: React.FC<Props> = ({ classes }) => {
  // State for managing the subject input
  const [newSubject, setNewSubject] = useState("");

  // State for managing the list of subjects
  const [subjects, setSubjects] = useState<string[]>([]);

  // Function to handle adding a new subject
  const addSubject = () => {
    if (newSubject.trim() !== "") {
      setSubjects([...subjects, newSubject]);
      setNewSubject("");
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Professor Dashboard</h1>
      <div>
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          placeholder="Enter Subject Name"
          className="border border-gray-300 rounded px-3 py-2 mr-2"
        />
        <button
          onClick={addSubject}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Subjects
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {classes.map((course, index) => (
          <Link key={course.id} href={`/course/${course.id}`}>
            <div
              key={index}
              className=" p-4 bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={course.image}
                alt={`Course ${index + 1}`}
                className="object-cover w-full h-32 mb-2 rounded-md"
              />
              <div className="text-center font-bold"> {course.courseName}</div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Added Subjects:</h2>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index} className="text-gray-700">{subject}>{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyClasses;
