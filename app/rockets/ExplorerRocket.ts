import { Rocket } from "../base/Rocket";

export class ExplorerRocket extends Rocket {
  constructor() {
    super("Explorer", 5000, 15000, 0.6);
  }
}
