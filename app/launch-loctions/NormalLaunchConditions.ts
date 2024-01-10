import { LaunchConditionsStrategy } from "../../interfaces/launch.interface";

export class NormalLaunchConditions implements LaunchConditionsStrategy {
  canLaunch(): boolean {
    return true;
  }
}
