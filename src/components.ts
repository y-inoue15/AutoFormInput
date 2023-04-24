/**
 * ボタン要素を作成します
 * @param id ID セレクター
 * @param text ボタンに表示されるテキスト
 * @param onClick クリック時の処理
 */
export const createButton = (id: string, text: string, onClick: () => void): HTMLButtonElement => {
  const buttonElement: HTMLButtonElement = document.createElement('button')
  buttonElement.textContent = text
  buttonElement.onclick = () => {
    onClick()
  }
  buttonElement.setAttribute('id', id)
  return buttonElement
}

/**
 * チェックボックス要素を作成します
 * @param id ID セレクター
 * @param label チェックボックスに表示されるラベル
 */
export const createInputCheck = (id: string, label: string): HTMLLabelElement => {
  const inputElement: HTMLInputElement = document.createElement('input')
  const inputLabelElement: HTMLLabelElement = document.createElement('label')
  inputLabelElement.textContent = label
  inputElement.setAttribute('type', 'checkbox')
  inputElement.setAttribute('id', id)
  inputLabelElement.appendChild(inputElement)
  return inputLabelElement
}
