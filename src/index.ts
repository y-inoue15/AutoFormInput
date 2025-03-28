import { createButton, createText } from './components'
import { storageKey, storageKey2, targetTag } from './constants'
import { getFormValSet, setFormVal, saveAutoSelectedLabel, getSavedLabel } from './functions'

/**
 * メイン関数
 */
function main() {
  const body = document.querySelector('body')
  const divElement = document.createElement('div')
  const getButton = createButton('get-form', '保存', () => {
    getFormValSet(storageKey, targetTag)
    alert('保存が完了しました。')
  })
  const setButton = createButton('set-form', '読み込み', () => {
    setFormVal(storageKey)
  })
  divElement.appendChild(getButton)
  divElement.appendChild(setButton)
  saveAutoSelectedLabel(storageKey2)
  const beforeSelected = getSavedLabel(storageKey2)
  const textElement = createText('before-selected', beforeSelected ?? '')
  divElement.appendChild(textElement)
  divElement.setAttribute('id', 'contents')
  if (body) {
    body.appendChild(divElement)
  }
}

main()
