import { IMission } from "../../common/interfaces/mission.interface";

export class Mission {
  private mission: IMission;

  constructor(mission: IMission) {
    this.mission = mission;
  }

  public setMission(mission: IMission): void {
    this.mission = mission;
  }

  public executeMission(): void {
    this.mission.execute();
  }
}
