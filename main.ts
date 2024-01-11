import { RocketFactory } from "./app/rockets/RocketFactory";
import { RocketFactoryType } from "./common/enums";

const rocketFactory = new RocketFactory();

const lunarRocket = rocketFactory.createRocket(RocketFactoryType.Lunar);
const marsRocket = rocketFactory.createRocket(RocketFactoryType.Mars);
const explorerRocket = rocketFactory.createRocket(RocketFactoryType.Explorer);

console.log(lunarRocket.describe());
console.log(marsRocket.describe());
console.log(explorerRocket.describe());
