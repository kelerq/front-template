import { Button } from 'app/components/Button';
import { Col } from 'app/components/Col';
import { Container } from 'app/components/Container';
import { Row } from 'app/components/Row';
import React from 'react';

export function UiContainer(): JSX.Element {
    return (
        <Container>
            <Row>
                <Col title="Regular" className="items-start">
                    <Button>Action</Button>
                    <Button size="small">Action (small)</Button>
                    <Button size="medium">Action (medium)</Button>
                    <Button size="large">Action (large)</Button>
                    <Button modifier="outline">Action (outline)</Button>
                    <Button modifier="plain">Action (plain)</Button>
                    <Button disabled>Action (disabled)</Button>
                    <Button loading>Action (loading)</Button>
                </Col>
                <Col title="Primary" className="items-start">
                    <Button variant="primary">Action</Button>
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
                </Col>
                <Col title="Monochrome" className="items-start">
                    <Button variant="monochrome">Action</Button>
                    <Button variant="monochrome" size="small">
                        Action (small)
                    </Button>
                    <Button variant="monochrome" size="medium">
                        Action (medium)
                    </Button>
                    <Button variant="monochrome" size="large">
                        Action (large)
                    </Button>
                    <Button variant="monochrome" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button variant="monochrome" modifier="plain">
                        Action (plain)
                    </Button>
                    <Button variant="monochrome" disabled>
                        Action (disabled)
                    </Button>
                    <Button variant="monochrome" loading>
                        Action (loading)
                    </Button>
                </Col>
                <Col title="Destructive" className="items-start">
                    <Button variant="destructive">Action</Button>
                    <Button variant="destructive" size="small">
                        Action (small)
                    </Button>
                    <Button variant="destructive" size="medium">
                        Action (medium)
                    </Button>
                    <Button variant="destructive" size="large">
                        Action (large)
                    </Button>
                    <Button variant="destructive" modifier="outline">
                        Action (outline)
                    </Button>
                    <Button variant="destructive" modifier="plain">
                        Action (plain)
                    </Button>
                    <Button variant="destructive" disabled>
                        Action (disabled)
                    </Button>
                    <Button variant="destructive" loading>
                        Action (loading)
                    </Button>
                </Col>
                <Col title="Other" className="items-start">
                    <Button>Action not full width</Button>
                    <Button fullWidth>Action full width</Button>
                </Col>
            </Row>
        </Container>
    );
}
