const { z, email } = require("zod");
const userRegistrationSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["admin", "commissioner", "referee", "consultation"]),
});
const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
module.exports = { userLoginSchema, userRegistrationSchema };