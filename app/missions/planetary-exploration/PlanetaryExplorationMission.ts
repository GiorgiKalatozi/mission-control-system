import { IMission } from "../../../common/interfaces/mission.interface";
import { Mission } from "../../base/Mission";

export class PlanetaryExplorationMission extends Mission implements IMission {
  execute(): void {
    console.log("Executing Planetary Exploration Mission.");
  }
}
