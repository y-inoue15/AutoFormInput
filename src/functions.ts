/**
 * フォームからデータを取得し、ストレージに記録します
 * @param storageKey ストレージキー
 * @param tag 取得するターゲットのタグ
 */
export function getFormValSet(storageKey: string, tag: string) {
  const active_form = document.querySelector(tag)
  const params: { [key: string]: string } = {}
  const targets =
    'input[type=text], textarea, input[type=hidden], input[type=url], input[type=checkbox]:checked, select'
  if (active_form) {
    active_form.querySelectorAll(targets).forEach(function (element) {
      const inputElement = element as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      params[inputElement.name] = inputElement.value
    })
  }

  delete params['utf8']
  delete params['getform']
  delete params['nextsc']
  delete params['next_hope']
  delete params['slcd']

  localStorage.setItem(storageKey, JSON.stringify(params))
}

/**
 * ストレージからデータを取得し、フォームに入力します
 * @param storageKey ストレージキー
 */
export function setFormVal(storageKey: string): void {
  const storageValue = localStorage.getItem(storageKey) || '{}'
  const params = JSON.parse(storageValue) as { [key: string]: string }

  for (const key in params) {
    const inputElem = document.querySelector(`[name='${key}']`) as HTMLInputElement
    if (inputElem && inputElem.type !== 'hidden') {
      inputElem.value = params[key]
    }
  }
}
