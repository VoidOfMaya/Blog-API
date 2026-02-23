import {prisma} from '../lib/prisma.js'
import bcrypt from 'bcryptjs'

async function registerUser(data){
    
    try{
        const role = await prisma.role.findUnique({where:{name: 'user'}})
        if(!role) return //throw error here
        console.log("at atuhService: registerUser accessed! ")
        return await prisma.user.create({
            data:{
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                password: await bcrypt.hash(data.password, 10),
                role: {connect:{name: "user"}},

            },
        })
    }catch(err){
        console.log(err)
    }

}
export{
    registerUser
}
