import { LaunchConditionsStrategy } from "../../interfaces/launch.interface";

export class LaunchLocation {
  private conditionsStrategy: LaunchConditionsStrategy;

  constructor(conditionsStrategy: LaunchConditionsStrategy) {
    this.conditionsStrategy = conditionsStrategy;
  }

  setLaunchConditionsStrategy(
    conditionsStrategy: LaunchConditionsStrategy
  ): void {
    this.conditionsStrategy = conditionsStrategy;
  }

  canLaunch(): boolean {
    return this.conditionsStrategy.canLaunch();
  }
}
