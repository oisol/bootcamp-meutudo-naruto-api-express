import express, { json } from "express";
// router
import router from "./routes";

const createApp = () => {
  const app = express();
  // similar to application/json
  app.use(json());
  // main route, equal to every route
  app.use("/api", router);

  return app;
};

export default createApp;
