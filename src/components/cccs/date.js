import React from 'react';
import styled from 'styled-components';
import locale from 'date-fns/locale/fr';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const DateContainer = styled.div`
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    font-size: 1.33rem;
`;
const Day = styled.span`
    margin: 0 0.2rem;
    padding: 0;
    font-weight: bold;
`;
const Month = styled.span`
    margin: 0 0.2rem;
    padding: 0;
    font-weight: bold;
`;
const Year = styled.span`
    margin: 0 0.2rem;
    padding: 0;
`;

const Schedule = styled.span`
    margin: 0 0.2rem;
    padding: 0;
    font-weight: bold;
`;

export default ({ date }) => {

    const [day, month, year, schedules] = format(
        parseISO(date),
        'dd-MMM-yyyy-HH:mm',
        {
            locale,
        },
    ).split('-');
    return (
        <DateContainer>
            <Day>{day}</Day>
            <Month>{month}</Month>
            <Year>{year}, </Year>
            <Schedule>{schedules}</Schedule>
        </DateContainer>
    );
};
