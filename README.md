VTS Kit Angular Schematics
-------
This library provides a collection of [schematics](https://angular.io/guide/schematics) to implement SCAM (Single Component Angular Module) pattern.

Check out [references](#references) for more details about SCAM pattern.

## Testing

This library was last tested with Angular 13.

## Important note
We don't recommend using this library in currently developing project, it may cause problems with project structure. Instead, this library is intended to create a compatible workspace and is ready to integrate with our schematics.

## Structure
```
.
└── <workspace_name>/
    ├── projects/
    │   └── <project_name_1>/
    │       ├── src/
    │       │   ├── app/                      // Entry module, provide lazy load to feature group module
    │       │   ├── libs/                     // Shared modules and feature group modules
    │       │   │   ├── layout/               // Feature group, layout
    │       │   │   │   ├── ui/               // Shared, stateless UI components, SCAM for components
    │       │   │   │   │   ├── <topbar_scam>
    │       │   │   │   │   └── <sider_scam>
    │       │   │   │   ├── feature/          // Layout components, SCAM for components
    │       │   │   │   │   ├── <dasboard_layout_scam>
    │       │   │   │   │   └── <home_layout_scam>
    │       │   │   │   ├── data-access/      // State management, store
    │       │   │   │   └── layout.module.ts  // Export declared layouts
    │       │   │   ├── <feature_group_1>/    // Feature group
    │       │   │   │   ├── ui/               // Shared, stateless UI components, SCAM for components
    │       │   │   │   ├── feature/          // Layout components, SCAM for components
    │       │   │   │   ├── data-access/      // State management, store
    │       │   │   │   └── feature.module.ts // Provide lazy load to feature modules
    │       │   │   └── shared/               // All shared modules, SCAM for components
    │       │   │       ├── directives/
    │       │   │       ├── pipes/
    │       │   │       ├── guards/
    │       │   │       ├── interceptors/
    │       │   │       ├── mixins/
    │       │   │       ├── services/
    │       │   │       ├── ui/
    │       │   │       ├── utils/
    │       │   │       └── validators/
    │       │   ├── environments/             // Angular starter files
    │       │   ├── styles/                   // Angular starter files
    │       │   ├── assets/                   // Angular starter files
    │       │   ├── favicon.ico               // Angular starter files
    │       │   ├── index.html                // Angular starter files
    │       │   ├── main.ts                   // Angular starter files
    │       │   ├── polyfills.ts              // Angular starter files
    │       │   ├── styles.scss               // Angular starter files
    │       │   └── test.ts                   // Angular starter files
    │       ├── karma.conf.js                 // Angular starter files
    │       ├── tsconfig.app.json             // Angular starter files
    │       └── tsconfig.spec.json            // Angular starter files
    ├── package.json
    ├── angular.json
    ├── tsconfig.json
    └── README.md
```

## Installation

* Make sure Angular CLI is installed.

```
# Check Angular CLI version
ng version

# If Angular CLI has not been installed.
# Install Angular CLI using npm
npm install -g @angular/cli
```

* Install VTS Kit Angular Schematics

```
npm install -g @vts-kit/ng-schematics
```

## Usage

### Schematics

| No | Name          | Description                                                                                  |
|----|---------------|----------------------------------------------------------------------------------------------|
| 1  | ng-new        | Creates a new project by combining the workspace and application schematics.                 |
| 2  | project       | Generates a new basic application definition in the \"projects\" subfolder of the workspace. |
| 3  | feature-group | Creates a new feature group in the given or default project.                                 |
| 4  | module        | Creates a new, generic NgModule definition in the given or default project.                  |
| 5  | component     | Creates a new, generic component definition in the given or default project.                 |
| 6  | directive     | Creates a new, generic directive definition in the given or default project.                 |
| 7  | pipe          | Creates a new, generic pipe definition in the given or default project.                      |
| 8  | service       | Creates a new, generic service definition in the given or default project.                   |
| 9  | class         | Creates a new, generic class definition in the given or default project.                     |
| 10 | interface     | Creates a new, generic interface definition in the given or default project.                 |
| 11 | enum          | Creates a new, generic enum definition in the given or default project.                      |
| 12 | validator     | Creates a new sync or async validator in the given or default project.                       |
| 13 | guard         | Creates a new, generic route guard definition in the given or default project.               |
| 14 | interceptor   | Creates a new, generic route interceptor definition in the given or default project.         |
| 15 | resolver      | Creates a new, generic resolver definition in the given or default project.                  |

## Quick guide

* `ng-new` is schematic to generate a workspace and is used with `ng new` command.

```
ng new -c @vts-kit/ng-schematics

# List options
ng new -c @vts-kit/ng-schematics --help
```

* Except for `ng-new`, other schematics can be used by using `ng g` command.
* Note: `ng g` must be ran inside workspace root (same base path as angular.json).

```
ng g @vts-kit/ng-schematics:<name in table> [--options=value]

# List options
ng g @vts-kit/ng-schematics:<name in table> --help
```

* Using `ng g` with an empty parameter will trigger a prompt to ask for required inputs.

```
ng g @vts-kit/ng-schematics:<name in table>
```

## Schematic: ng-new

#### Command

```
ng new -c @vts-kit/ng-schematics
```

#### Options

| No | Name              | Description                                                                                                                                                                                                                   | Type                                | Require | Default |
|----|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|---------|---------|
| 1  | name              | The name of the new workspace.                                                                                                                                                                                                | string                              | ✔       |         |
| 2  | directory         | The directory name to create the workspace in.                                                                                                                                                                                | string                              |         |         |
| 3  | skipInstall       | Do not install dependency packages.                                                                                                                                                                                           | boolean                             |         | false   |
| 4  | skipGit           | Do not initialize a git repository.                                                                                                                                                                                           | boolean                             |         |         |
| 5  | commit            | Initial git repository commit information.                                                                                                                                                                                    | boolean or { name, email, message } |         | true    |
| 6  | newProjectRoot    | The path where new projects will be created, relative to the new workspace root.                                                                                                                                              | boolean                             |         |         |
| 7  | inlineStyle       | Include styles inline in the component TS file. By default, an external styles file is created and referenced in the component TypeScript file.                                                                               | boolean                             |         |         |
| 8  | inlineTemplate    | Include template inline in the component TS file. By default, an external template file is created and referenced in the component TypeScript file.                                                                           | boolean                             |         |         |
| 9  | viewEncapsulation | The view encapsulation strategy to use in the initial project.                                                                                                                                                                | ["Emulated", "None", "ShadowDom"]   |         |         |
| 10 | routing           | Generate a routing module for the initial project.                                                                                                                                                                            | boolean                             |         |         |
| 11 | prefix            | The prefix to apply to generated selectors for the initial project.                                                                                                                                                           | string                              |         | app     |
| 12 | style             | The file extension or preprocessor to use for style files.                                                                                                                                                                    | ["css", "scss", "sass", "less"]     |         |         |
| 13 | skipTests         | Do not generate \"spec.ts\" test files for the new project.                                                                                                                                                                   | boolean                             |         |         |
| 14 | minimal           | Create a workspace without any testing frameworks.                                                                                                                                                                            | boolean                             |         |         |
| 15 | strict            | Creates a workspace with stricter type checking and stricter bundle budgets settings. This setting helps improve maintainability and catch bugs ahead of time. For more information, see https://angular.io/guide/strict-mode | boolean                             |         |         |
| 16 | packageManager    | The package manager used to install dependencies.                                                                                                                                                                             | ["npm", "yarn", "pnpm", "cnpm"]     |         |         |


## Schematic: project

#### Command

```
ng g @vts-kit/ng-schematics:project
```

#### Options

| No | Name              | Description                                                                                                                                                                                                                   | Type                              | Require | Default |
|----|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|---------|---------|
| 1  | name              | The name of the new project.                                                                                                                                                                                                  | string                            | ✔       |         |
| 2  | inlineStyle       | Include styles inline in the component TS file. By default, an external styles file is created and referenced in the component TypeScript file.                                                                               | boolean                           |         |         |
| 3  | inlineTemplate    | Include template inline in the component TS file. By default, an external template file is created and referenced in the component TypeScript file.                                                                           | boolean                           |         |         |
| 4  | viewEncapsulation | The view encapsulation strategy to use in the initial project.                                                                                                                                                                | ["Emulated", "None", "ShadowDom"] |         |         |
| 5  | routing           | Generate a routing module for the initial project.                                                                                                                                                                            | boolean                           |         |         |
| 6  | prefix            | The prefix to apply to generated selectors for the initial project.                                                                                                                                                           | string                            |         | app     |
| 7  | style             | The file extension or preprocessor to use for style files.                                                                                                                                                                    | ["css", "scss", "sass", "less"]   |         |         |
| 8  | skipTests         | Do not generate \"spec.ts\" test files for the new project.                                                                                                                                                                   | boolean                           |         |         |
| 9  | skipPackageJson   | Do not add dependencies to the \"package.json\" file.                                                                                                                                                                         | boolean                           |         |         |
| 10 | minimal           | Create a workspace without any testing frameworks.                                                                                                                                                                            | boolean                           |         |         |
| 11 | skipInstall       | Do not install dependency packages.                                                                                                                                                                                           | boolean                           |         | false   |
| 12 | strict            | Creates a workspace with stricter type checking and stricter bundle budgets settings. This setting helps improve maintainability and catch bugs ahead of time. For more information, see https://angular.io/guide/strict-mode | boolean                           |         |         |


## References
