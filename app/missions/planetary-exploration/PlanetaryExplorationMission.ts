import { IMission } from "../../../common/interfaces/mission.interface";

export class PlanetaryExplorationMission implements IMission {
  execute(): void {
    console.log("Executing Planetary Exploration Mission.");
  }
}
