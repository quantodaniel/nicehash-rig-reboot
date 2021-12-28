import dotenv from "dotenv";
dotenv.config();

import { CronJob } from "cron";
import Api from "./src/api.js";
import config from "./src/config.js";

var log = function () {
  return console.log(...arguments);
};

const checkRigStatus = () => {
  const api = new Api(config);
  api
    .getTime()
    .then(() => {
      log("server time", api.time);
    })
    .then(() => api.get(`/api/v2/mining/rig2/${config.rigId}`))
    .then((res) => {
      log("status", res);
      log("--");
    });
};

new CronJob(
  "*/1 * * * *",
  function () {
    checkRigStatus();
  },
  null,
  true,
  "America/Los_Angeles"
);
