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
    active_form.querySelectorAll('input[type=radio]').forEach((element) => {
      const radioElement = element as HTMLInputElement
      if (radioElement.checked) {
        params[radioElement.name] = radioElement.value
      }
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
  console.log('読み込みが完了しました。')
  const storageValue = localStorage.getItem(storageKey) || '{}'
  const params = JSON.parse(storageValue) as { [key: string]: string }

  for (const key in params) {
    const radioElems = document.querySelectorAll(
      `input[type="radio"][name='${key}']`,
    ) as NodeListOf<HTMLInputElement>
    if (radioElems.length > 0) {
      radioElems.forEach((radio) => {
        radio.checked = radio.value === params[key]
      })
      continue
    }
    const inputElem = document.querySelector(`[name='${key}']`) as HTMLInputElement
    if (inputElem && inputElem.type !== 'hidden') {
      inputElem.value = params[key]
    }
  }
}

/**
 * 第1希望の選択肢のラベルを localStorage に保存します
 */
export function saveAutoSelectedLabel(storageKey: string): void {
  const radioButtons = document.querySelectorAll<HTMLInputElement>(
    'input[type="radio"][name="hope_event_perf_cd"]',
  )

  radioButtons.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const selectedRadio = event.target as HTMLInputElement
      const parentParagraph = selectedRadio.closest('p')

      if (parentParagraph) {
        const label = parentParagraph.textContent?.trim() || ''
        console.log(label)
        localStorage.setItem(storageKey, label)
        const spanElement = document.querySelector<HTMLSpanElement>('#before-selected')
        if (spanElement) {
          spanElement.textContent = label
        }
      }
    })
  })
}

/**
 * 第1希望の選択肢のラベルを localStorage から取得します
 */
export function getSavedLabel(storageKey: string): string | null {
  const savedLabel = localStorage.getItem(storageKey)
  return savedLabel
}
