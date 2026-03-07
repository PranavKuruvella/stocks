'use server'

import { headers } from "next/headers"
import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"

//signup route handler
export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, preferredIndustry, riskTolerance }: SignUpFormData) => {
  try {
    //we r using better auth for authentication
    const response = await auth.api.signUpEmail({
      body: {
        email: email,
        password: password,
        name: fullName
      }
    })

    //after auth we send email to user using inngest
    if (response) {
      await inngest.send({
        name: 'app/user.created',
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          preferredIndustry,
          riskTolerance
        }
      })
    }
    return {
      success: true,
      data: response
    }
  } catch (error) {
    console.log(`Signup failed: ${error}`)
    return {
      success: false,
      message: "Failed to sign up"
    }
  }
}

export const signOut = async () => {
  try {
    await auth.api.signOut({
      headers: await headers()
    })

  } catch (error) {
    console.log(`Signup failed: ${error}`)
    return {
      success: false,
      message: "Failed to sign up"
    }
  }
}


export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      }
    })
    return {
      success: true,
      data: response
    }
  } catch (error) {
    console.log(`SignIn failed: ${error}`)
    return {
      success: false,
      message: "Failed to sign up"
    }
  }
}