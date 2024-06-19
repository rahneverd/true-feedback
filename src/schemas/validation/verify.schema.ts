import { z } from 'zod';

const verifySchema = z.object({
	code : z.string().min(6).max(6)
})

export default verifySchema;