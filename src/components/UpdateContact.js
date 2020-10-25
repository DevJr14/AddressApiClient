import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addressApiRoutes, isValidEmail, isCellValid, isTelValid  } from './addressBookApi';
import { Alert } from 'reactstrap';
import ContactForm from './ContactForm';

let initialEntryState = {};

const UpdateContact = (props) => {
    const [entryState, setEntryState] = useState(initialEntryState);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const { contactId, contactDetailId } = props.location.state;
        console.log("contactId: " +contactId+" contactDetailId: "+contactDetailId)
        const getURL = addressApiRoutes("getContactDetail", { contactId: contactId, contactDetailId: contactDetailId });
        axios.get(getURL)
            .then(function (response) {
                const { contactDetails, ...otherInfo } = response.data;

                initialEntryState = {
                    ...contactDetails[0],
                    ...otherInfo
                }

                setEntryState(entryState);
                console.log(initialEntryState)
            })
            .catch(function (error) {
                setHasError(true);
                setIsSuccessful(false);
            });
    }, []);

    const reinstateInitialValues = () => {
        setEntryState(prevState => {
            return { ...prevState, ...initialEntryState };
        });
    }

    const onValuesChange = (data) => {
        const { name, value } = data;
        setEntryState({ ...entryState, [name]: value });
    }
    

    const editEntry = () => {
        const { firstName, surname, birthDate, ...contactDetail } = { ...entryState };
        
        if (!isCellValid(contactDetail))
            return;
        if (!isValidEmail(contactDetail))
            return;
        if (!isTelValid(contactDetail))
            return;

        axios.put(addressApiRoutes("put", entryState.contactId), {
            contactId: contactDetail.contactId,
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

    };

    return (
        <div>
            {
                (isSuccessful === true) &&
                <Alert color="success">
                    Updated successful!!
                </Alert>
            }
            {
                (hasError === true) &&
                <Alert color="danger">
                    An error occurred!
                </Alert>
            }
            <ContactForm 
                entry={entryState} 
                onClear={reinstateInitialValues} 
                onChange={onValuesChange} 
                onSubmit={editEntry} />
        </div>
    );
};

export default UpdateContact;