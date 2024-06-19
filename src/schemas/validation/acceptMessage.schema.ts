import { z } from 'zod';

const acceptMessageSchema = z.object({
	acceptMessage : z.boolean()
})

export default acceptMessageSchema;