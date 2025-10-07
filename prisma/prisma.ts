import { PrismaClient } from "@prisma/client"

declare global {
	// allow global prisma to be stored across module reloads in development
	// eslint-disable-next-line no-var
	var __prisma: PrismaClient | undefined
}

const prisma =
	global.__prisma ??
	new PrismaClient({
		log: ["query", "error", "info", "warn"],
	})

// if (process.env.NODE_ENV !== "production") global.__prisma = prisma

export default prisma
