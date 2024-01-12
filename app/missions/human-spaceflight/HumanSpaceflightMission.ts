import { IMission } from "../../../common/interfaces/mission.interface";

export class HumanSpaceflightMission implements IMission {
  execute(): void {
    console.log("Executing Human Spaceflight Mission.");
  }
}
