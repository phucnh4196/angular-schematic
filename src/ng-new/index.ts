import { strings } from "@angular-devkit/core";
import { apply, applyTemplates, chain, externalSchematic, filter, mergeWith, Rule, SchematicContext, url, MergeStrategy, schematic } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { latestVersions } from "@schematics/angular/utility/latest-versions";

export default function (options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        name: 'something'
      })
    ])

    const rules = [
      externalSchematic('@schematics/angular', 'ng-new', {
        ...options,
        version: latestVersions.DevkitBuildAngular
      }),
    ]

    return chain(rules);
  }
}
