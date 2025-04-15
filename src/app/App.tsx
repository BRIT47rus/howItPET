import { MainPage } from 'pages';
import { ThemeContextProvider } from './providers';
import { Container, Footer, Header } from 'widgets';

function App() {
    return (
        <>
            <ThemeContextProvider>
                <Container>
                    <Header />
                    {/* <MainPage /> */}
                    <Footer />
                </Container>
            </ThemeContextProvider>
        </>
    );
}

export default App;
