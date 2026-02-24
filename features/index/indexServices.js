import { prisma } from "../../lib/prisma.js";
//gets published posts only for preview without content
async function getPublishedPostsPreview() {
    return await prisma.post.findMany({
        where: {isPublished : true},
        select:{
            id: true,
            title:true,
            publishedAt: true,
        }
    })
}
//gets published post by id with content and comments!
async function getPublishedPostById(id) {
    return await prisma.post.findMany({
        where: {id},
        select:{
            id: true,
            title:true,
            content: true,
            publishedAt: true,
            comments: true
        }
    })
}

export{
    getPublishedPostsPreview,
    getPublishedPostById
}