import { authRouter } from "./auth/authRouter.js";
import { userRouter } from "./user/userRouter.js";
import { commentRouter } from "./comment/commentRouter.js";
import { postsRouter } from "./post/postRouter.js";
import { indexRouter } from "./index/indexRouter.js";

const pipe = {
    indexRouter,
    authRouter,
    userRouter,
    commentRouter,
    postsRouter
}
export{
    pipe
}