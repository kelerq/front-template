import { Tab } from '@chakra-ui/react';
import React from 'react';

interface TabItemProps {
    name: string;
    index: number;
}

export const TabItem = (props: TabItemProps) => {
    return <Tab key={props.index}>{props.name}</Tab>;
};
