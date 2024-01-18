import {
  ICommand,
  IMissionBuilder,
} from "../../common/interfaces/mission.interface";
import { Mission } from "./Mission";

export class MissionControlSystem {
  private missionBuilder: IMissionBuilder;
  private commandQueue: ICommand[] = [];

  constructor(missionBuilder: IMissionBuilder) {
    this.missionBuilder = missionBuilder;
  }

  public addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }

  public createMission(): Mission {
    return this.missionBuilder.build();
  }

  public executeCommandsConcurrently(): void {
    this.commandQueue.map((command) => {
      command.execute();
      console.log("All commands executed.");
    });
  }
}
