import { IObserver, ISubject } from "../common/interfaces/rocket.interface";

export class ObservableEntity implements ISubject {
  private observers: IObserver[] = [];

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
}
