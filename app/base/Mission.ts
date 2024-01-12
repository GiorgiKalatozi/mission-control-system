import { ObservableEntity } from "../../services/ObservableEntity";

export class Mission extends ObservableEntity {
  public rocketType: string;
  public launchLocation: string;
  public specificParameters: any;

  public execute(): void {
    this.notifyObservers();
    console.log(
      `Executing Mission - Rocket: ${this.rocketType}, Location: ${
        this.launchLocation
      }, Parameters: ${JSON.stringify(this.specificParameters)}`
    );
  }
}
