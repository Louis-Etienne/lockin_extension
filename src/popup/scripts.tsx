import { createRoot } from "react-dom/client";
import PopupApp from "./PopupApp";
import './styles.css'

const rootElement = document.getElementById('root') as HTMLElement

if (!rootElement){
    throw new Error('Root element for the PopupApp not found')
}

const reactRoot = createRoot(rootElement)
reactRoot.render(<PopupApp/>)