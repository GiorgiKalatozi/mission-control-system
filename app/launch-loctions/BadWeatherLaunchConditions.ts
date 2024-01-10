import { LaunchConditionsStrategy } from "../../interfaces/launch.interface";

export class BadWeatherLaunchConditions implements LaunchConditionsStrategy {
  canLaunch(): boolean {
    return false;
  }
}
