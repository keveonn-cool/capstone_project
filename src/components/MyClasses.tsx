// MyClasses.tsx

import Link from 'next/link';
import React from 'react';

interface Class {
  id: string;
  image: string;
  courseName: string;
}

interface Props {
  classes: Class[];
}

const MyClasses: React.FC<Props> = ({ classes }) => {
  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      {classes.map((course, index)  => (
        <Link key={course.id} href={`/course/${course.id}`}>
          <div key ={index} className=" p-4 bg-white rounded-lg overflow-hidden shadow-md">
            <img src = {course.image} alt = {`Course ${index+1 }`}  className="object-cover w-full h-32 mb-2 rounded-md" />
          <div className="text-center font-bold"> {course.courseName}</div>
          </div>
        </Link>
      )
      )}
        
        
    </div>
   

  );
};

export default MyClasses;
