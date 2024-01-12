import { RocketType } from "../../common/enums";
import { ExplorerRocket } from "./ExplorerRocket";
import { LunarRocket } from "./LunarRocket";
import { MarsRocket } from "./MarsRocket";

export class RocketFactory {
  createRocket(type: RocketType) {
    switch (type.toLowerCase()) {
      case RocketType.Mars:
        return new MarsRocket();
      case RocketType.Lunar:
        return new LunarRocket();
      case RocketType.Explorer:
        return new ExplorerRocket();
      default:
        throw new Error(`Invalid rocket type: ${type}`);
    }
  }
}
