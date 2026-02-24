import{ prisma } from '../lib/prisma.js'

async function getUser(id){
    return await prisma.user.findUnique({
        where:{id},
        select: {
            id : true,
            email: true,
            firstName: true,
            lastName: true,
            roleId: true,
        }
    })
}

export{
    getUser
}