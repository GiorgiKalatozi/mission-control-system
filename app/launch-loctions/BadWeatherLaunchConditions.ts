import { ILaunchConditionsStrategy } from "../../common/interfaces/launch.interface";

export class BadWeatherLaunchConditions implements ILaunchConditionsStrategy {
  canLaunch(): boolean {
    return false;
  }
}
