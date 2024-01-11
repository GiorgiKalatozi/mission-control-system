import { Rocket } from "../base/Rocket";

export class MarsRocket extends Rocket {
  constructor() {
    super("Mars", 3000, 40000, 0.8);
  }
}
