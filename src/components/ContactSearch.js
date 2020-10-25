import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import { addressApiRoutes } from './addressBookApi';

export class ContactSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value.trim() });
    }

    handleSubmit = async (event) => {
        if (this.state.value === '') return;

        const response = await axios.get(addressApiRoutes("getWithQuery", this.state.value));
        this.props.onSubmit(response.data);

        this.setState({ value: '' });
    }

    render() {
        return (
            <Form inline>
                <FormGroup className="mb-3 mr-md-1 mb-md-0">
                    <Input type="text"
                        name="name"
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.value}
                        placeholder="Search by first name or surname or cell no."
                        style={{ width: 400 }} />
                </FormGroup>
                <Button onClick={this.handleSubmit}>Search</Button>
            </Form>
        );
    }
}