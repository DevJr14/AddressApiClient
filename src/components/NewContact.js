import React, { useState } from 'react';
import axios from 'axios';
import { addressApiRoutes, isValidEmail, isCellValid, isTelValid } from './addressBookApi';
import { Alert } from 'reactstrap';
import ContactForm from './ContactForm';

const NewContact = (props) => {
    const initialEntryState = {
        firstName: '',
        surname: '',
        birthDate: new Date(),
        description: '',
        address: '',
        telephone: '',
        cell: '',
        email: ''
    };

    const [entryState, setEntryState] = useState(initialEntryState);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [hasError, setHasError] = useState(false);

    const clearEntryValues = () => {
        setEntryState(prevState => {
            return { ...prevState, ...initialEntryState };
        });
    }

    const onValuesChange = (data) => {
        console.log("data: "+data)
        const { name, value } = data;
        setEntryState({ ...entryState, [name]: value });
    }

    const addNewEntry = () => {
        const { firstName, surname, birthDate, ...contactDetail } = { ...entryState };

        if (!isCellValid(contactDetail))
            return;
        if (!isValidEmail(contactDetail))
            return;
        if (!isTelValid(contactDetail))
            return;

        axios.post(addressApiRoutes("post"), {
            FirstName: firstName,
            Surname: surname,
            BirthDate: birthDate,
            ContactDetails: [contactDetail]
        })
            .then(function (response) {
                setHasError(false);
                setIsSuccessful(true);
            })
            .catch(function (error) {
                setHasError(true);
                setIsSuccessful(false);
            });
    }

    return (
        <div>
            {
                (isSuccessful === true) &&
                <Alert color="success">
                    Created was successful!
                </Alert>
            }
            {
                (hasError === true) &&
                <Alert color="danger">
                    An error occured!
                </Alert>
            }
            <ContactForm 
                entry={entryState} 
                onSubmit={addNewEntry} 
                onClear={clearEntryValues} 
                onChange={onValuesChange} 
                isEmpty={true} />
        </div>
    );
};

export default NewContact;