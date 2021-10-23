import { spawn } from 'child_process'

const shell = (command: string, args: readonly string[] = []) => {
  return new Promise<string>((resolve) => {
    const child = spawn(command, args, {
      stdio: [process.stdin, process.stdout, 'pipe'],
      cwd: process.cwd()
    })
    child.on('close', resolve)
    child.on('exit', resolve)
  })
}

export default shell
