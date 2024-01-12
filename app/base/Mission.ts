export class Mission {
  public rocketType: string;
  public launchLocation: string;
  public specificParameters: any;

  public execute(): void {
    console.log(
      `Executing Mission - Rocket: ${this.rocketType}, Location: ${
        this.launchLocation
      }, Parameters: ${JSON.stringify(this.specificParameters)}`
    );
  }
}
