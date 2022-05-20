import Hero from './Hero/Hero';
import { Route, Routes, useLocation } from "react-router-dom"
import './index.css';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import { AnimatePresence } from 'framer-motion';

export const App = () => {
  
    const location = useLocation();

    return (
        
        <AnimatePresence exitBeforeEnter >
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Hero />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
          </Routes>
        </AnimatePresence>
    )
}