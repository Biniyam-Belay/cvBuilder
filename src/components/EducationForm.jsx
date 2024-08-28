/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect  } from "react";

function EducationForm({ education, setEducation, editData }) {
  const [eduDetails, setEduDetails] = useState({
    degree: "",
    institution: "",
    graduationYear: "",
  });

  useEffect(() => {
    if (editData) {
      setEduDetails(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduDetails({
      ...eduDetails,
      [name]: value,
    });
  };

  const handleAddEducation = () => {
    setEducation([...education, eduDetails]);
    setEduDetails({ degree: "", institution: "", graduationYear: "" });
  };

  return (
    <form>
      <label>
        Degree:
        <input
          type="text"
          name="degree"
          value={eduDetails.degree}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Institution:
        <input
          type="text"
          name="institution"
          value={eduDetails.institution}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Graduation Year:
        <input
          type="text"
          name="graduationYear"
          value={eduDetails.graduationYear}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleAddEducation}>
       {editData ? "Update Education" : "Add Education"}
      </button>
    </form>
  );
}

export default EducationForm;
