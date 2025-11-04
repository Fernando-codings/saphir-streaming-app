import bcrypt from 'bcrypt'
import crypto from "crypto";

// hash mot de passe
export const hashPassword = async (password:  string) => {
    return bcrypt.hash(password, 10)
}

// verification du mots de passe
export const comparePassword= async (password: string, hash: string) =>{
    return bcrypt.compare(password, hash);
}


// generation d'un refrech token aleatoire 
export const generateRandomToken = () =>{
    return crypto.randomBytes(32).toString('hex')
}