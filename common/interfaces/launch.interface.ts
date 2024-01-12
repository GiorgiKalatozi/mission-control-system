export interface ILaunchConditionsStrategy {
  canLaunch(): boolean;
}
export interface ILaunchCommand {
  execute(): void;
}
