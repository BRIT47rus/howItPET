import { Header } from 'widgets/Header/Header';
import './App.css';
import { ThemeContextProvider } from './providers';
import { Footer } from 'widgets/Footer/Footer';

function App() {
    return (
        <>
            <ThemeContextProvider>
                <Header />

                <Footer />
            </ThemeContextProvider>
        </>
    );
}

export default App;
