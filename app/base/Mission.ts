import { ObservableSubject } from "../../common/patterns/observer.pattern";

export class Mission extends ObservableSubject {
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
