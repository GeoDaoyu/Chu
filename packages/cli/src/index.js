/* eslint-disable no-console */
import fs from 'node:fs';
import process from 'node:process';
import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import { program } from 'commander';
import create from './create.js';

program.name('chu-cli').description('cli for Chu').version('1.0.0');

const TEMPLATES = [
  {
    name: 'scene-pro',
    description: '三维一张图',
    value: 'scene-pro',
  },
  {
    name: 'map-pro',
    description: '二维一张图',
    value: 'map-pro',
  },
];

program
  .command('create')
  .description('create a new project')
  .action(async () => {
    try {
      const projectName = await input({
        message: 'Enter project name:',
        validate: (value) => {
          if (!value.trim()) {
            return 'Project name cannot be empty!';
          }
          if (fs.existsSync(value)) {
            return 'Directory already exists!';
          }
          return true;
        },
      });

      const template = await select({
        message: 'Select project template:',
        choices: TEMPLATES,
      });

      await create(projectName, template);

      console.info(chalk.green(`\n✔ Project ${projectName} created successfully!`));
      console.info(
        chalk.magenta(`\nNext steps:\n  cd ${projectName}\n  pnpm install\n  pnpm start`),
      );
    } catch (error) {
      console.error(chalk.red('Failed:'), error);
      process.exit(1);
    }
  });

program.parseAsync(process.argv);
