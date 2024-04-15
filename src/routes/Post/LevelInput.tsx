import React, { ChangeEvent } from "react";
import styled from "@emotion/styled";
import { Emoji } from "src/components/Emoji";

interface TagInputProps {
  value: string;
  onChange: (selectedValue: string) => void;
  options: { value: string; label: string }[];
}

const LevelInput: React.FC<TagInputProps> = ({ value, onChange, options }) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <StyledWrapper>
      <div className="top-input">
        <Emoji>💼</Emoji> CẤP
      </div>
      <select className="mid" value={value} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </StyledWrapper>
  );
};

export default LevelInput;

const StyledWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  > .top-input {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  > .mid {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 1rem;
    outline-style: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`;