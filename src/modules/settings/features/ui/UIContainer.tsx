import React, { Suspense } from 'react';
import { SubTabsNavigator } from 'shared-ui/organisms/SubTabsNavigator';
import { ButtonExamplesContainer } from 'modules/ui/features/buttons-examples/ButtonExamplesContainer';
import { IconExamplesConatainer } from 'modules/ui/features/icons-examples/IconExamplesContainer';
import { ModalExamplesConatainer } from 'modules/ui/features/modals-examples/ModalExamplesConatainer';

export const UIContainer = () => {
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

    return (
        <div className="max-w-xl">
            <SubTabsNavigator subTabs={subTabs} path={'ui'} />;
        </div>
    );
};
