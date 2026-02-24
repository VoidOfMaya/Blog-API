import{ prisma } from '../../lib/prisma.js'

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

async function enableAuthorship(id){
    await prisma.user.update({
        where: {id},
        data:{
            role:{
                connect:{name: 'author'}
            }
        }
    })
}

export{
    getUser,
    enableAuthorship,
}