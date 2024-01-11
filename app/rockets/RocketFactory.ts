import { RocketFactoryType } from "../../common/enums";
import { ExplorerRocket } from "./ExplorerRocket";
import { LunarRocket } from "./LunarRocket";
import { MarsRocket } from "./MarsRocket";

export class RocketFactory {
  createRocket(type: RocketFactoryType) {
    switch (type.toLowerCase()) {
      case RocketFactoryType.Mars:
        return new MarsRocket();
      case RocketFactoryType.Lunar:
        return new LunarRocket();
      case RocketFactoryType.Explorer:
        return new ExplorerRocket();
      default:
        throw new Error(`Invalid rocket type: ${type}`);
    }
  }
}
