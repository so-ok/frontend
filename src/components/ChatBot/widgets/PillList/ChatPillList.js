
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { requestPillList } from '../../../../lib/api/articles';
import PillBlockCard2 from '../../../Pill/PillBlockCard2';

const CardContainer = tw.div`flex flex-wrap justify-center`;
const PillList = tw.div`flex flex-row p-2 overflow-scroll w-full gap-2`;

const ChatPillList = ({ selectedAttention }) => {

    const [pills, setPills] = useState([]);

    useEffect(() => {
        requestPillList({ attentions: [selectedAttention] })
            .then(res => setPills(res.data.content));
    }, []);

    return (
        <CardContainer>
            <PillList>
                {
                    pills.map(({ id, name, image, ingredient }) => <PillBlockCard2 name={name} image={image} id={id} key={id} ingredient={ingredient} />)
                }
            </PillList>
        </CardContainer>
    );
};

export default ChatPillList;
