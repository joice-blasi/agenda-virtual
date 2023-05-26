import { StyledFieldset } from "./input.style"
import { IInputProps } from "./input.types"

export const Input = ({ id, label, type, placeholder, register }: IInputProps)=> {
  return (
      <StyledFieldset>
          {label && <label htmlFor={id}>{label}</label>}
          <input id={id} type={type} placeholder={placeholder} {...register} />
      </StyledFieldset>
  )
}