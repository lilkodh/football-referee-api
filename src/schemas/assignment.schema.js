const {z} = require("zod");
const assignmentSchema = z.object({
    refereeId: z.coerce.number().int().positive(),
    matchId: z.coerce.number().int().positive(),
    role : z.enum([
         "Central Referee",
        "Assistant Referee",
        "Fourth Official",
        "VAR",
        "AVAR",
    ])
});
module.exports = {assignmentSchema};