import { useState } from "react";
import styled from "styled-components";

const InputEstilizado = styled.input`
  width: 100%;
  max-width: 400px;
  background-color: transparent;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 35px;
  font-size: 17px;
  color: black;

  &:focus {
    border: 3px solid #10b981;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export interface InputProps {
  tipo: string;
  obrigatorio: boolean;
  placeholder?: string;
  nomeInput: string;
  nomeLabel: string;
  pattern?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Input({
  tipo,
  obrigatorio,
  placeholder,
  nomeInput,
  nomeLabel,
  pattern,
  value,
  onChange,
}: InputProps): JSX.Element {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <>
      <label htmlFor={`i${nomeInput}`}>{nomeLabel}</label>
      <InputEstilizado
        type={tipo}
        required={obrigatorio ? true : undefined}
        placeholder={placeholder}
        name={nomeInput}
        id={`i${nomeInput}`}
        pattern={pattern}
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
}
