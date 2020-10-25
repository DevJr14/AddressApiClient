import React, { Component } from 'react';
import { ContactSearch } from './ContactSearch'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Contacts from './Contacts';


export class LandingPage extends Component {
    state = {
        entries: ''
    }

    displayMatchingEntries = (entriesData) => {
        const processedData = this.flattenData(entriesData);
        this.setState({ entries: processedData });
        console.log(this.state.entries);
    }

    flattenData = (data) => {
        const flattenData = data.map((contact, index) => {
            return (contact.contactDetails.map((detail) => {
                return { ...detail, 'firstName': data[index].firstName, 'surname': data[index].surname, 'birthDate': data[index].birthDate}
            }))
        });

        return Array.prototype.concat.apply([], flattenData);
    }

    render() {
        return (
            <Container>
                <Row md={12}>
                    <Col lg>
                        <Link to='/add'>
                            <Button color="primary" size="md">New Contact</Button>
                        </Link>
                    </Col>
                    <Col lg>
                        <ContactSearch onSubmit={this.displayMatchingEntries} />
                    </Col>  
                </Row>
                <br />
                <Row>     
                    <Col>
                        {
                            (this.state.entries !== '') &&
                            <Contacts entries={this.state.entries} />
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}
