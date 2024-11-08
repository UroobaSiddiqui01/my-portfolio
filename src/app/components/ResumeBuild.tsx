// /pages/resume-builder.tsx
"use client";

import { useState } from 'react';

const ResumeBuilder = () => {
  // State for storing user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for further functionality, like generating a PDF
  };

  return (
    <section id="ResumeBuilder" className="container mx-auto py-12 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Resume</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education" className="block font-semibold mb-2">Education</label>
          <textarea
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your education details"
          />
        </div>

        {/* Experience */}
        <div>
          <label htmlFor="experience" className="block font-semibold mb-2">Experience</label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your work experience"
          />
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block font-semibold mb-2">Skills</label>
          <input
            id="skills"
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="List your skills separated by commas"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
        >
          Preview Resume
        </button>
      </form>

      {/* Preview Section */}
      {name && (
        <div className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">Resume Preview</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Education:</strong> {education}</p>
          <p><strong>Experience:</strong> {experience}</p>
          <p><strong>Skills:</strong> {skills}</p>
        </div>
      )}
    </section>
  );
};

export default ResumeBuilder;


