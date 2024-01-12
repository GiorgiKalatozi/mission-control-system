import { BadWeatherLaunchConditions } from "./app/launch-loctions/BadWeatherLaunchConditions";
import { LaunchLocation } from "./app/launch-loctions/LaunchLocation";
import { NormalLaunchConditions } from "./app/launch-loctions/NormalLaunchConditions";
import { RocketBuilder } from "./app/rockets/RocketBuilder";
import { RocketFactory } from "./app/rockets/RocketFactory";
import { RocketType } from "./common/enums";

const rocketFactory = new RocketFactory();

const lunarRocket = rocketFactory.createRocket(RocketType.Lunar);
const marsRocket = rocketFactory.createRocket(RocketType.Mars);
const explorerRocket = rocketFactory.createRocket(RocketType.Explorer);

const spaceXRocket = new RocketBuilder(RocketType.Explorer)
  .setCargoCapacity(10000)
  .setMaxSpeed(25000)
  .setFuelEfficiency(0.85)
  .build();

console.log(spaceXRocket.describe());

console.log(lunarRocket.describe());
console.log(marsRocket.describe());
console.log(explorerRocket.describe());

const normalConditions = new NormalLaunchConditions();
const badWeatherConditions = new BadWeatherLaunchConditions();

const launchLocation1 = new LaunchLocation("Launch A", normalConditions);
const launchLocation2 = new LaunchLocation("Launch B", badWeatherConditions);

launchLocation1.addRocket(lunarRocket);
launchLocation2.addRocket(marsRocket);

launchLocation1.launchRockets(); // Successful launch
launchLocation2.launchRockets(); // Launch postponed due to bad weather
