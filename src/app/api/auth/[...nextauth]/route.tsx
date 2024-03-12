import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler =  NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
<<<<<<< Updated upstream
=======
    secret: process.env.NEXT_AUTH_SECRET as string
>>>>>>> Stashed changes
})

export { handler as GET, handler as POST };