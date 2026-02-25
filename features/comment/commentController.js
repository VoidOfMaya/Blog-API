import{
   createCommentService,
   updateCommentService,
   deleteCommentService
} from './commentService.js'

async function createComment(req, res) {
   try{
      //takes userId, postId, content
      const{id}= req.user;
      const{content}= req.body
      const{postId}= req.params
      const result = await createCommentService(Number(id), Number(postId), content);
      res.status(201).json({result})
   }catch(err){
      console.log(err);
      res.status(500).json({error: err})
   }
 }
async function updateComment(req, res) {
   try{
      //takes postId, content
      const {commentId, content} = req.body
      await updateCommentService(Number(commentId), content)
      res.status(201).json({message: 'Comment updated successfully'})
   }catch(err){
      res.status(500).json({error: err})
   }   
 }
async function deleteComment(req, res) {
   try{
      // takes commentId
      const {commentId}= req.body
      await deleteCommentService(Number(commentId));
      res.status(204).json({message: 'Comment deleted'})
   }catch(err){
      res.status(500).json({error: err}) 
   }    
 }

 export{
    createComment,
    updateComment,
    deleteComment
 }