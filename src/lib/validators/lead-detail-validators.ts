import { z } from "zod";



export const LeadDetailValidator = z.object({
    subsource: z.string(),
    idnumber: z.string(),
    firstnames: z.string(),
    surname: z.string(),
    cellular: z.string(),
    email: z.string().email(),
    historically_disadvantaged: z.string(),
    province: z.string()
})

export type TLeadDetailValidator = z.infer<typeof LeadDetailValidator>