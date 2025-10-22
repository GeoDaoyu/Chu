/* eslint-disable no-console */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import chalk from 'chalk';
import { cleanAppsDir, cleanCliDir } from './utils/rmDir.js';

const REPO_URL = 'https://github.com/geodaoyu/Chu.git';
const DEFAULT_BRANCH = 'main';

const create = async (projectName, template) => {
  const targetDir = path.resolve(process.cwd(), projectName);

  console.info(`\n🚀 clone from GitHub ......`);
  const cloneResult = spawnSync(
    'git',
    ['clone', '--depth', '1', '--branch', DEFAULT_BRANCH, '--single-branch', REPO_URL, projectName],
    { stdio: 'inherit' },
  );

  if (cloneResult.status !== 0) {
    console.error(chalk.red('❌ clone failed'));
    process.exit(1);
  }

  // clear .git
  const gitDir = path.join(targetDir, '.git');
  fs.rmSync(gitDir, { recursive: true, force: true });

  cleanAppsDir(targetDir, template);
  cleanCliDir(targetDir);

  return targetDir;
};
export default create;
