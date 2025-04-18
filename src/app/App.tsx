import { MainPage } from '../pages';
import { Footer } from '../widgets/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import { ThemeContextProvider } from './providers';
import './index.scss';
import { SideBar } from '../widgets/SideBar/SideBar';

export function App() {
    return (
        <div className="app">
            <ThemeContextProvider>
                <SideBar />
                <Header />
                <MainPage />
                <Footer />
            </ThemeContextProvider>
        </div>
    );
}
