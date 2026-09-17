import robot from "robotjs";

import { CONFIG } from "./config.js";
import { ReversalTracker } from "./tracker.js";

robot.setMouseDelay(0);

const screen = robot.getScreenSize();

console.log("Screen:", screen);
console.log("Config:", CONFIG);

const tracker = new ReversalTracker();

console.log(tracker);