import React from "react";

type ResumeSectionProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  isTextarea?: boolean; // Add a prop to indicate whether it should be a textarea
  maxLength?: number; // Optional prop to define character limit
};

const ResumeSection: React.FC<ResumeSectionProps> = ({
  label,
  placeholder,
  value,
  onChange,
  isTextarea = false, // Default to false if the prop is not provided
  maxLength, // Add maxLength to the destructured props
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  const inputElement = isTextarea ? (
    <textarea
      className="form-control"
      id="inputField"
      placeholder={placeholder}
      value={value}
      rows={6}
      maxLength={maxLength} // Apply maxLength attribute
      onChange={handleChange}
    />
  ) : (
    <input
      type="text"
      className="form-control"
      id="inputField"
      placeholder={placeholder}
      value={value}
      maxLength={maxLength} // Apply maxLength attribute
      onChange={handleChange}
    />
  );

  return (
    <div className="mb-4">
      <form>
        <div className="mb-3">
          <label htmlFor="inputField" className="form-label">
            {label}
          </label>
          {inputElement}
        </div>
      </form>
    </div>
  );
};

export default ResumeSection;
