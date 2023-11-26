# 3D Window Visualization with Three.js

## Introduction
This JavaScript code utilizes the Three.js library to create a 3D visualization of windows. It renders cubes representing windows in a 3D space, with dynamic updates based on window positions and changes.

## Components

### 1. Initialization and Dependencies
- **Imported Dependencies:**
  - `WindowManager`: A class responsible for managing windows.
  - `THREE`: Aliased as `t` for the Three.js library.

### 2. Variables
- `camera`, `scene`, `renderer`, `world`: Objects for managing the 3D scene.
- `near`, `far`: Parameters for camera positioning.
- `pixR`: Pixel ratio for rendering.
- `cubes`: Array to store cube objects.
- `sceneOffsetTarget`, `sceneOffset`: Objects to manage scene offset.
- `today`: Represents the current date at midnight.
- `internalTime`: Holds the time in seconds since the beginning of the day.
- `windowManager`: Instance of the `WindowManager` class.
- `initialized`: Flag to track if the initialization is complete.

### 3. Functions

#### a. `getTime()`
- Description: Calculates the time in seconds since the beginning of the day.
- Returns: Time in seconds.

#### b. `init()`
- Description: Initializes the 3D scene, sets up the window manager, and adds event listeners.
- Usage: Called on window load or visibility change.

#### c. `setupScene()`
- Description: Sets up the orthographic camera, scene, and renderer.
- Usage: Called during initialization.

#### d. `setupWindowManager()`
- Description: Initializes the window manager, sets up callbacks, and adds custom metadata.
- Usage: Called during initialization.

#### e. `windowsUpdated()`
- Description: Callback function triggered on window updates.
- Usage: Updates the number of cubes based on window configuration.

#### f. `updateNumberOfCubes()`
- Description: Updates and displays cubes based on the current window setup.
- Usage: Called on window updates.

#### g. `updateWindowShape(easing)`
- Description: Updates the window shape and offset with optional easing.
- Parameters:
  - `easing`: Boolean indicating whether to use easing for the update.

#### h. `render()`
- Description: Updates and renders the 3D scene continuously.
- Usage: Called recursively using `requestAnimationFrame`.

#### i. `resize()`
- Description: Handles resizing of the renderer based on the window size.
- Usage: Called on window resize.

## Usage
1. Include the necessary dependencies, including Three.js and the `WindowManager` class.
2. Initialize the visualization by calling the `init` function.
3. Customize the window manager and metadata as needed.
4. Allow the visualization to continuously render and update based on window changes.

## Notes
- The code provides a dynamic 3D visualization of windows using cubes.
- It smoothly updates the scene based on window positions and changes.
- The window manager class facilitates the management of windows and their metadata.

