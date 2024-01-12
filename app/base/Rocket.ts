import { ObservableEntity } from "../../services/ObservableEntity";

export class Rocket extends ObservableEntity {
  private type: string;
  private cargoCapacity: number;
  private maxSpeed: number;
  private fuelEfficiency: number;

  constructor(
    type: string,
    cargoCapacity: number,
    maxSpeed: number,
    fuelEfficiency: number
  ) {
    super();
    this.type = type;
    this.cargoCapacity = cargoCapacity;
    this.maxSpeed = maxSpeed;
    this.fuelEfficiency = fuelEfficiency;
  }

  public describe(): string {
    return `${this.type} Rocket - Cargo Capacity: ${this.cargoCapacity}, Max Speed: ${this.maxSpeed}, Fuel Efficiency: ${this.fuelEfficiency}`;
  }

  public launch(): void {
    console.log(`Rocket ${this.type} launched.`);
    // Notify observers (logging and monitoring system) about the status change
    this.notifyObservers();
  }
}
