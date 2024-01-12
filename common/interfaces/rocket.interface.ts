// Interface for observers (rockets)
export interface IRocketObserver {
  update(): void;
}
export interface IObserver {
  update(subject: ISubject): void;
}

export interface ISubject {
  addObserver(observer: IObserver): void;
  removeObserver(observer: IObserver): void;
  notifyObservers(): void;
}
