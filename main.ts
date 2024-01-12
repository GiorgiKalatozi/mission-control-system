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
