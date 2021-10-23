import isInteractive from 'is-interactive'
import chalk from 'chalk'
import getLocale from '../../locale'

const incompatibleCheck = async () => {
  const locale = await getLocale()
  if (!isInteractive()) {
    console.log(chalk.green(locale.nonInteractiveIncompatible()))
    process.exit()
  }
}

export default incompatibleCheck
