import type { Request, Response } from "express";
import { prisma } from '../prisma/client.ts'
import { registerSchema } from "../validators/authValidator.ts";

