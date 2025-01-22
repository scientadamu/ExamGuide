import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>NewGate Dashboard</h1>
      </div>
      <div className="header-right">
        <span>Welcome, User</span>
        <Link to="/settings" className="settings-link">Settings</Link>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>NewGate Dashboard</h2>
      <Link to="/home">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/materials">Materials</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

function Home() {
  return (
    <div className="content">
      <section className="hero">
        <h1>Welcome to NewGate</h1>
        <p>Embark on your academic journey with NewGate University. Explore courses, materials, and quizzes designed to help you succeed in your studies.</p>
        <div className="intro-cards">
          <div className="intro-card">
            <h3>Courses</h3>
            <p>Access a variety of courses across multiple disciplines. Learn from the best professors and excel in your field.</p>
          </div>
          <div className="intro-card">
            <h3>Materials</h3>
            <p>Study materials, textbooks, notes, and more are available to help you understand complex topics and improve your learning.</p>
          </div>
          <div className="intro-card">
            <h3>Quizzes</h3>
            <p>Test your knowledge with quizzes and practice questions. Stay sharp and track your progress throughout the semester.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Courses() {
  return (
    <div className="content">
      <h2>Courses</h2>
      <div className="course-list">
        <div className="course-card">
          <h3>CS101: Introduction to Computer Science</h3>
          <button>View Topics</button>
        </div>
        <div className="course-card">
          <h3>MATH101: Calculus I</h3>
          <button>View Topics</button>
        </div>
      </div>
    </div>
  );
}

function Materials() {
  return (
    <div className="content">
      <h2>Materials</h2>
      <p>Explore the courses and their topics below:</p>
      {/* Add dynamic content for materials here */}
    </div>
  );
}

function Questions() {
  return (
    <div className="content">
      <h2>Questions</h2>
      <p>Select a course to view questions.</p>
      {/* Add dynamic content for questions here */}
    </div>
  );
}

function Settings() {
  return (
    <div className="content">
      <h2>Settings</h2>
      <p>Manage your account settings and preferences here.</p>
    </div>
  );
}

function Logout() {
  return (
    <div className="content">
      <h2>Logout</h2>
      <p>You have been logged out successfully.</p>
    </div>
  );
}

export default Dashboard;
