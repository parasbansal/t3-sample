import { z } from "zod";

export const newUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(4).max(50),
});

export type User = z.infer<typeof newUserSchema>;
