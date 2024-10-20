import React, { useState } from "react";

const StudentRegistrationForm = () => {
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("Science");
  const [consent, setConsent] = useState("");

  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleConsentChange = (e) => {
    setConsent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>StudentRegistration)Form</h2>
      <div>
        <label>Name : </label>
        <input type="text" value={studentName} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age : </label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Course : </label>
        <select vlaue={course} onChange={handleCourseChange}>
          <option value="Science">Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
        </select>
      </div>
      <div>
        <label>Consent : </label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;
