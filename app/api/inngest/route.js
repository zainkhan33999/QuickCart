     
     import { serve } from "inngest/next";
     import { inngest, syncUserCreation,syncUserUpdation ,} from "../../../config/inggest";
     
     
     export const { GET, POST, PUT } = serve({
       client: inngest,
       functions: [
        syncUserCreation,
        syncUserUpdation,
      
       ],
     });
        