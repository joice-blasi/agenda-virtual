import { z } from "zod";

export const schemaUpdateContact = z.object({
  name: z.string().max(20, "Deve ter, no máximo, 20 caracteres").optional(),
  email: z.string().email("Entre com um email válido").max(30, "Deve ter, no máximo, 30 caracteres").optional(),
  telephone: z.string().optional()
});

export type UpdateContactData = z.infer<typeof schemaUpdateContact>;