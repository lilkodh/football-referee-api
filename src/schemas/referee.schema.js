const { z } = require("zod");
const refereeSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  nationality: z.string().min(2),
  category: z.enum([
    "Referee",
    "Assistant Referee",
    "Fourth Official",
    "VAR",
    "AVAR",
  ]),
  confederation: z.enum(["UEFA", "CONMEBOL", "CAF", "AFC", "CONCACAF", "OFC"]),
  status: z.enum(["Active", "Suspended", "Injured", "Retired"]),
  experience: z.number(),
});

module.exports = { refereeSchema };