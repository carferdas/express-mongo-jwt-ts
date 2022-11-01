import chalk from 'chalk'

type ColorLog = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white'

export default function Log(module: string, message: string, color: ColorLog = 'cyan') {
  console.log(
    chalk[color](`[${module.toUpperCase()}] `) +
    message
  );
}