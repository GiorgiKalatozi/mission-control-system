import { IObserver, ISubject } from "../../common/interfaces/rocket.interface";

export class LoggingMonitoringSystem implements IObserver {
  update(subject: ISubject): void {
    console.log(`Logging: ${subject.constructor.name} status changed.`);
  }
}
