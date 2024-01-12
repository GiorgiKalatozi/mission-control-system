import { IMission } from "../../../common/interfaces/mission.interface";
import { Mission } from "../../base/Mission";

export class HumanSpaceflightMission extends Mission implements IMission {
  execute(): void {
    console.log("Executing Human Spaceflight Mission.");
  }
}
