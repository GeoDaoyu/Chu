import fs from 'node:fs';
import process from 'node:process';
import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import { program } from 'commander';
import create from './create.js';

program.name('chu-cli').description('cli for Chu').version('1.0.0');

const TEMPLATES = [
  {
    name: 'cim-map',
    description: 'City Information Modeling, CIM, 城市信息模型',
    value: 'cim-map',
  },
  {
    name: 'uam-map',
    description: 'Urban Air Mobility, UAM, 城市空中交通',
    value: 'uam-map',
  },
  {
    name: 'smart-mapping-map',
    description: 'smart mapping, 智能制图',
    value: 'smart-mapping-map',
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

      console.log(
        chalk.green(`\n✔ Project ${projectName} created successfully!`),
      );
      console.log(
        chalk.magenta(
          `\nNext steps:\n  cd ${projectName}\n  pnpm install\n  pnpm start`,
        ),
      );
    }
    catch (error) {
      console.error(chalk.red('Failed:'), error);
      process.exit(1);
    }
  });

program.parseAsync(process.argv);
