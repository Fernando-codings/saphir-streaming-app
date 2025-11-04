import brcypt from 'bcrypt'
import crypto from "crypto";

// hash mot de passe
export const hashPassword = async (password:  string) => {
    return brcypt.hash(password, 10)
}

// verification du mots de passr
export const comparePassword= async (password: string, hash: string) =>{
    return brcypt.compare(password, hash);
}


// generation d'un refrech token aleatoire 
export const generateRandomToken = () =>{
    return crypto.randomBytes(32).toString('hex')
}