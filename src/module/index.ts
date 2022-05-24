import { strings } from "@angular-devkit/core";
import { chain, externalSchematic, Rule, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { compact, omit } from "lodash";
import { findModule } from "../utils/helpers";

export default function (options: any): Rule {
  return async (_tree: Tree, _context: SchematicContext) => {
    const opts = omit(options, ['customName'])

    const rules = compact([
      externalSchematic('@schematics/angular', 'module', {...opts}),
      (tree: Tree) => {
        if (options.customName) {
          const [_, modulePath] = findModule(tree, options.path, options.name)
          const text = tree.read(modulePath) || ''
          const sourceText = text.toString('utf-8');
          const oldName = `${strings.classify(options.name)}Module`
          const newName = options.customName
          tree.overwrite(modulePath, sourceText.replace(oldName, newName))
        }
      }
    ])

    return chain(rules);
  }
} 