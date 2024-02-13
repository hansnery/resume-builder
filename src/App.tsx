import { useState } from "react";
import "./App.css";
import ResumeSection from "./components/ResumeSection";
import { EmploymentHistory } from './types';

function App() {
  const [jobTitle, setJobTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [isElementVisible, setIsElementVisible] = useState(true);
  const [employmentHistories, setEmploymentHistories] = useState<EmploymentHistory[]>([{
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    city: "",
    jobDescription: "",
  }]);

  // Callback function to update the Job Title
  const handleJobTitleChange = (value: string) => {
    setJobTitle(value);
  };

  // Callback function to update the First Name
  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
  };

  // Callback function to update the Last Name
  const handleLastNameChange = (value: string) => {
    setLastName(value);
  };

  // Callback function to update the Email
  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  // Callback function to update the Phone Number
  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  // Callback function to update the Country
  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  // Callback function to update the City
  const handleCityChange = (value: string) => {
    setCity(value);
  };

  // Callback function to update the Professional Summary
  const handleProfessionalSummaryChange = (value: string) => {
    setProfessionalSummary(value);
  };

  const toggleElementVisibility = () => {
    // Get a reference to the element you want to modify
    const element = document.getElementById("resume");

    // Check if the element exists
    if (element) {
      // Check the visibility state and add/remove classes accordingly
      if (!isElementVisible) {
        // Add classes to show the element
        element.classList.add("p-5");
        element.classList.add("border");
        element.classList.add("shadow-sm");
      } else {
        // Remove classes to hide the element
        element.classList.remove("p-5");
        element.classList.remove("border");
        element.classList.remove("shadow-sm");
      }

      // Toggle the visibility state
      setIsElementVisible(!isElementVisible);
    }
  };

  // Function to add a new employment history entry
  const handleAddEmployment = (): void => {
    const newEntry: EmploymentHistory = {
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
      city: ""
    };
    setEmploymentHistories([...employmentHistories, newEntry]);
  };

  // Function to update an existing employment history entry
  const handleEmploymentChange = (index: number, field: keyof EmploymentHistory, value: string): void => {
    const newHistories = [...employmentHistories];
    newHistories[index][field] = value;
    setEmploymentHistories(newHistories);
  };

  // Function to remove an employment history entry
  const handleRemoveEmployment = (index: number): void => {
    const newHistories = [...employmentHistories];
    newHistories.splice(index, 1);
    setEmploymentHistories(newHistories);
  };

  const printPDF = () => {
    window.print();
  };

  return (
    <>
      <div className="App">
        <div className="container text-center">
          <div className="row">
            {isElementVisible && (
              <div className="col left-column">
                <div>
                  <h6>Personal Details</h6>
                  <div className="row">
                    <div className="col">
                      <ResumeSection
                        label="First Name"
                        placeholder="John"
                        value={firstName}
                        onChange={handleFirstNameChange}
                      ></ResumeSection>
                      <ResumeSection
                        label="Phone"
                        placeholder="(XXX) XXX-XXXX"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      ></ResumeSection>
                      <ResumeSection
                        label="City"
                        placeholder="Toronto"
                        value={city}
                        onChange={handleCityChange}
                      ></ResumeSection>
                    </div>
                    <div className="col">
                      <ResumeSection
                        label="Last Name"
                        placeholder="Doe"
                        value={lastName}
                        onChange={handleLastNameChange}
                      ></ResumeSection>
                      <ResumeSection
                        label="Email"
                        placeholder="john@doe.ca"
                        value={email}
                        onChange={handleEmailChange}
                      ></ResumeSection>
                      <ResumeSection
                        label="Country"
                        placeholder="Canada"
                        value={country}
                        onChange={handleCountryChange}
                      ></ResumeSection>
                    </div>
                  </div>
                  <div className="row">
                    <ResumeSection
                      label="Job Title"
                      placeholder="Full Stack Developer"
                      value={jobTitle}
                      onChange={handleJobTitleChange}
                    ></ResumeSection>
                  </div>
                </div>

                <div>
                  <h6>Professional Summary</h6>
                  <ResumeSection
                    label="Briefly describe your key skills and qualifications."
                    placeholder="e.g: Experienced professional with a track record of delivering high-quality results. Skilled in [Your Industry/Field], I bring [X] years of expertise to the table. Known for [Your Key Strengths/Qualities], I am dedicated to [Your Professional Goal]. Let's collaborate to achieve [Your Career Objective]."
                    value={professionalSummary}
                    onChange={handleProfessionalSummaryChange}
                    isTextarea={true}
                    maxLength={516}
                  ></ResumeSection>
                </div>

                <div>
                <h6>Employment History</h6>
                  {employmentHistories.map((history, index) => (
                    <div className="row shadow-sm border m-3 p-3" key={index}>
                      <div className="row">
                        <div className="col">
                          <ResumeSection
                            label="Job Title"
                            placeholder="Your Job Title"
                            value={history.jobTitle}
                            onChange={(e) => handleEmploymentChange(index, 'jobTitle', e)}
                          ></ResumeSection>
                          <ResumeSection
                            label="Company"
                            placeholder="Company Name"
                            value={history.company}
                            onChange={(e) => handleEmploymentChange(index, 'company', e)}
                          ></ResumeSection>
                          <ResumeSection
                            label="City"
                            placeholder="City Name"
                            value={history.city}
                            onChange={(e) => handleEmploymentChange(index, 'city', e)}
                          ></ResumeSection>
                        </div>
                        <div className="col">
                          <ResumeSection
                            label="Start Date"
                            placeholder="January 2024"
                            value={history.startDate}
                            onChange={(e) => handleEmploymentChange(index, 'startDate', e)}
                          ></ResumeSection>
                          <ResumeSection
                            label="End Date"
                            placeholder="February 2024"
                            value={history.endDate}
                            onChange={(e) => handleEmploymentChange(index, 'endDate', e)}
                          ></ResumeSection>
                        </div>
                      </div>
                      <ResumeSection
                        label="Job Description"
                        placeholder="e.g: Led a team of software developers in designing, developing, and implementing high-quality software solutions for clients in the finance sector. Responsibilities included project management, requirement analysis, coding, testing, and deployment. Played a key role in driving the adoption of Agile methodologies, significantly improving project delivery times and team collaboration. Enhanced system security by 30% through the implementation of comprehensive cybersecurity measures."
                        value={history.city}
                        onChange={(e) => handleEmploymentChange(index, 'city', e)}
                        isTextarea={true}
                        maxLength={516}
                      ></ResumeSection>
                      <div className="content">
                        <button className="btn btn-danger mt-0 pt-1 mb-4" onClick={() => handleRemoveEmployment(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                  <button className="btn btn-primary mt-4" onClick={handleAddEmployment}>Add Employment History</button>
                </div>
                {/*
              <ResumeSection title="Employment History">{}</ResumeSection>
              <ResumeSection title="Education">{}</ResumeSection>
              <ResumeSection title="Website & Social Links">{}</ResumeSection>
              <ResumeSection title="Skills">{}</ResumeSection>
              <ResumeSection title="Courses">{}</ResumeSection>
              <ResumeSection title="Languages">{}</ResumeSection>
              <ResumeSection title="References">{}</ResumeSection>
              <ResumeSection title="Custom Section">{}</ResumeSection> */}
              </div>
            )}

            <div className="col right-column">
              <div id="resume" className="resume-height p-5 border shadow-sm">
                <h3 className="text-uppercase">
                  {firstName || "John"} {lastName || "Doe"}
                </h3>
                <p className="fs-6 m-0">{jobTitle || "Full Stack Developer"}</p>
                <p className="fs-6 m-0">
                  {city || "Toronto"}, {country || "Canada"}
                </p>
                <div className="container mt-5">
                  <div className="row">
                    <div className="col">{phoneNumber || "(XXX) XXX-XXXX"}</div>
                    <div className="col">{email || "john@doe.ca"}</div>
                  </div>
                </div>
                <hr className="mb-3 mt-1"></hr>
                <h6 className="text-start fw-bold">Professional Summary</h6>
                <p className="text-start lh-sm small-font word-wrapper fw-light">
                  {professionalSummary ||
                    "Experienced professional with a track record of delivering high-quality results. Skilled in [Your Industry/Field], I bring [X] years of expertise to the table. Known for [Your Key Strengths/Qualities], I am dedicated to [Your Professional Goal]. Let's collaborate to achieve [Your Career Objective]."}
                </p>
                <h6 className="text-start fw-bold">Employment History</h6>
                {employmentHistories.map((history, index) => (
                  <div className="" key={index}>
                    <div className="row">
                      <div className="col text-start lh-sm small-font word-wrapper fw-bold">{history.jobTitle || "Your Job Title"}</div>
                      <div className="col text-end lh-sm small-font word-wrapper fw-light">{history.startDate || "January 2024"} to {history.endDate || "February 2024"}</div>
                    </div>
                    <div className="col text-start lh-sm small-font word-wrapper fw-light">{history.company || "Company Name"}</div>
                    <div className="col text-start lh-sm small-font word-wrapper fw-light mb-2">{history.city || "City Name"}</div>
                    <p className="text-start lh-sm small-font word-wrapper fw-light">{history.jobDescription || "Led a team of software developers in designing, developing, and implementing high-quality software solutions for clients in the finance sector. Responsibilities included project management, requirement analysis, coding, testing, and deployment. Played a key role in driving the adoption of Agile methodologies, significantly improving project delivery times and team collaboration. Enhanced system security by 30% through the implementation of comprehensive cybersecurity measures."}</p>
                    <hr />
                  </div>
                ))}                
              </div>

              {isElementVisible && (
                <button
                  className="m-4 border shadow-sm"
                  onClick={toggleElementVisibility}
                >
                  Format to save as a PDF
                </button>
              )}
              {!isElementVisible && (
                <button
                  className="element-to-hide m-2 border shadow-sm"
                  onClick={toggleElementVisibility}
                >
                  Back to Canadian Resume Builder
                </button>
              )}
              {!isElementVisible && (
                <button
                  className="element-to-hide m-2 border shadow-sm"
                  onClick={printPDF}
                >
                  Print (Save) as a PDF
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
