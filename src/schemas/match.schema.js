const {z} = require("zod");
const matchSchema = z.object({
     homeTeam: z.string().min(3) ,
    awayTeam:z.string().min(3) ,
    stadium: z.string().min(3),
    hostCity:z.string().min(3),
    matchDate:z.coerce.date(),
    phase: z.enum([
        "Group Stage",
        "Round Of 16",
        "Quarter-final",
        "Semi-final",
        "Final",
    ]),

})
module.exports = { matchSchema };