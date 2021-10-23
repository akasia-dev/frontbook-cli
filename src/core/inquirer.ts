import inquirer from 'inquirer'
import searchList from 'inquirer-search-list'

inquirer.registerPrompt('search-list', searchList)

export { inquirer }

export interface IChoiceProps {
  message: string
  items: string[]
}

export const choice = (props: IChoiceProps) => {
  return new Promise<string>(async (resolve) => {
    inquirer
      .prompt([
        {
          type: 'search-list',
          message: props.message,
          name: 'selected',
          choices: props.items.map((command, index) => ({
            name: command,
            value: command
          })),
          validate: (_answer) => true
        }
      ])
      .then((command) => {
        let index = 0
        props.items.some((item, i) => {
          if (item === command.selected) {
            index = i
            return true
          }
          return false
        })
        resolve(props.items[index])
      })
  })
}

export interface IInputProps {
  message: string
  validate?: (input: string) => boolean | Promise<boolean>
}

export const input = async (props: IInputProps) => {
  const { result } = await inquirer.prompt({
    type: 'input',
    name: 'result',
    message: props.message,
    validate: props.validate
  })
  return result as string
}

export interface IConfirmProps {
  message: string
  validate?: (input: string) => boolean | Promise<boolean>
}

export const confirm = async (props: IConfirmProps) => {
  const { result } = await inquirer.prompt({
    type: 'confirm',
    name: 'result',
    message: props.message
  })
  return result as boolean
}
