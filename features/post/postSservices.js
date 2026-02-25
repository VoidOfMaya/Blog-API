import { prisma } from "../../lib/prisma.js";

//get all posts
async function getPostsService(id) {
    return await prisma.post.findMany({
        where:{userId: id}
    })
}
//createpost
async function createpostSevice(data) {
    await prisma.post.create({
        data:{
            title: data.title,
            content: data.content,
            author:{
                connect:{id: data.id}
            }
        },
                
    })
}
//publish post
async function publishPostSevice(id){
    await prisma.post.update({
        where: {id},
        data:{
            isPublished: true,
            publishedAt: new Date()
        }
    })
}
//edit post 
async function editPostSevice(id,data){
    const {title, content} = data
    const updateData={};
    if(title !== '') updateData.title = title;
    if(content !== '') updateData.content = content;
    await prisma.post.update({
        where: {id},
        data:{
            ...updateData,
            updatedAt: new Date()
        }
    })
}
//delete post 
async function deletePostSevice(id) {
    await prisma.post.delete({
        where:{id}
    });
}
export{
    getPostsService,
    createpostSevice,
    publishPostSevice,
    editPostSevice,
    deletePostSevice
}