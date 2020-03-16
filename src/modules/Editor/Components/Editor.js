import React, { Fragment } from 'react'
import FileZone from '../Components/FileZone/FileZone'
import ControlPanel from '../Components/ControlPanel/ControlPanel'
import { generateSelectedFormat } from '../utils'
// Custom Hooks
import { useGetMockText } from '../hooks/useEffects'
import {
  useText,
  useSelectedFormat,
  useSynonyms,
  useIsModalOpen,
  useSelectedText
} from '../hooks/useStates'

export default function Editor() {
  const { selectedFormat, setSelectedFormat } = useSelectedFormat(generateSelectedFormat())
  const { text, setText } = useText('')
  const { synonyms, setSynonyms } = useSynonyms([])
  const { isModalOpen, setIsModalOpen } = useIsModalOpen(false)
  const { selectedText, setSelectedText } = useSelectedText('')

  // Call hook to get initial text
  useGetMockText(setText)

  return (
    <Fragment>
      <ControlPanel
        selectedFormat={selectedFormat}
        setSelectedFormat={setSelectedFormat}
        selectedText={selectedText}
        setSynonyms={setSynonyms}
        setIsModalOpen={setIsModalOpen}
      />
      <FileZone
        handleCloseDialog={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        text={text}
        selectedText={selectedText}
        synonyms={synonyms}
        setIsModalOpen={setIsModalOpen}
        setSelectedFormat={setSelectedFormat}
        setSelectedText={setSelectedText}
        setText={setText}
      />
    </Fragment>
  )
}
