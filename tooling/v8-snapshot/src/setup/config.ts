import path from 'path'

type SnapshotConfig = {
  appEntryFile: string
  cypressAppSnapshotDir: string
  nodeModulesOnly: boolean
  pathsMapper: (file: string) => string
  projectBaseDir: string
  snapshotCacheDir: string
  snapshotEntryFile: string
  snapshotMetaFile: string
  snapshotMetaPrevFile: string
  metaFile: string
  usePreviousSnapshotMetadata: boolean
  minify: boolean
}

const platformString = process.platform

const snapshotCacheBaseDir = path.resolve(__dirname, '..', '..', 'cache')

const projectBaseDir = path.join(__dirname, '..', '..', '..', '..')
const appEntryFile = require.resolve('@packages/server/server-entry.js')

const cypressAppSnapshotDir = (cypressAppPath?: string) => {
  const electronPackageDir = path.join(projectBaseDir, 'packages', 'electron')

  let electronResourcesPath

  if (platformString === 'darwin') {
    cypressAppPath = cypressAppPath ? path.join(cypressAppPath, 'Cypress.app') : path.join(electronPackageDir, 'dist', 'Cypress', 'Cypress.app')
    electronResourcesPath = path.join('Contents', 'Frameworks', 'Electron Framework.framework', 'Versions', 'A', 'Resources')
  } else {
    cypressAppPath = cypressAppPath || path.join(electronPackageDir, 'dist', 'Cypress')
    electronResourcesPath = ''
  }

  return path.join(
    cypressAppPath,
    electronResourcesPath,
  )
}

const pathsMapper = (s: string) => s.replace(/^packages\//, './packages/')

const usePreviousSnapshotMetadata = process.env.V8_SNAPSHOT_FROM_SCRATCH == null

/**
 * @typedef {Object} SnapshotConfig          - Configuration for creating snapshots
 *
 * @property {string} appEntryFile           - the app entry file used to generate the snapshotEntryFile
 *
 * @property {string} cypressAppSnapshotDir  - the location from where the Cypress app loads the snapshot
 * @property {boolean} nodeModulesOnly       - if `true` then no application files are included in the snapshot
 * @property {Function} pathsMapper          - maps paths to work around edge cases
 * @property {string} projectBaseDir         - the base dir of the project being snapshotted
 *
 * @property {string} snapshotCacheDir       - directory where esbuild metadata, snapshot metadata
 *    and snapshot entry file are stored.
 *    This is different for prod vs. dev environments
 *
 * @property {string} snapshotEntryFile      - file used by esbuild to find all files to include in the snapshot.
 *    This file is generated via see lib/gen-entry
 *
 * @property {string} snapshotMetaFile       - file used to determine which modules can be included in the snapshot
 * @property {string} snapshotMetaPrevFile   - previously determined metafile used as a v8-snapshot starting point
 *   see usePreviousSnapshotMetadata
 *
 * @property {string} metaFile               -  file used to determine circular references and how to process modules
 *    when generating the snapshot.  This file is generated by esbuild via see lib/gen-meta
 *
 * @property {boolean} usePreviousSnapshotMetadata - If true then health/deferred/norewrite data collected during
 *   a previous run of the snapshot doctor is used as a starting point.
 *  This speeds up the snapshot doctor step immensely, but should be turned off when a lot of
 *  dependencies changed and/or when creating a prod artifact
 *
 * @property {boolean} minify                - If true then the snapshot is minified
 */

/**
 * Creates a snapshot config tailored to the provided environment
 *
 * @param {string} env - 'dev' | 'prod'
 * @returns {SnapshotConfig} config to be used for all snapshot related tasks
 */
export function createConfig (env: 'dev' | 'prod' = 'prod', cypressAppPath?: string): SnapshotConfig {
  /**
   * If true only node_module dependencies are included in the snapshot. Otherwise app files are included as well
   *
   * Configured via `env`
   */
  const nodeModulesOnly = env === 'dev'
  const minify = env === 'prod'

  const snapshotCacheDir =
    env === 'dev'
      ? path.join(snapshotCacheBaseDir, `dev-${platformString}`)
      : path.join(snapshotCacheBaseDir, `prod-${platformString}`)

  const snapshotEntryFile = path.join(snapshotCacheDir, 'snapshot-entry.js')
  const metaFile = path.join(snapshotCacheDir, 'esbuild-meta.json')
  const snapshotMetaFile = path.join(snapshotCacheDir, 'snapshot-meta.json')
  const snapshotMetaPrevFile = path.join(
    snapshotCacheDir,
    'snapshot-meta.cache.json',
  )

  return {
    appEntryFile,
    cypressAppSnapshotDir: cypressAppSnapshotDir(cypressAppPath),
    metaFile,
    nodeModulesOnly,
    pathsMapper,
    projectBaseDir,
    snapshotCacheDir,
    snapshotEntryFile,
    snapshotMetaFile,
    snapshotMetaPrevFile,
    usePreviousSnapshotMetadata,
    minify,
  }
}
