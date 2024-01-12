import { Mission } from "../../app/base/Mission";

export interface IMission {
  execute(): void;
}

export interface IMissionBuilder {
  setRocketType(rocketType: string): IMissionBuilder;
  setLaunchLocation(launchLocation: string): IMissionBuilder;
  setMissionSpecificParameters(parameters: any): IMissionBuilder;
  build(): Mission;
}
