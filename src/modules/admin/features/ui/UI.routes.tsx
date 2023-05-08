import React, { Suspense } from 'react';
import { SubTabsNavigator } from 'shared-ui/organisms/SubTabsNavigator';
import { ButtonExamplesContainer } from './features/buttons-examples/ButtonExamplesContainer';
import { IconExamplesConatainer } from './features/icons-examples/IconExamplesContainer';
import { ModalExamplesConatainer } from './features/modals-examples/ModalExamplesConatainer';

export const UIRoutes = () => {
    const subTabs = [
        {
            name: 'Przyciski',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ButtonExamplesContainer />
                </Suspense>
            ),
            path: 'ui',
        },
        {
            name: 'Ikony',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <IconExamplesConatainer />
                </Suspense>
            ),
            path: 'ui',
        },
        {
            name: 'Modale',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <ModalExamplesConatainer />
                </Suspense>
            ),
            path: 'ui',
        },
    ];

    return <SubTabsNavigator subTabs={subTabs} path={'ui'} />;
};
