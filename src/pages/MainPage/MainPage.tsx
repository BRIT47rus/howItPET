import { data } from '../../app/db/data';
import { Container } from '../../widgets';
import cls from './MainPage.module.scss';
export const MainPage = () => {
    const { financeData } = data;
    return (
        <Container classess={cls.bgFinance}>
            <h2>{financeData.ipoteka.title}</h2>
            {financeData.ipoteka.steps.map((step, index) => (
                <div key={index}>
                    <h3>{step.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: step.text }} />
                </div>
            ))}
        </Container>
    );
};
