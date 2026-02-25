
import { setupPassport } from './auth/authMiddleware.js';
import { isAuthenticated,} from './auth/authMiddleware.js'
import { isAuthor } from './auth/authMiddleware.js';
const midware = {
    setupPassport,
    isAuthenticated,
    isAuthor,
}
export{
    midware
}