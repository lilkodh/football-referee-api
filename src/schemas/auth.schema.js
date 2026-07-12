const { z, } = require("zod");
const userRegistrationSchema = z.object({
  name: z.string().min(8),
  email: z.string(),
  password: z.string().min(6),
  role: z.enum(["admin", "commissioner", "referee", "consultation"]),
});
const userLoginSchema = z.object({
  email: z.string().min(8),
  password: z.string().min(6),
});
const changePasswordSchema =z.object({
  currentPassword:z.string().min(6),
  newPassword: z.string().min(6)
})
module.exports = { userLoginSchema, userRegistrationSchema, changePasswordSchema};