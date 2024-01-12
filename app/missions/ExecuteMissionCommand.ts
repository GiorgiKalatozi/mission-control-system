import { ICommand } from "../../common/interfaces/mission.interface";
import { Mission } from "../base/Mission";

export class ExecuteMissionCommand implements ICommand {
  private mission: Mission;

  constructor(mission: Mission) {
    this.mission = mission;
  }

  public execute(): void {
    this.mission.execute();
  }
}
