import React from 'react';

import Button from 'shared-ui/atoms/Button';
import InputCheckbox from 'shared-ui/atoms/InputCheckbox';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import Row from 'shared-ui/atoms/Row';

export function ButtonExamplesContainer(): JSX.Element {
    const [checked, setChecked] = React.useState(false);
    return (
        <Container>
            <Row>
                <Col title="Regular" className="items-start">
                    <Button size="tiny">Action (tiny) </Button>
                    <Button size="small">Action (small)</Button>
                    <Button size="medium">Action (medium) </Button>
                    <Button size="large">Action (large)</Button>
                    <Button variant="default" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button modifier="plain">Action (plain)</Button>
                    <Button disabled>Action (disabled)</Button>
                    <Button loading>Action (loading)</Button>
                    <InputCheckbox checked={checked} onChange={value => setChecked(value)} label="Label" />
                    <InputCheckbox checked={checked} onChange={value => setChecked(value)} disabled label="Disabled" />
                </Col>
                <Col title="Primary" className="items-start">
                    <Button variant="primary" size="tiny">
                        Action (tiny)
                    </Button>
                    <Button variant="primary" size="small">
                        Action (small)
                    </Button>
                    <Button variant="primary" size="medium">
                        Action (medium)
                    </Button>
                    <Button variant="primary" size="large">
                        Action (large)
                    </Button>
                    <Button variant="primary" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button variant="primary" modifier="plain">
                        Action (plain)
                    </Button>
                    <Button variant="primary" disabled>
                        Action (disabled)
                    </Button>
                    <Button variant="primary" loading>
                        Action (loading)
                    </Button>
                    <InputCheckbox variant="primary" checked={checked} onChange={value => setChecked(value)} label="Label" />
                    <InputCheckbox
                        variant="primary"
                        checked={checked}
                        onChange={value => setChecked(value)}
                        disabled
                        label="Disabled"
                    />
                </Col>
                <Col title="Secondary" className="items-start">
                    <Button variant="secondary" size="tiny">
                        Action (tiny)
                    </Button>
                    <Button variant="secondary" size="small">
                        Action (small)
                    </Button>
                    <Button variant="secondary" size="medium">
                        Action (medium)
                    </Button>
                    <Button variant="secondary" size="large">
                        Action (large)
                    </Button>
                    <Button variant="secondary" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button variant="secondary" modifier="plain">
                        Action (plain)
                    </Button>
                    <Button variant="secondary" disabled>
                        Action (disabled)
                    </Button>
                    <Button variant="secondary" loading>
                        Action (loading)
                    </Button>
                    <InputCheckbox variant="secondary" checked={checked} onChange={value => setChecked(value)} label="Label" />
                    <InputCheckbox
                        variant="secondary"
                        checked={checked}
                        onChange={value => setChecked(value)}
                        disabled
                        label="Disabled"
                    />
                </Col>
                <Col title="Accent" className="items-start">
                    <Button variant="accent" size="tiny">
                        Action (tiny)
                    </Button>
                    <Button variant="accent" size="small">
                        Action (small)
                    </Button>
                    <Button variant="accent" size="medium">
                        Action (medium)
                    </Button>
                    <Button variant="accent" size="large">
                        Action (large)
                    </Button>
                    <Button variant="accent" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button variant="accent" modifier="plain">
                        Action (plain)
                    </Button>
                    <Button variant="accent" disabled>
                        Action (disabled)
                    </Button>
                    <Button variant="accent" loading>
                        Action (loading)
                    </Button>
                    <InputCheckbox variant="accent" checked={checked} onChange={value => setChecked(value)} label="Label" />
                    <InputCheckbox
                        variant="accent"
                        checked={checked}
                        onChange={value => setChecked(value)}
                        disabled
                        label="Disabled"
                    />
                </Col>
                <Col title="Ghost" className="items-start">
                    <Button variant="ghost" size="tiny">
                        Action (tiny)
                    </Button>
                    <Button variant="ghost" size="small">
                        Action (small)
                    </Button>
                    <Button variant="ghost" size="medium">
                        Action (medium)
                    </Button>
                    <Button variant="ghost" size="large">
                        Action (large)
                    </Button>
                    <Button variant="ghost" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button variant="ghost" modifier="plain">
                        Action (plain)
                    </Button>
                    <Button variant="ghost" disabled>
                        Action (disabled)
                    </Button>
                    <Button variant="ghost" loading>
                        Action (loading)
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
