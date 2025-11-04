import type { Request, Response } from "express";
import { prisma } from '../prisma/client.ts'
import bcypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { registerSchema } from "../validators/authValidator.ts";
