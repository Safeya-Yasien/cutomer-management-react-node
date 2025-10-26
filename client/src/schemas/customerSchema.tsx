import * as z from "zod";

export const CustomerSchema = z.object({
  firstName: z.string().min(2, "Too Short"),
  lastName: z.string().min(2, "Too Short"),
  gender: z.string(),
  country: z.string(),
  age: z.coerce.number().int().positive("Age must be positive"),
  phone: z.string(),
  email: z.email(),

  // lastUpdate: z.string(),
});

export type ICustomerForm = z.infer<typeof CustomerSchema>;
