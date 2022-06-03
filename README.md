VTS Kit Angular Schematics
-------
This library provides a collection of [schematics](https://angular.io/guide/schematics) to implement SCAM (Single Component Angular Module) pattern.

Check out [references](#references) for details about SCAM pattern.

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

## Usage

#### Schematics

#### Generate new workspace

#### Component

## References
