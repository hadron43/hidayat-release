import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainJumbotron from '../../components/MainJumbotron'
import Tests from './Tests'
import Quiz from './Quiz'

function Resources() {
    return (
        <>
        <MainJumbotron
            title="Aptitute Test"
            subtitle="Aptitude measures the ability of a student to acquire a 
            set of skills or training by measuring the student's natural 
            talents and inclinations. This test includes seven different 
            subcomponents. A complete analysis 
            is provided after giving all the subtests.   
            "
            image="assets/Resources/banner.png"
        />
        <Routes>
            <Route path="/" element={<Tests />}></Route>
            <Route path=":quizName" element={<Quiz />}></Route>
        </Routes>
        </>
    );
}

export default Resources;