import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import chalk from 'chalk';

const REPO_URL = 'https://github.com/geodaoyu/Chu.git';
const DEFAULT_BRANCH = 'main';

const create = async (projectName, template) => {
  const targetDir = path.resolve(process.cwd(), projectName);

  console.log(`\n🚀 clone from GitHub ......`);
  const cloneResult = spawnSync('git', [
    'clone',
    '--depth',
    '1',
    '--branch',
    DEFAULT_BRANCH,
    '--single-branch',
    REPO_URL,
    projectName,
  ], { stdio: 'inherit' });

  if (cloneResult.status !== 0) {
    console.error(chalk.red('❌ clone failed'));
    process.exit(1);
  }

  // clear .git
  const gitDir = path.join(targetDir, '.git');
  fs.rmSync(gitDir, { recursive: true, force: true });

  console.log(`\n🔧 应用 ${chalk.cyan(template)} 模板配置...`);
  // 这里可以添加模板特定的配置逻辑
  // 例如：fs.copyFileSync(path.join(targetDir, `templates/${template}`), ...)

  return targetDir;
};
export default create;
