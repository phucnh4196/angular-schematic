import { apply, applyTemplates, chain, externalSchematic, move, Rule, SchematicContext, url, MergeStrategy } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { getWorkspace } from "@schematics/angular/utility/workspace";
import _, { compact, mergeWith, omit } from "lodash";
import * as path from 'path';
import * as fs from 'fs-extra';
import chalk from 'chalk';
import { Observable } from "rxjs";

export function copyExternalProjectTree(srcDir: string) {
  if (fs.existsSync(srcDir)) {
    fs.copySync(path.join(__dirname, 'tree'), srcDir)
    console.log(chalk.cyan('Generated project tree'))
  }
}

export default function (options: any): Rule {
  return async (tree: Tree, _context: SchematicContext) => {
    const workspace = await getWorkspace(tree);
    if (!options.projectRoot)
      options.projectRoot = (workspace.extensions.newProjectRoot as string | undefined) || '';

    
    const projectDir = path.posix.join(options.projectRoot, options.name)
    const srcDir = path.posix.join(projectDir, 'src')

    const rules = compact([
      externalSchematic('@schematics/angular', 'app', {
        ...options,
        projectRoot: projectDir
      }),
      async (_tree: Tree, context: SchematicContext) => {
        const source = apply(url('./tree'), [
          applyTemplates({}),
          move(srcDir)
        ])(context) as any
        const fileToCreate = await source.toPromise()
        tree.merge(fileToCreate)
      },


      // mergeWith(apply(url('./tree'), [
      //   move(srcDir)
      // ])),

      // (_tree: Tree, _context: SchematicContext) => {
      //   // Generate tree
      //   // copyExternalProjectTree(srcDir)
      // }
    ])

    return chain(rules);
  }
} 