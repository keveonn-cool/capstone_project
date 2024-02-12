import React from 'react';
import Navbar from '../../components/Navbar';
import MyClasses from '../../components/MyClasses_Professor';

const StudentPage: React.FC = () => {
    const classes = [
        { id: '1', image: 'course1.jpeg', courseName: 'ENGG 683 - Innovation and Entrepreneurship' },
        { id: '2', image: 'course2.jpeg', courseName: 'ENEL 645 - Data Mining & Machine Learning' },
        { id: '3', image: 'course3.jpeg', courseName: 'SENG 637 - Dependability and Reliability of Software Systems' },
        { id: '4',image: 'course4.jpeg', courseName: 'ENSF 609 Team Design Project in Software Engineering' },
    ];

    return (
        <div>
            <Navbar />
            <MyClasses classes={classes} />
        </div>
    );
};

export default StudentPage;