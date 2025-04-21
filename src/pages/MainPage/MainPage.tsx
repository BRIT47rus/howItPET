import { data } from '../../app/db/data';
import { Container } from '../../widgets';

export const MainPage = () => {
    const { financeData } = data;
    return (
        <Container>
            <div>Тексе из Главной страницы</div>
            <h2>{financeData.ipoteka.title}</h2>
            {financeData.ipoteka.steps.map((step) => (
                <div>
                    <h3>step.title</h3>
                    <div>step.text</div>
                </div>
            ))}
        </Container>
    );
};
