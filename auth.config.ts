import github from "next-auth/providers/github";
import google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";



export default {
    providers:[
        github({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
        google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        })
    ]
} satisfies NextAuthConfig;