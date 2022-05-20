import { chain, externalSchematic, Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";

export default function (options: any): Rule {
  return async (_tree: Tree, _context: SchematicContext) => {
    const rules = [
      externalSchematic('@schematics/angular', 'module', {...options})
    ]

    return chain(rules);
  }
} 