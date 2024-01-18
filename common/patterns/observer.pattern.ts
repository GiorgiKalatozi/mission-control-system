import { IEventObserver } from "../interfaces/launch.interface";
import { IObserver, ISubject } from "../interfaces/rocket.interface";

export class ObservableSubject implements ISubject {
  private observers: IObserver[] = [];
  private eventObservers: IEventObserver[] = [];

  public addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }

  public notifyEventObservers(event: string): void {
    this.eventObservers.forEach((observer) => {
      observer.update(event);
    });
  }
}
