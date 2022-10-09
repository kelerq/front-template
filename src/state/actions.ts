import { createAction } from '@reduxjs/toolkit';

export const resetReduxAction = createAction<{ preserveAuth: boolean }>('root/reset');
