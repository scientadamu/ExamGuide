import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './HomeContent.css'; // Make sure this CSS file is correctly linked

import CoursesContent from './CoursesContent';
import MaterialsContent from './MaterialsContent';
import QuestionsContent from './QuestionsContent';
import SettingsContent from './SettingsContent';

// Latest News Component
const LatestNews = () => {
    return (
        <div className="latest-news">
            <h3 className="latest-news-title">Latest News</h3>
            <p>Stay updated with the latest happenings in the world of education and exam preparation.</p>
            <ul>
                <li>
                    <a href="#" className="news-item">New exam pattern updates available for 2025!</a>
                </li>
                <li>
                    <a href="#" className="news-item">Free online workshops starting next month for all students!</a>
                </li>
                <li>
                    <a href="#" className="news-item">Important notice regarding registration deadlines.</a>
                </li>
            </ul>
            <a href="#" className="read-more-button">Read More</a>
        </div>
    );
}

// HomeContent Component that aggregates everything
const HomeContent = () => {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle navigation to Courses page
    const navigateToCourses = () => {
        navigate('/courses'); // Navigate to the Courses page
    };

    const navigateToMaterials = () => {
        navigate('/materials'); // Navigate to the Materials page
    };

    const navigateToQuestions = () => {
        navigate('/questions'); // Navigate to the Questions page
    };

    const navigateToSettings = () => {
        navigate('/settings'); // Navigate to the Settings page
    };

    return (
        <div className="home-content">
            {/* Welcome Section */}
            <div className="welcome-message card">
                <h2>Welcome to NewGate Dashboard</h2>
                <p>All your courses, materials, questions, and settings in one place. Stay organized and prepared!</p>
            </div>

            {/* Latest News Section */}
            <LatestNews />

            {/* Home Sections */}
            <div className="home-sections">
                {/* Courses Section */}
                <div className="section card fancy-card">
                    <h3>Courses</h3>
                    <p className="section-summary">
                        View all the courses available to you in your current semester. Access course details, schedules, and related resources.
                    </p>
                    <button className="navigate-button" onClick={navigateToCourses}>View Courses</button>
                </div>

                {/* Materials Section */}
                <div className="section card fancy-card">
                    <h3>Materials</h3>
                    <p className="section-summary">
                        Explore various study materials, including textbooks, notes, and guides that will help you excel in your exams.
                    </p>
                    <button className="navigate-button" onClick={navigateToMaterials}>View Materials</button>
                </div>

                {/* Questions Section */}
                <div className="section card fancy-card">
                    <h3>Questions</h3>
                    <p className="section-summary">
                        Access past exam questions, quizzes, and practice tests to assess your knowledge and prepare effectively.
                    </p>
                    <button className="navigate-button" onClick={navigateToQuestions}>View Questions</button>
                </div>

                {/* Settings Section */}
                <div className="section card fancy-card">
                    <h3>Settings</h3>
                    <p className="section-summary">
                        Manage your account settings, privacy preferences, and other personal configurations for a customized experience.
                    </p>
                    <button className="navigate-button" onClick={navigateToSettings}>View Settings</button>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
