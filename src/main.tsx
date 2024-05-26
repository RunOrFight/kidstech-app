import {createRoot} from 'react-dom/client'
import {App} from './App.tsx'
import "./Style/Normalize.scss"
import "./Style/Main.scss"

createRoot(document.getElementById('root')!).render(
    <App/>
)