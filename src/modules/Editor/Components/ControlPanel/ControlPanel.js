import React from 'react'
import { object, func, string } from 'prop-types'
import './ControlPanel.css'
import { isEmpty } from 'lodash'
import { useHandleFormatOption, useHandleShowSynonyms } from '../../hooks/useHandlers'

const panelOptionsButtons = [
  {
    title: 'B',
    formatKey: 'bold'
  },
  {
    title: 'I',
    formatKey: 'italic'
  },
  {
    title: 'U',
    formatKey: 'underline'
  },
  {
    title: 'Left',
    formatKey: 'justifyLeft'
  },
  {
    title: 'Right',
    formatKey: 'justifyRight'
  },
  {
    title: 'Center',
    formatKey: 'justifyCenter'
  },
  {
    title: 'Justify',
    formatKey: 'justifyFull'
  }
]

ControlPanel.propTypes = {
  selectedFormat: object.isRequired,
  selectedText: string.isRequired,
  setSelectedFormat: func.isRequired,
  setSynonyms: func.isRequired,
  setIsModalOpen: func.isRequired
}

export default function ControlPanel({
  selectedFormat,
  selectedText,
  setSelectedFormat,
  setSynonyms,
  setIsModalOpen
}) {
  const handleFormatOption = useHandleFormatOption(selectedFormat, setSelectedFormat)
  const handleShowSynonyms = useHandleShowSynonyms(selectedText, setSynonyms, setIsModalOpen)

  return (
    <div id="control-panel">
      <div id="format-actions">
        {panelOptionsButtons.map(({ title, formatKey }, index) => (
          <button
            key={`${formatKey}_${index}`}
            className={`format-action ${selectedFormat[formatKey] ? 'active' : ''}`}
            type="button"
            onClick={handleFormatOption(formatKey)}
          >
            <b>{title}</b>
          </button>
        ))}
        <button
          className="format-action"
          type="button"
          onClick={handleShowSynonyms}
          disabled={isEmpty(selectedText)}
        >
          <b>Show Synonyms</b>
        </button>
      </div>
    </div>
  )
}
