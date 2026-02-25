import { matchedData, validationResult } from 'express-validator';
import{
   createCommentService,
   updateCommentService,
   deleteCommentService
} from './commentService.js'

async function createComment(req, res) {

   const errors = validationResult(req)
   if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
   const data = matchedData(req)

   const{id}= req.user;
   if(Number.isNaN(id)) return res.status(500).json({error: "Invalid user ID"})//this validates the id from req.user   
   try{
      //takes userId, postId, content
      const{content, postId}= data

      await createCommentService(Number(id), Number(postId), content);
      res.status(201).json({message: 'Comment created successfully!'})
   }catch(err){
      console.log(err);
      res.status(500).json({error: err})
   }
 }
async function updateComment(req, res) {
   const errors = validationResult(req)
   if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
   const data = matchedData(req)
   try{
      //takes Id, content
      const {id, content} = data
      await updateCommentService(Number(id), content)

      res.status(201).json({message: 'Comment updated successfully'})
   }catch(err){
      console.log(err);
      res.status(500).json({error: err})
   }   
 }
async function deleteComment(req, res) {
   const errors = validationResult(req)
   if(!errors.isEmpty()) return res.status(401).json({error: errors.array()})
   const {id} = matchedData(req)
   try{
      // takes comment id
      const result = await deleteCommentService(Number(id));

      res.status(204).json({message: 'Comment deleted'})
   }catch(err){
      console.log(err);
      res.status(500).json({error: err}) 
   }    
 }

 export{
    createComment,
    updateComment,
    deleteComment
 }