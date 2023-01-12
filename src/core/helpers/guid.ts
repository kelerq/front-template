import { v4 as uuidv4 } from 'uuid';

export const generateGuid = (): string => {
    return uuidv4();
};

export const getEmptyGuid = (): string => '00000000-0000-0000-0000-000000000000';
