// import { Container } from '../widgets';
// import { ThemeContextProvider } from './providers';

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
                    ddd
                    <Header />
                    <MainPage />
                    <Footer />
                </Container>
            </ThemeContextProvider>
        </>
    );
}
