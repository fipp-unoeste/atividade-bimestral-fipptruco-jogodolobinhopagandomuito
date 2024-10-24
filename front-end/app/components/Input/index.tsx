import styled from "styled-components"

const InputEstilizado = styled.input`
  width: 400px;
  background-color: transparent;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 15px;
  margin-bottom: 35px;
  font-size: 17px;
  color: black;

  &:focus{
    border: 3px solid #10B981;
  }
`

export interface InputProps{
  tipo: string
  obrigatorio: boolean
  placeholder?: string
  nomeInput: string
  nomeLabel: string
  pattern?: string
}

export default function Input({ tipo, obrigatorio, placeholder, nomeInput, nomeLabel, pattern }: InputProps): JSX.Element{
  return(
    <>
      <label htmlFor={`i${nomeInput}`}>{nomeLabel}</label>
      <InputEstilizado 
        type={tipo}
        required={obrigatorio ? true : undefined}
        placeholder={placeholder}
        name={nomeInput}
        id={`i${nomeInput}`}
        pattern={pattern}
      />
    </>
  )
}