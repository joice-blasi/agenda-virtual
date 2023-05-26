import { z } from "zod";

export const schemaRegister = z.object({
  name: z.string().nonempty("Nome é obrigatório").max(20, "Deve ter, no máximo, 20 caracteres"),
  email: z.string().email("Entre com um email válido").max(30, "Deve ter, no máximo, 30 caracteres"),
  password: z.string().nonempty("Senha é obrigatória"),
  telephone: z.number()
})

export type RegisterData = z.infer<typeof schemaRegister>