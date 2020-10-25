import React from 'react';
import { Col, Row, Button, FormGroup, Label } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { DatePicker } from 'antd'
import 'antd/dist/antd.css';

const ContactForm = (props) => {
    const entryState = props.entry;

    const handleChange = (event) => {
        props.onChange(event.target);
    }
    const handleDateChange = (date) => {
        props.onChange(date);
    }

    const returnEmptyValueMessage = (value) => (
        !(value.trim() === '') ? true : "The field cannot be empty"
    );

    const handleSave = (event) => {
        event.preventDefault();
        props.onSubmit();
    }

    const handleClear = (event) => {
        props.onClear();
    }

    return (
        <AvForm>
            <Row form>
                <Col md={6}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="firstName">First Name</Label>
                        <AvField
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={entryState.firstName}
                            onChange={handleChange}
                            validate={{ returnEmptyValueMessage }} required />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="surname">Surname</Label>
                        <AvField
                            type="text"
                            name="surname"
                            id="surname"
                            value={entryState.surname}
                            onChange={handleChange}
                            validate={{ returnEmptyValueMessage }} required />
                    </FormGroup>
                </Col>
            </Row>        
            <Row form>
                <Col md={4}>
                    <FormGroup>
                        <Label for="birthDate">Birth Date</Label>
                        <DatePicker
                            name="birthDate"
                            selected={entryState.birthDate}
                            onChange={handleDateChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={12}>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <AvField
                            type="text"
                            name="description"
                            id="description"
                            value={entryState.description}
                            onChange={handleChange}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row form>                
                <Col md={6}>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <AvField
                            type="text"
                            name="address"
                            id="address"
                            value={entryState.address}
                            onChange={handleChange}/>
                    </FormGroup>
                </Col>                
            </Row>
            <Row form>
            <Col md={3}>
                    <FormGroup>
                        <Label for="cell">Cellphone no.</Label>
                        <AvField
                            type="text"
                            name="cell"
                            id="cell"
                            value={entryState.cell}
                            onChange={handleChange}
                            pattern="^[0-9]{10,10}$" validate={{ returnEmptyValueMessage }} />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="telephone">Telephone no.</Label>
                        <AvField
                            type="text"
                            name="telephone"
                            id="telephone"
                            value={entryState.telephone}
                            onChange={handleChange}
                            pattern="^[0-9]{10,10}$" validate={{ returnEmptyValueMessage }} />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="email">Email Address</Label>
                        <AvField
                            type="text"
                            name="email"
                            id="email"
                            value={entryState.email}
                            onChange={handleChange}
                            pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/" validate={{ returnEmptyValueMessage }} />
                    </FormGroup>
                </Col>
            </Row>
            <Button onClick={handleSave}>Save</Button>{' '}
            <Button onClick={handleClear}>Clear</Button>
        </AvForm>
    );
};

export default ContactForm;