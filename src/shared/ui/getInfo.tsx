import { data } from '../../app/db/data';

import React from 'react';
import { Finance } from '../../app/db/howDates/types';

interface InfoProps {
    info: keyof typeof data; // 'info' must be one of the keys of the 'data' object
}

export const getInfo: React.FC<InfoProps> = ({ info }) => {
    const currentData = data[info] as Finance; // Explicitly type the accessed data

    return (
        <>
            <h2>{currentData?.ipoteka?.title}</h2>

            <>
                {currentData?.ipoteka?.steps?.map((step, index) => (
                    <div key={index}>
                        <h3>{step.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: step.text }} />
                    </div>
                ))}
            </>
        </>
    );
};
