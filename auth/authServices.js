import {prisma} from '../lib/prisma.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


async function registerUser(data){   
 
    const role = await prisma.role.findUnique({where:{name: 'user'}})
    if(!role) throw new Error({error: "no role found"})
    console.log("at atuhService: registerUser accessed! ")
    await prisma.user.create({
        data:{
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: await bcrypt.hash(data.password, 10),
            role: {connect:{name: "user"}},

        },
    })
}
async function login(data){
    //sheck if user valid
    console.log('auth service: login')
    const {email, password} = data
    const user = await prisma.user.findUnique({where: {email}});          
    if(!user)throw new Error ("invalid credentials");

    const match = await bcrypt.compare(password, user.password);
    if(!match)throw new Error ("invalid credentials");
    //signing a jwt token
    const token = jwt.sign(
        {id: user.id, email: user.email},
        process.env.JWT_KEY,
        {expiresIn: '1h'}
    )
    return{user:{
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roleId: user.roleId
    }, token};
}
export{
    registerUser,
    login
}
