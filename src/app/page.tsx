import React from 'react';
import Navbar from '../components/Navbar';
import MyClasses from '../components/MyClasses';

const StudentPage: React.FC = () => {
    const classes = [
        { image: 'course1.jpeg', courseName: 'ENGG 683 - Innovation and Entrepreneurship' },
        { image: 'course2.jpeg', courseName: 'ENEL 645 - Data Mining & Machine Learning' },
        { image: 'course3.jpeg', courseName: 'SENG 637 - Dependability and Reliability of Software Systems' },
        { image: 'course4.jpeg', courseName: 'ENSF 609 Team Design Project in Software Engineering' },
    ];

    return (
        <div>
            <Navbar />
            <MyClasses classes={classes} />
        </div>
    );
};

export default StudentPage;