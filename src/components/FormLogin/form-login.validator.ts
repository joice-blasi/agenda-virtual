import { z } from "zod"

export const schemaLogin = z.object({
  email: z.string().nonempty("E-mail é obrigatório").email("Entre com um e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória")
});

export type LoginData = z.infer<typeof schemaLogin>