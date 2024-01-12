import { BadWeatherLaunchConditions } from "./app/launch-loctions/BadWeatherLaunchConditions";
import { LaunchLocation } from "./app/launch-loctions/LaunchLocation";
import { NormalLaunchConditions } from "./app/launch-loctions/NormalLaunchConditions";
import { HumanSpaceflightMission } from "./app/missions/human-spaceflight/HumanSpaceflightMission";
import { PlanetaryExplorationMission } from "./app/missions/planetary-exploration/PlanetaryExplorationMission";
import { SatelliteDeploymentMission } from "./app/missions/satellite-deployment/SatelliteDeploymentMission";
import { RocketBuilder } from "./app/rockets/RocketBuilder";
import { RocketFactory } from "./app/rockets/RocketFactory";
import { RocketLaunchCommand } from "./app/rockets/RocketLaunchCommand";
import { RocketType } from "./common/enums";
import { MissionControlSystem } from "./app/base/MissionControlSystem";
import { MissionBuilder } from "./app/missions/MissionBuilder";
import { LoggingMonitoringSystem } from "./app/logging-system/LoggingMonitoringSystem";

const rocketFactory = new RocketFactory();

const lunarRocket = rocketFactory.createRocket(RocketType.Lunar);
const marsRocket = rocketFactory.createRocket(RocketType.Mars);
const explorerRocket = rocketFactory.createRocket(RocketType.Explorer);

const spaceXRocket = new RocketBuilder(RocketType.Explorer)
  .setCargoCapacity(10000)
  .setMaxSpeed(25000)
  .setFuelEfficiency(0.85)
  .build();

console.log(spaceXRocket.describe());

console.log(lunarRocket.describe());
console.log(marsRocket.describe());
console.log(explorerRocket.describe());

const normalConditions = new NormalLaunchConditions();
const badWeatherConditions = new BadWeatherLaunchConditions();

const launchLocation1 = new LaunchLocation("Launch A", normalConditions);
const launchLocation2 = new LaunchLocation("Launch B", badWeatherConditions);

launchLocation1.addRocket(lunarRocket);
launchLocation2.addRocket(marsRocket);

const launchCommand1 = new RocketLaunchCommand(explorerRocket);
const launchCommand2 = new RocketLaunchCommand(lunarRocket);

launchLocation1.addLaunchCommand(launchCommand1);
launchLocation2.addLaunchCommand(launchCommand2);

launchLocation1.launchRockets(); // Successful launch
launchLocation2.launchRockets(); // Launch postponed due to bad weather

const satelliteDeploymentMission = new SatelliteDeploymentMission();
const humanSpaceflightMission = new HumanSpaceflightMission();
const planetaryExplorationMission = new PlanetaryExplorationMission();

const missionBuilder = new MissionBuilder();

const mission1 = missionBuilder
  .setRocketType(RocketType.Explorer)
  .setLaunchLocation("Launch Site A")
  .setMissionSpecificParameters({ fact: "Earth is the best planet" })
  .build();

const mission2 = missionBuilder
  .setRocketType(RocketType.Mars)
  .setLaunchLocation("Launch Site B")
  .setMissionSpecificParameters({ destination: "Mars" })
  .build();

const missionControl = new MissionControlSystem(missionBuilder);

missionControl.createMission().execute();

const loggingMonitoringSystem = new LoggingMonitoringSystem();

explorerRocket.addObserver(loggingMonitoringSystem);
launchLocation1.addObserver(loggingMonitoringSystem);
planetaryExplorationMission.addObserver(loggingMonitoringSystem);

explorerRocket.launch();
launchLocation1.notifyObservers();
planetaryExplorationMission.notifyObservers();

// Simulate a successful launch
explorerRocket.notifyEventObservers("Successful Rocket Launch");

// Simulate a launch failure
lunarRocket.notifyEventObservers("Rocket Launch Failure");

// Simulate a mission completion
humanSpaceflightMission.notifyEventObservers("Mission Completion");
