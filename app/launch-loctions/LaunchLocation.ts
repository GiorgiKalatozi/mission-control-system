import {
  ILaunchCommand,
  ILaunchConditionsStrategy,
} from "../../common/interfaces/launch.interface";
import { IRocketObserver } from "../../common/interfaces/rocket.interface";
import { Rocket } from "../base/Rocket";

export class LaunchLocation {
  private name: string;
  private conditions: ILaunchConditionsStrategy;
  private rockets: Rocket[] = [];
  private observers: IRocketObserver[] = [];
  private launchCommands: ILaunchCommand[] = [];

  constructor(name: string, conditions: ILaunchConditionsStrategy) {
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
    }
  }

  public addRocket(rocket: Rocket): void {
    this.rockets.push(rocket);
    this.notifyObservers();
  }

  public addObserver(observer: IRocketObserver): void {
    this.observers.push(observer);
  }

  public addLaunchCommand(command: ILaunchCommand): void {
    this.launchCommands.push(command);
  }

  private notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}
