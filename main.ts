import { BadWeatherLaunchConditions } from "./app/launch-loctions/BadWeatherLaunchConditions";
import { LaunchLocation } from "./app/launch-loctions/LaunchLocation";
import { NormalLaunchConditions } from "./app/launch-loctions/NormalLaunchConditions";
import { RocketFactory } from "./app/rockets/RocketFactory";
import { RocketFactoryType } from "./enums";

const rocketFactory = new RocketFactory();

const lunarRocket = rocketFactory.createRocket(RocketFactoryType.Lunar);
const marsRocket = rocketFactory.createRocket(RocketFactoryType.Mars);
const explorerRocket = rocketFactory.createRocket(RocketFactoryType.Explorer);

console.log(lunarRocket.describe());
console.log(marsRocket.describe());
console.log(explorerRocket.describe());

const normalConditions = new NormalLaunchConditions();
const badWeatherConditions = new BadWeatherLaunchConditions();

const launchLocationA = new LaunchLocation(normalConditions);
const launchLocationB = new LaunchLocation(badWeatherConditions);

console.log("Launch Location A can launch:", launchLocationA.canLaunch()); // Output: true
console.log("Launch Location B can launch:", launchLocationB.canLaunch()); // Output: false

// Change launch conditions dynamically
launchLocationA.setLaunchConditionsStrategy(badWeatherConditions);

console.log(
  "Launch Location A can launch with bad weather conditions:",
  launchLocationA.canLaunch()
); // Output: false
