import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  id: string,
  label: string,
  type: "text" | "email" | "password" | "tel" | "number",
  placeholder: string,
  register: UseFormRegisterReturn,
}