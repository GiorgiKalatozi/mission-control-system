import { RocketBuilder } from "../rockets/RocketBuilder";

export class Rocket {
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
  }
}
