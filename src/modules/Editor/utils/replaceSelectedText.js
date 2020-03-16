export default function replaceSelectedText(replacementText) {
  // Windows Get Selection Object
  const selection = window.getSelection()
  // Verify range count (nodes of the fragment)
  if (selection.rangeCount) {
    // Get first range
    const range = selection.getRangeAt(0)
    // Delete it content
    range.deleteContents()
    // Insert new text in the same place
    range.insertNode(document.createTextNode(replacementText))
  }
}
