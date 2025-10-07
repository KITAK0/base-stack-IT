import { betterAuth } from "better-auth"
import { username } from "better-auth/plugins"

export const auth = betterAuth({
	database: {
		dialect: "postgresql",
		type: "postgres",
	},
	plugins: [username()],
	emailAndPassword: {
		enabled: true,
	},
})
