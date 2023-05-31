import { z } from "zod";

export const schemaRegister = z.object({
  name: z.string().nonempty("Nome é obrigatório").max(20, "Deve ter, no máximo, 20 caracteres"),
  email: z.string().nonempty("E-mail é obrigatório").email("Entre com um email válido").max(30, "Deve ter, no máximo, 30 caracteres"),
  password: z.string().nonempty("Senha é obrigatória"),
  telephone: z.string().nonempty("Telefone é obrigatório")
})

export type RegisterData = z.infer<typeof schemaRegister>