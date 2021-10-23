import { confirm, input } from '../core/inquirer'
import getLocale from '../../locale'
import type { ITemplateData } from './interface'
import shell from '../core/shell'
import { resolve } from 'path'
import { readdirSync } from 'fs'
import chalk from 'chalk'

const cloneTemplate = async (template: ITemplateData) => {
  const locale = await getLocale()

  console.log('')
  const isNeedCustomFolderPath = await confirm({
    message: locale.shouldWeCreateAFolder()
  })
  if (!isNeedCustomFolderPath) {
    // Folder not clean
    if (readdirSync(process.cwd()).length !== 0) {
      console.log('\n' + chalk.yellow(locale.folderIsNotEmpty()))
      return
    }
    await shell(`git`, ['clone', template.url, '.'])
    console.log(
      `\n` +
        locale.downloadedTemplate({
          path: process.cwd()
        })
    )
  } else {
    console.log('')
    const clonePath = await input({
      message: locale.pleaseInputCloneFolderPath()
    })
    await shell(`git`, ['clone', template.url, clonePath])
    console.log(
      `\n` +
        locale.downloadedTemplate({
          path: resolve(process.cwd(), clonePath)
        })
    )
  }
}

export default cloneTemplate
