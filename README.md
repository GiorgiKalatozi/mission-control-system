# Mission Control System for a space agency 🚀🪐🌌

You are tasked with designing a Mission Control System for a space agency that manages various types of rockets, launch locations, and missions. Each rocket has specific capabilities, and missions can be of different types (e.g., satellite deployment, interplanetary exploration, etc.). Launch locations have unique requirements and capabilities.
Design at least three types of rockets with varying capabilities, such as cargo capacity, maximum speed, and fuel efficiency.
Implement a way to easily add new rocket types in the future.
Design a system to manage different launch locations, each with its own set of conditions (e.g., weather constraints, fuel availability).
Each launch location should be able to handle multiple rockets simultaneously.
Create a system to define various mission types (e.g., satellite deployment, manned spaceflight, planetary exploration).
Each mission should specify the required rocket type, launch location, and any additional mission-specific parameters.
Implement a mechanism to allocate an available rocket to a mission based on its requirements and the availability of rockets at the launch location.
Design a logging and monitoring system to track the status of each rocket, launch location, and mission.
Provide a way to log critical events, such as successful launches, failures, and mission completions.
Ensure that the system is designed to be flexible and extensible, allowing for the addition of new rocket types, launch locations, and mission types without major modifications to existing code.
Address the potential need for concurrent rocket launches and missions.
Identify and apply relevant design patterns to improve the overall design and maintainability of the system.
Nice to have
UML diagrams illustrating the class structure and relationships.
Documentation explaining the design choices, rationale, and any design patterns used.

<!--

Strategy Pattern:

Implement the Strategy pattern for the launch locations. Define a LaunchConditions interface with methods like checkWeather, checkFuelAvailability, etc. Create concrete classes for each launch location implementing this interface, allowing launch locations to have unique conditions.
Observer Pattern:

Apply the Observer pattern for the logging and monitoring system. Have a Logger or Monitor as the subject that notifies observers (loggers) about critical events such as successful launches, failures, and mission completions.
Singleton Pattern:

Use the Singleton pattern for the AllocationManager to ensure that there is only one instance responsible for allocating rockets to missions. This ensures centralized control over the allocation process.
Command Pattern:

Implement the Command pattern for mission execution. Define a MissionCommand interface with an execute method. Create concrete command classes for each mission type. This way, you can encapsulate a request (mission) as an object, parameterize it with the required rocket type, launch location, and other parameters, and execute it when needed.
Decorator Pattern:

Apply the Decorator pattern for rockets. Define a base Rocket class and have decorator classes for additional capabilities. This allows for easy addition of new capabilities without modifying the existing rocket classes.
Adapter Pattern:

Use the Adapter pattern to make existing rockets compatible with new requirements. For example, if a new launch location has different interface requirements, create adapters to make the rockets compatible with that launch location.
Composite Pattern:

Apply the Composite pattern for missions. Define a Mission interface, and have composite classes for mission types that consist of multiple sub-missions. This allows for complex missions composed of simpler ones.
Concurrency Patterns (e.g., Locks, Semaphores):

Address the potential need for concurrent rocket launches and missions using concurrency patterns. Ensure proper synchronization mechanisms to handle simultaneous launches and missions.

 -->

## Overview

- Task: Design a Mission Control System for a space agency managing rockets, launch locations, and missions.
- Rocket Types: Design at least three types with varying capabilities (cargo capacity, speed, fuel efficiency).
- Flexibility: Implement an easy way to add new rocket types in the future.

## Launch Locations

- Management: Design a system to manage different launch locations.
- Conditions: Each location has unique requirements (e.g., weather constraints, fuel availability).
- Concurrent Handling: Each launch location can handle multiple rockets simultaneously.

## Mission Types

- Definition: Create a system to define various mission types (e.g., satellite deployment, manned spaceflight, planetary exploration).
- Parameters: Each mission specifies required rocket type, launch location, and additional mission-specific parameters.
- Allocation: Implement a mechanism to allocate available rockets to missions based on requirements and location availability.

## Logging and Monitoring

- System Status: Design a logging and monitoring system to track rocket, launch location, and mission status.
- Events: Provide a way to log critical events (successful launches, failures, mission completions).

## Flexibility and Extensibility

- Design: Ensure system flexibility and extensibility for adding new rocket types, launch locations, and mission types.
- Minimal Modifications: Allow additions without major modifications to existing code.

## Concurrent Operations

- Address the potential need for concurrent rocket launches and missions.

## Design Patterns

- Identify and apply relevant design patterns to improve overall design and maintainability of the system.
