import { MainPage } from '../pages';
import { Container } from '../widgets';
import { Footer } from '../widgets/Footer/Footer';
import { Header } from '../widgets/Header/Header';
import { ThemeContextProvider } from './providers';

export function App() {
    return (
        <>
            <ThemeContextProvider>
                <Container>
                    <Header />
                    <MainPage />
                    <Footer />
                </Container>
            </ThemeContextProvider>
        </>
    );
}
