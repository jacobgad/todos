import { z } from 'zod';

const envSchema = z.object({
	DATABASE_URL: z.string().url(),
	NODE_ENV: z.enum(['development', 'test', 'production']),
});

const env = envSchema.parse(process.env);

export default env;
