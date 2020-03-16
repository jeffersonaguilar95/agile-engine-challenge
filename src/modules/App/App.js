import React from 'react'
import './App.css'
import { Editor } from '../index'

const App = () => {
  return (
    <div className="App">
      <header>
        <span>Simple Text Editor</span>
      </header>
      <main>
        <Editor />
      </main>
    </div>
  )
}

export default App
