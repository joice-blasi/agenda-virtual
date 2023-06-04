import { z } from "zod";

export const schemaUpdateUser = z.object({
  name: z.string().max(20, "Deve ter, no máximo, 20 caracteres").optional(),
  email: z.string().email("Entre com um email válido").max(30, "Deve ter, no máximo, 30 caracteres").optional(),
  password: z.string().min(6, "Deve ter, no mínimo, 6 caracteres").optional(),
  telephone: z.string().optional()
});

export type UpdateUserData = z.infer<typeof schemaUpdateUser>;