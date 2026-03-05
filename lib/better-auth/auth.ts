import { connectToDatabase } from "@/database/mongoose";
import { betterAuth } from "better-auth";
import { mongoDbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
let authInstance: any = null

export const getAuth = async () => {
  if (authInstance) return authInstance

  const mongoose = await connectToDatabase()
  const db = mongoose.connection.db

  if (!db) {
    throw new Error("Database not connected")
  }

  if (!process.env.BETTER_AUTH_SECRET) {
    throw new Error("BETTER_AUTH_SECRET is not set in environment variables")
  }

  if (!process.env.BETTER_AUTH_URL) {
    throw new Error("BETTER_AUTH_URL is not set in environment variables")
  }

  authInstance = betterAuth({
    database: mongoDbAdapter(db as any),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
    emailAndPassword: {
      enabled: true,
      disableSignUp: false,
      requireEmailVerification: false,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },
    plugins: [nextCookies()],
  })

  return authInstance
}