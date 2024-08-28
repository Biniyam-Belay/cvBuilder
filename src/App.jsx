// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './App.css'
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import EducationForm from "./components/EducationForm";
import CVPreview from "./components/CVPreview ";

function App () {

  const [personalDetails, setPersonalDetails] = useState({

      name: "",
      email: "",
      phone: "",

  });

  const [workExperience, setWorkExperience] = useState ([]);
  const [education, setEducation] = useState([]);
  const [editWork, setEditWork] = useState(null);
  const [editEdu, setEditEdu] = useState(null);

  const editWorkExperience = (index) => {
    const experience = workExperience[index];
    setWorkExperience(workExperience.filter((_, i) => i !== index));
    setEditWork(experience);
  };

  const deleteWorkExperience = (index) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  const editEducation = (index) => {
    const edu = education[index];
    setEducation(education.filter((_, i) => i !== index));
    setEditEdu(edu);
  };

  const deleteEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
        <h1>Cv Builder</h1>
        
        <PersonalDetailsForm 
          personalDetails = {personalDetails}
          setPersonalDetails = {setPersonalDetails}
        />

        <WorkExperienceForm 
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          editData={editWork}
        />

        <EducationForm 
          education={education} 
          setEducation={setEducation} 
          editData={editEdu}
        />

        <CVPreview
          personalDetails={personalDetails}
          workExperience={workExperience}
          education={education}
          editWorkExperience={editWorkExperience}
          deleteWorkExperience={deleteWorkExperience}
          editEducation={editEducation}
          deleteEducation={deleteEducation}
        />
    </div>
  );
}

export default App
