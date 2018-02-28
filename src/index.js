import React from 'react'
import ReactDOM from 'react-dom'
import MobxDevTools from 'mobx-react-devtools'
import { setUpdatesEnabled } from 'mobx-react-devtools'
import './index.css'
import { App } from './App'

setUpdatesEnabled(true)

ReactDOM.render(
  <div>
    <MobxDevTools/>
    <App />
  </div>
  , document.getElementById('root'))
