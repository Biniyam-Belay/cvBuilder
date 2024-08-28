/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import html2pdf from "html2pdf.js";

function CVPreview({ personalDetails, workExperience, education, editWorkExperience, deleteWorkExperience, editEducation, deleteEducation }) {

    const handleDownload = () => {
        const element = document.querySelector(".cv-preview");
        html2pdf()
            .from(element)
            .save('CV.pdf');
        };

  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>

      <section>
        <h3>Personal Details</h3>
        <p>Name: {personalDetails.name}</p>
        <p>Email: {personalDetails.email}</p>
        <p>Phone: {personalDetails.phone}</p>
      </section>

      <section>
        <h3>Work Experience</h3>
        {workExperience.map((job, index) => (
          <div key={index}>
            <p>Job Title: {job.jobTitle}</p>
            <p>Company: {job.company}</p>
            <p>Duration: {job.duration}</p>

            <button onClick={() => editWorkExperience(index)}>Edit</button>
            <button onClick={() => deleteWorkExperience(index)}>Delete</button>
          </div>
        ))}
      </section>

      <section>
        <h3>Education</h3>
        {education.map((edu, index) => (
          <div key={index}>
            <p>Degree: {edu.degree}</p>
            <p>Institution: {edu.institution}</p>
            <p>Graduation Year: {edu.graduationYear}</p>

            <button onClick={() => editEducation(index)}>Edit</button>
            <button onClick={() => deleteEducation(index)}>Delete</button>
          </div>
        ))}
      </section>

      <button onClick={handleDownload}>Download as PDF</button>
      
    </div>
  );
}

export default CVPreview;
