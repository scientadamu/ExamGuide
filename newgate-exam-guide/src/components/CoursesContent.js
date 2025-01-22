// src/components/CoursesContent.js
import React from 'react';
import './CoursesContent.css';  // Import the CSS file for styling

const CoursesContent = () => {
    return (
        <div className="courses-container">
            <h3>List of Courses</h3>
            <p>Here are the courses you are enrolled in. Select one to view more details.</p>

            <div className="semester-section">
                <h4>Semester 1</h4>
                <p><strong>Department:</strong> Department of Physiotherapy</p>
                <p><strong>Level:</strong> 100 Level</p>

                <div className="course-cards">
                    <div className="course-card">
                        <h5>DPT 101 - Human Anatomy I</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Introduction to the structure of the human body, including bones, muscles, and organs.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 3</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>DPT 102 - Physiology I</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Study of the functions of the human body systems, including the cardiovascular, respiratory, and nervous systems.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 3</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>DPT 103 - Introduction to Physiotherapy</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Overview of the physiotherapy profession, including basic principles, therapeutic techniques, and clinical practices.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 4</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>DPT 104 - Health and Disease Prevention</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Understanding health promotion and disease prevention strategies, including public health initiatives.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 2</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>DPT 105 - Basic Biomechanics</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Study of mechanical principles and how they apply to human movement, posture, and injury prevention.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 3</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>GEN 101 - English Language and Communication Skills</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Focus on improving writing and speaking skills, with an emphasis on academic and professional communication.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 3</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>GEN 102 - General Biology I</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Introduction to biological sciences, including the study of cells, genetics, and the basics of organisms' functioning.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 4</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>GEN 103 - General Physics I</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Fundamentals of physics, including mechanics, forces, motion, and energy, with applications to human movement.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 3</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                    <div className="course-card">
                        <h5>GEN 104 - General Chemistry I</h5>
                        <div className="course-details">
                            <span>Course Description:</span>
                            <p className="course-description">Basic principles of chemistry, including atomic structure, bonding, and chemical reactions.</p>
                            <div className="course-info">
                                <p><strong>Credits:</strong> 3</p>
                                <p><strong>Prerequisites:</strong> None</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add the same structure for Semester 2 as needed */}
        </div>
    );
};

export default CoursesContent;
