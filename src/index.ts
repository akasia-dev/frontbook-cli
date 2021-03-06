import cloneTemplate from './local/cloneTemplate'
import incompatibleCheck from './local/incompatibleCheck'
import selectTemplate from './local/selectTemplate'

void (async () => {
  await incompatibleCheck()

  const selectedTemplate = await selectTemplate()
  await cloneTemplate(selectedTemplate)
})()
