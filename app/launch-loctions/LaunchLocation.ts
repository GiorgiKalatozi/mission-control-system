import {
  ILaunchCommand,
  ILaunchConditionsStrategy,
} from "../../common/interfaces/launch.interface";
import { ObservableSubject } from "../../common/patterns/observer.pattern";
import { Rocket } from "../base/Rocket";

export class LaunchLocation extends ObservableSubject {
  private name: string;
  private conditions: ILaunchConditionsStrategy;
  private rockets: Rocket[] = [];
  private launchCommands: ILaunchCommand[] = [];

  constructor(name: string, conditions: ILaunchConditionsStrategy) {
    super();
    this.name = name;
    this.conditions = conditions;
  }

  public launchRockets(): void {
    if (!this.conditions.canLaunch()) {
      console.log(
        `Launch from ${this.name} postponed due to weather conditions.`
      );

      console.log(`Launching rockets from ${this.name}`);
      this.rockets.forEach((rocket) => {
        rocket.launch();
      });
      this.launchCommands.forEach((command) => {
        command.execute();
      });
      this.notifyObservers();
    }
  }

  public addRocket(rocket: Rocket): void {
    this.rockets.push(rocket);
    this.notifyObservers();
  }

  public addLaunchCommand(command: ILaunchCommand): void {
    this.launchCommands.push(command);
  }
}
