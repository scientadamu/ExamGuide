import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import './Dashboard.css'; // Ensure the CSS is linked correctly

// Importing components
import HomeContent from './HomeContent';
import CoursesContent from './CoursesContent';
import MaterialsContent from './MaterialsContent';
import QuestionsContent from './QuestionsContent';
import SettingsContent from './SettingsContent';

const Dashboard = () => {
    const [activeContent, setActiveContent] = useState('home');
    const [logoutMessage, setLogoutMessage] = useState('');
    const navigate = useNavigate();  // Hook to navigate programmatically

    // Function to handle menu click
    const handleMenuClick = (content) => {
        setActiveContent(content);
    };

    // Logout Handler
    const handleLogout = () => {
        // Display logout message
        setLogoutMessage('You have been logged out. Redirecting to the landing page...');

        // Redirect after 3 seconds
        setTimeout(() => {
            // Navigate to the landing page
            navigate('/');  // Assuming '/' is the landing page route
        }, 3000);
    };

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>NewGate Dashboard</h2>
                <a href="#" onClick={() => handleMenuClick('home')}>Home</a>
                <a href="#" onClick={() => handleMenuClick('courses')}>Courses</a>
                <a href="#" onClick={() => handleMenuClick('materials')}>Materials</a>
                <a href="#" onClick={() => handleMenuClick('questions')}>Questions</a>
                <a href="#" onClick={() => handleMenuClick('settings')}>Settings</a>
                <a href="#" onClick={handleLogout}>Logout</a> {/* Attach logout handler */}
            </div>

            {/* Main content area */}
            <div className="main-content">
                {/* Fixed Header */}
                <div className="header">
                    <h1>{activeContent.charAt(0).toUpperCase() + activeContent.slice(1)}</h1>
                </div>

                {/* Dynamic Content Section */}
                <div className="content">
                    {activeContent === 'home' && <HomeContent />}
                    {activeContent === 'courses' && <CoursesContent />}
                    {activeContent === 'materials' && <MaterialsContent />}
                    {activeContent === 'questions' && <QuestionsContent />}
                    {activeContent === 'settings' && <SettingsContent />}
                </div>

                {/* Display Logout message */}
                {logoutMessage && (
                    <div className="logout-message">
                        <p>{logoutMessage}</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Your Dashboard | All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
