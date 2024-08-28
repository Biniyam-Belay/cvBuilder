/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect  } from "react";

function WorkExperienceForm({ workExperience, setWorkExperience, editData  }) {
  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    duration: "",
  });

  useEffect(() => {
    if (editData) {
      setExperience(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    });
  };

  const handleAddExperience = () => {
    setWorkExperience([...workExperience, experience]);
    setExperience({ jobTitle: "", company: "", duration: "" });
  };

  return (
    <form>
      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          value={experience.jobTitle}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={experience.company}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={experience.duration}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleAddExperience}>
      {editData ? "Update Experience" : "Add Experience"}
      </button>
    </form>
  );
}

export default WorkExperienceForm;
