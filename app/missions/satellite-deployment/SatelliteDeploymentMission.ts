import { IMission } from "../../../common/interfaces/mission.interface";
import { Mission } from "../../base/Mission";

export class SatelliteDeploymentMission extends Mission implements IMission {
  execute(): void {
    console.log("Executing Satellite Deployment Mission.");
  }
}
