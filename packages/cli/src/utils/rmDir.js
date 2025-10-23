/* eslint-disable no-console */
import fs from 'node:fs';
import path from 'node:path';

export const cleanAppsDir = (projectPath, template) => {
  const appsDir = path.join(projectPath, 'apps');
  if (!fs.existsSync(appsDir)) {
    return;
  }

  try {
    const items = fs.readdirSync(appsDir);

    items.forEach((item) => {
      const itemPath = path.join(appsDir, item);
      if (fs.statSync(itemPath).isDirectory() && item !== template) {
        fs.rmSync(itemPath, { recursive: true, force: true });
      }
    });
  } catch (error) {
    console.error(`clean error: ${error.message}`);
  }
};

export const cleanCliDir = (projectPath) => {
  const cliDir = path.join(projectPath, 'packages', 'cli');
  if (fs.existsSync(cliDir)) {
    fs.rmSync(cliDir, { recursive: true, force: true });
  }
};

export const cleanGitDir = (projectPath) => {
  const gitDir = path.join(projectPath, '.git');
  if (fs.existsSync(gitDir)) {
    fs.rmSync(gitDir, { recursive: true, force: true });
  }
};
