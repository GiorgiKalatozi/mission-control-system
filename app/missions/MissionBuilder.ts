import { IMissionBuilder } from "../../common/interfaces/mission.interface";
import { Mission } from "../base/Mission";

export class MissionBuilder implements IMissionBuilder {
  private mission: Mission = new Mission();

  public setRocketType(rocketType: string): MissionBuilder {
    this.mission.rocketType = rocketType;
    return this;
  }

  public setLaunchLocation(launchLocation: string): MissionBuilder {
    this.mission.launchLocation = launchLocation;
    return this;
  }

  public setMissionSpecificParameters(parameters: any): MissionBuilder {
    this.mission.specificParameters = parameters;
    return this;
  }

  public build(): Mission {
    const builtMission = this.mission;
    this.mission = new Mission(); // Reset for potential reuse
    return builtMission;
  }
}
