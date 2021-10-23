import { Translation } from '../i18n-types'

const ko: Translation = {
  nonInteractiveIncompatible: `해당 터미널은 인터렉티브 CLI 기능을 호환하지 않습니다.
프론트북 예시 다운로드에는 인터렉티브 CLI가 필요합니다.

아래 링크에서 수동으로 깃허브에서 템플릿을 다운로드 하실 수 있습니다.
링크: https://git.io/JiYK2`,

  pleaseSelectTemplate: `복제 받고자 하는 프론트북 데모를 선택해주세요.\n`,
  shouldWeCreateAFolder: `별도의 폴더를 생성하고 그 안에 템플릿을 생성할까요?
아니요를 선택하시면 명령어가 실행된 폴더에 바로 클론 됩니다.`,
  pleaseInputCloneFolderPath: `복제해올 폴더 명을 입력해주세요`,

  downloadedTemplate: `템플릿 복제가 완료되었습니다.
경로: {path}`,
  folderIsNotEmpty: `폴더가 비어있지 않아 해당 경로로 복제가 불가능합니다.
해당 경로에 바로 클론하길 원하는 경우 경로 내 모든 파일을 비워주세요.`
}

export default ko
