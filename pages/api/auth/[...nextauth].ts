import NextAuth from 'next-auth'
import { NextApiHandler } from 'next'
import GithubProvider from 'next-auth/providers/github'

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.SECRET,
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
