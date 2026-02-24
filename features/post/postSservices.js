import { prisma } from "../../lib/prisma";

//createpost
async function createpost(data) {
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
async function PublishPost(id){
    await prisma.post.update({
        where: {id},
        data:{
            isPublished: true,
            publishedAt: new Date()
        }
    })
}
//edit post 
async function editPost(id,data){
    const updateData={};
    if(data.title !== undefined) updateData.title = title;
    if(data.content !== undefined) updateData.content = content;
    await prisma.post.update({
        where: {id},
        data:{
            updateData,
            updatedAt: new Date()
        }
    })
}
//delete post 
async function deletePost(id) {
    await prisma.post.delete({
        where:{id},
    });
}