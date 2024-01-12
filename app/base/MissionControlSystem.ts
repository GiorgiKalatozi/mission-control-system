import { IMissionBuilder } from "../../common/interfaces/mission.interface";
import { Mission } from "./Mission";

export class MissionControlSystem {
  private missionBuilder: IMissionBuilder;

  constructor(missionBuilder: IMissionBuilder) {
    this.missionBuilder = missionBuilder;
  }

  public createMission(): Mission {
    return this.missionBuilder.build();
  }
}
