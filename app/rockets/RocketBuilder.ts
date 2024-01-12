import { Rocket } from "../base/Rocket";

export class RocketBuilder {
  private type: string;
  private cargoCapacity: number;
  private maxSpeed: number;
  private fuelEfficiency: number;

  constructor(type: string) {
    this.type = type;
    this.cargoCapacity = 0;
    this.maxSpeed = 0;
    this.fuelEfficiency = 0;
  }

  public getCargoCapacity(): number {
    return this.cargoCapacity;
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  public getFuelEfficiency(): number {
    return this.fuelEfficiency;
  }

  public getType(): string {
    return this.type;
  }

  public setCargoCapacity(cargoCapacity: number): RocketBuilder {
    this.cargoCapacity = cargoCapacity;
    return this;
  }

  public setMaxSpeed(maxSpeed: number): RocketBuilder {
    this.maxSpeed = maxSpeed;
    return this;
  }

  public setFuelEfficiency(fuelEfficiency: number): RocketBuilder {
    this.fuelEfficiency = fuelEfficiency;
    return this;
  }

  // Build method to create the Rocket object
  public build(): Rocket {
    return new Rocket(
      this.type,
      this.cargoCapacity,
      this.maxSpeed,
      this.fuelEfficiency
    );
  }
}
