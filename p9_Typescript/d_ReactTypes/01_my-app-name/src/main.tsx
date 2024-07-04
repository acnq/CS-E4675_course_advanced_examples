import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

interface WelcomProps {
  name: string;
}

const Welcome = (props: WelcomProps): JSX.Element => {
  return <h1>Hello, {props.name}</h1>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Welcome name='Sarah' />
)
