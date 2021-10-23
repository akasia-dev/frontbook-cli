import type { BaseTranslation } from 'typesafe-i18n'

const en: BaseTranslation = {
  nonInteractiveIncompatible: `This terminal is not compatible with the interactive CLI function.
The frontbook example download requires an interactive CLI.

You can still manually download the template
from the GitHub from the link below.
Link: https://git.io/JiYK2`,

  pleaseSelectTemplate: `Please select the frontbook demo you want to clone it.\n`,
  shouldWeCreateAFolder: `Shall we create a separate folder and create a template in it?
If you select No, it will be immediately clone to 
the folder where the command was executed.`,
  pleaseInputCloneFolderPath: `Please enter the folder name for the clone.`,

  downloadedTemplate: `The template download has been completed.
Path: {path:string}`,
  folderIsNotEmpty: `The folder is not empty, so clone is not possible with that path.
If you want to clone the path right away,
Please empty all files in the path.`
}

export default en
