import { chain, externalSchematic, Rule, schematic, SchematicContext } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { compact, omit } from "lodash";
import { findModule, getScamModulePath } from "../utils/helpers";
import * as path from 'path';



export default function (options: any): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    if (options.shared === undefined) {
      options.shared = false
    }

    const modulePath = await getScamModulePath(tree, options)
    const moduleName = options.name
    const directivePath = path.posix.join(
      modulePath,
      options.name
    )
    const opts = omit(options, ['shared'])

    const [moduleExist, _] = findModule(tree, modulePath, moduleName)

    const rules = compact([
      moduleExist 
      ? null 
      : schematic('module', {
        path: modulePath,
        name: moduleName
      }),
      externalSchematic('@schematics/angular', 'directive', {
        ...opts,
        path: directivePath,
        export: true
      }),
    ])

    return chain(rules);
  }
} 