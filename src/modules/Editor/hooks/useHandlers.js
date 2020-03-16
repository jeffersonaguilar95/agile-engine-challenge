import { isEmpty } from 'lodash'
import { replaceSelectedText, generateSelectedFormat } from '../utils'
import { getSynonyms } from '../services'

export function useHandleFormatOption(selectedFormat, setSelectedFormat) {
  return formatOption => () => {
    if (!isEmpty(formatOption)) {
      document.execCommand(formatOption)
      setSelectedFormat({
        ...selectedFormat,
        [formatOption]: !selectedFormat[formatOption]
      })
    }
  }
}

export function useHandleReplaceSelectedText(setIsModalOpen) {
  return newText => () => {
    replaceSelectedText(newText)
    setIsModalOpen(false)
  }
}

export function useHandleSelectedText(setSelectedFormat, setSelectedText) {
  return () => {
    setSelectedFormat(generateSelectedFormat())
    const selectedText = window.getSelection().toString()
    setSelectedText(selectedText)
  }
}

export function useHandleTextChange(setText) {
  return ({ target: { value } }) => {
    setText(value)
  }
}

export function useHandleShowSynonyms(selectedText, setSynonyms, setIsModalOpen) {
  return async () => {
    if (!isEmpty(selectedText)) {
      setSynonyms(await getSynonyms(selectedText))
      setIsModalOpen(true)
    }
  }
}
