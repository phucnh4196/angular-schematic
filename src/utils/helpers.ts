import { Tree } from '@angular-devkit/schematics'
import { createDefaultPath } from '@schematics/angular/utility/workspace'
import * as nodePath from 'path'
import * as fs from 'fs'
import { buildRelativePath } from 'schematics-utilities'
import { normalize } from '@angular-devkit/core'

const CONSTANTS = require('../declare.json')

export function getLibDir(path: string) {
  return nodePath.posix.join(CONSTANTS.LIB_DIR, path)
}

export function getSharedDir(path: string) {
  return nodePath.posix.join(CONSTANTS.SHARED_DIR, path)
}

export function removeLastSlash(str: string) {
  return str.slice(0, -1)
}

export async function getScamModulePath(tree: Tree, options: any) {
  const defaultPath = await createDefaultPath(tree, options.project as string)
  const modulePath = removeLastSlash(nodePath.posix.join(
    defaultPath,
    `${options.shared ? getSharedDir(options.path) : getLibDir(options.path)}/`
  ))
  return modulePath
}

export function findModule(tree: Tree, modulePath: string, moduleName: string, moduleExt = CONSTANTS.MODULE_EXT): (boolean | string)[] {
  const fileName = `${moduleName}${moduleExt}`
  const fullPath = normalize(nodePath.posix.join(modulePath, moduleName, fileName))
  const exist = tree.exists(fullPath)
  return [exist, fullPath]
}