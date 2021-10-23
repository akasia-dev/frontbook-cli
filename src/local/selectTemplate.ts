import { templateList } from '../data'
import getLocale from '../../locale'
import { choice } from '../core/inquirer'
import { ITemplateData } from './interface'

const selectTemplate = async () => {
  const locale = await getLocale()
  const selectedTemplate = await choice({
    message: locale.pleaseSelectTemplate(),
    items: Object.keys(templateList)
  })
  return {
    name: templateList[selectedTemplate],
    url: templateList[selectedTemplate]
  } as ITemplateData
}

export default selectTemplate
