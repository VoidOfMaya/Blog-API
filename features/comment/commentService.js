import { prisma } from "../../lib/prisma.js";

async function createCommentService(userId, postId, content) {
    return await prisma.comment.create({
        data:{
            content,
            post:{connect:{id: postId}},
            author:{connect: {id: userId}}
        }
    })
}
async function updateCommentService(id, content) {
    await prisma.comment.update({
        where: {id},
        data:{
            content,
        }
    })
}
async function deleteCommentService(id) {
    return await prisma.comment.delete({
        where: {id}
    })
}
export{
    createCommentService,
    updateCommentService,
    deleteCommentService
}