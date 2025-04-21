import { MainPage } from '../pages';
import { Footer } from '../widgets/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import { ThemeContextProvider } from './providers';
import './index.scss';
import { SideBar } from '../widgets/SideBar/SideBar';
import { Provider } from 'react-redux';
import { store } from './providers/store/store';

export function App() {
    return (
        <div className="app">
            <Provider store={store}>
                <ThemeContextProvider>
                    <SideBar />
                    <Header />
                    <MainPage />
                    <Footer />
                </ThemeContextProvider>
            </Provider>
        </div>
    );
}
