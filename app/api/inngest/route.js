import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation } from "../../../config/inggest";

// Simplified export - only needs default POST handler
export default serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation],
  signingKey: process.env.INNGEST_SIGNING_KEY // MUST ADD THIS
});

export const config = {
  api: {
    bodyParser: false, // Required for webhooks
  },
};