# Mission Control System for a space agency

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
Factory Method Pattern:

Use the Factory Method pattern to create rockets of different types. Create a RocketFactory that has methods for creating different types of rockets. This allows for easy addition of new rocket types without modifying existing code.
Abstract Factory Pattern:

Extend the Factory Method pattern by using the Abstract Factory pattern. Create an abstract factory interface RocketAbstractFactory with methods for creating rockets with varying capabilities (cargo capacity, maximum speed, fuel efficiency). Implement concrete factories for each rocket type.
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
