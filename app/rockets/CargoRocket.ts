import { Rocket } from "./Rocket";

export class CargoRocket extends Rocket {
  constructor() {
    super("Cargo", 10000, 25000, 0.8);
  }
}
