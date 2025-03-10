import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </>,
)
