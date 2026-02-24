import { authRouter } from "./auth/authRouter.js";
import { userRouter } from "./user/userRouter.js";
import { commentRouter } from "./comment/commentRouter.js";

const pipe = {
authRouter,
userRouter,
commentRouter,
}
export{
    pipe
}