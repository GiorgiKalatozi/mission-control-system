import { ILaunchConditionsStrategy } from "../../common/interfaces/launch.interface";

export class NormalLaunchConditions implements ILaunchConditionsStrategy {
  canLaunch(): boolean {
    return true;
  }
}
