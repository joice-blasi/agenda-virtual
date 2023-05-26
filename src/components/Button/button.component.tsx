import { StyledButton } from "./button.style"
import { IButtonProps } from "./button.types"

export const Button = ({text}: IButtonProps) => {
  return (
    <StyledButton type="submit">
      {text}
    </StyledButton>
  )
}