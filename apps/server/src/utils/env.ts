import dotenv from "dotenv";
import path from "path";
import z from "zod";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const envSchema = z.object({
  // NODE_ENV: z.enum(["production", "development", "test"]),
  PORT: z.string().regex(/^\d+$/).transform(Number),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  throw new Error("INVALID ENVIRONMENT VARIABLES");
}

export default env.data;
