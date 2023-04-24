import { createButton, createInputCheck } from './components'
import { storageKey, targetTag } from './constants'
import { getFormValSet, setFormVal } from './functions'

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
    alert('読み込みが完了しました。')
  })
  const check = createInputCheck('switch', 'json?')
  divElement.appendChild(getButton)
  divElement.appendChild(setButton)
  divElement.appendChild(check)
  divElement.setAttribute('id', 'contents')
  if (body) {
    body.appendChild(divElement)
  }
}

main()
