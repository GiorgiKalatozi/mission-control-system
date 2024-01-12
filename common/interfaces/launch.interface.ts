export interface ILaunchConditionsStrategy {
  canLaunch(): boolean;
}
export interface ILaunchCommand {
  execute(): void;
}

export interface IEventObserver {
  update(event: string): void;
}
