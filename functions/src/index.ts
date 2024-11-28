import { onRequest } from "firebase-functions/v2/https";
import * as path from "path";
import next from "next";

const isDev = process.env.NODE_ENV !== "production";
console.log("__dirname", __dirname);
const nextApp = next({
  dev: isDev,
  conf: { distDir: path.resolve(__dirname, "../.next") }, // Ensure path points to the copied .next directory
});

const handle = nextApp.getRequestHandler();

// Prepare Next.js application during initialization
let isPrepared = false;
const prepareApp = async () => {
  if (!isPrepared) {
    await nextApp.prepare();
    isPrepared = true;
  }
};

// Export the function
export const nextjsFunc = onRequest(
  { region: "us-central1" }, // Set the region
  async (req, res) => {
    console.log('req', req)
    if (req.url === "/test") {
      res.send("Next.js Function is working!");
    }

    try {
      await prepareApp(); // Ensure app is prepared
      return handle(req, res); // Handle the request
    } catch (err) {
      console.error("Error serving Next.js app:", err);
      res.status(500).send("Internal Server Error");
    }
  }
);
