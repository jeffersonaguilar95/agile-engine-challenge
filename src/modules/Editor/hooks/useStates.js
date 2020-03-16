import { useState } from 'react'

export function useText(initialValue) {
  const [text, setText] = useState(initialValue)

  return {
    text,
    setText
  }
}

export function useSelectedFormat(initialValue) {
  const [selectedFormat, setSelectedFormat] = useState(initialValue)

  return {
    selectedFormat,
    setSelectedFormat
  }
}

export function useSynonyms(initialValue) {
  const [synonyms, setSynonyms] = useState(initialValue)

  return {
    synonyms,
    setSynonyms
  }
}

export function useIsModalOpen(initialValue) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue)

  return {
    isModalOpen,
    setIsModalOpen
  }
}

export function useSelectedText(initialValue) {
  const [selectedText, setSelectedText] = useState(initialValue)

  return {
    selectedText,
    setSelectedText
  }
}
