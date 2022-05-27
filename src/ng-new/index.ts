import { apply, applyTemplates, chain, externalSchematic, mergeWith, Rule, SchematicContext, Tree } from "@angular-devkit/schematics";
import { latestVersions } from "@schematics/angular/utility/latest-versions";
import * as path from 'path';
import { copyExternalProjectTree } from "../project";
import chalk from "chalk";

export default function (options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {

    const projectOptions = {
      inlineStyle: options.inlineStyle,
      inlineTemplate: options.inlineTemplate,
      prefix: options.prefix,
      viewEncapsulation: options.viewEncapsulation,
      routing: options.routing,
      style: options.style,
      skipTests: options.skipTests,
      skipPackageJson: false,
      skipInstall: true,
      strict: options.strict,
      minimal: options.minimal,
    };

    const rules = [
      externalSchematic('@schematics/angular', 'ng-new', {
        ...options,
        version: latestVersions.DevkitBuildAngular,
        createApplication: false,
      }),
      (tree: Tree) => {
        tree.getDir(options.name).visit(file => {
          const newPath = file.substring(options.name.length + 2)
          tree.rename(file, newPath)
        })
      },
      externalSchematic('vts-kit-ng-schematics', 'project', {
        ...projectOptions
      }),
      (tree: Tree) => {
        tree.visit(file => {
          const newPath = path.posix.join(options.name, file)
          tree.rename(file, newPath)
        })
      },
      // (tree: Tree) => {
      //   let srcDir: string | undefined = undefined
      //   const regex = new RegExp(path.posix.join('^', options.name, options.newProjectRoot, '.*?', 'src', ''))
      //   tree.visit(file => {
      //     if (srcDir)
      //       return
      //     if (regex.test(file))
      //       srcDir = regex.exec(file)![0]
      //   })
      //   if (!srcDir) {
      //     console.log(chalk.red("Something when wrong while resolving 'src' directory"))
      //     throw 0
      //   }
      //   // copyExternalProjectTree(srcDir)
      // }
    ]

    return chain(rules);
  }
}
