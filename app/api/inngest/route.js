      
      import { serve } from "inngest/next";
      import { inngest, syncUserCreation,syncUserDeletion,syncUserUpdation ,} from "../../../config/inngest"
      
      
      export const { GET, POST, PUT ,DELETE} = serve({
        client: inngest,
        functions: [
          syncUserCreation,
          syncUserUpdation,
          syncUserDeletion,
        ],
      });
          