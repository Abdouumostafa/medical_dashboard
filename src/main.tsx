import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '../src/css/style.css'
import '../src/css/select2.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from 'react-query'
import { QueryClient } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)
