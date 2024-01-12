import { ILaunchCommand } from "../../common/interfaces/launch.interface";
import { Rocket } from "../base/Rocket";

export class RocketLaunchCommand implements ILaunchCommand {
  private rocket: Rocket;

  constructor(rocket: Rocket) {
    this.rocket = rocket;
  }

  public execute(): void {
    this.rocket.launch();
  }
}
