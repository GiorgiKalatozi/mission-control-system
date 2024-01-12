import { IMission } from "../../../common/interfaces/mission.interface";

export class SatelliteDeploymentMission implements IMission {
  execute(): void {
    console.log("Executing Satellite Deployment Mission.");
  }
}
