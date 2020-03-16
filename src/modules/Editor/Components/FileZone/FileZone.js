import React from 'react'
import { func, array, bool, string } from 'prop-types'
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button
} from '@material-ui/core'
import './FileZone.css'
import {
  useHandleReplaceSelectedText,
  useHandleSelectedText,
  useHandleTextChange
} from '../../hooks/useHandlers'

FileZone.propTypes = {
  handleCloseDialog: func.isRequired,
  isModalOpen: bool.isRequired,
  text: string.isRequired,
  selectedText: string.isRequired,
  synonyms: array.isRequired
}

export default function FileZone({
  handleCloseDialog,
  text,
  isModalOpen,
  selectedText,
  synonyms,
  setIsModalOpen,
  setSelectedFormat,
  setSelectedText,
  setText
}) {
  const handleReplaceSelectedText = useHandleReplaceSelectedText(setIsModalOpen)

  const handleSelectedText = useHandleSelectedText(setSelectedFormat, setSelectedText)

  const handleTextChange = useHandleTextChange(setText)

  return (
    <div id="file-zone">
      <div
        id="file"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onChange={handleTextChange}
        onMouseUp={handleSelectedText}
      >
        {text}
      </div>
      <Dialog
        open={isModalOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Synonyms found for: <b>{selectedText}</b>
        </DialogTitle>
        <List dense={true}>
          {synonyms.length ? (
            synonyms.map(({ word, score }, index) => (
              <ListItem key={`${word}_${index}`}>
                <ListItemText primary={`Synonym: ${word}`} secondary={`Score: ${score}`} />
                <ListItemSecondaryAction>
                  <Button size="small" onClick={handleReplaceSelectedText(word)}>
                    Replace
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          ) : (
            <DialogContentText className="synonyms_not_found"> 0 synonyms found</DialogContentText>
          )}
        </List>
      </Dialog>
    </div>
  )
}
