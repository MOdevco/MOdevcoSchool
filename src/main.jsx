import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider}  from '@chakra-ui/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { MantineProvider } from '@mantine/core'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <MantineProvider withGlobalStyles withNormalizeCSS>
      <React.StrictMode>
        <App />
      </React.StrictMode> 
      </MantineProvider>
    </ChakraProvider>
  </BrowserRouter>
)
