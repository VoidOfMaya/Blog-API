
import { setupPassport } from './auth/authMiddleware.js';
import { isAuthenticated,} from './auth/authMiddleware.js'

const midware = {
    setupPassport,
    isAuthenticated,
}
export{
    midware
}