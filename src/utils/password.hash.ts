import { compare, genSalt, hash } from 'bcrypt'


export async function hashPassword(password: string) {
    const saltOrRounds = await genSalt()
    return await hash(password, saltOrRounds)
}

export async function comparePassword(password: string, rightPassword: string) {
    const auth = await compare(password, rightPassword)
    return auth
}