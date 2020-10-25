import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const TableRow = (props) => (
    <tr>
        <td>{props.entry.firstName}</td>
        <td>{props.entry.surname}</td>
        <td>{props.entry.birthDate}</td>
        <td>{props.entry.description}</td>
        <td>{props.entry.cell}</td>
        <td>{props.entry.telephone}</td>
        <td>{props.entry.email}</td>
        <td>{props.entry.address}</td>     
        <td inline>
            <Link to={{
                pathname: '/edit',
                state: {
                    contactId: props.entry.contactId,
                    contactDetailId: props.entry.contactDetailId
                }
            }}>
                Edit
             </Link>
        </td>
    </tr>
);


const Contacts = (props) => (
    <Table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Surname</th>
                <th>Birth Date</th>
                <th>Description</th>
                <th>Cellphone</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                props.entries.map((entry) => {
                    return (<TableRow key={entry.contactDetailId} entry={entry} />)
                })
            }
        </tbody>
    </Table>
);

export default Contacts;