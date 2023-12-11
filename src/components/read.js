import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://6576dcb5197926adf62c9df8.mockapi.io/myData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
    const setData = (data) => {

        let { id, username, email, phone } = data;    //object destructuring
        localStorage.setItem('ID', id);
        localStorage.setItem('Username', username);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);

    }
    const onDelete = (id) => {
        axios.delete(`https://6576dcb5197926adf62c9df8.mockapi.io/myData/${id}`)
            .then(() => {
                getData();
            })
    }
    const getData = () => {
        axios.get(`https://6576dcb5197926adf62c9df8.mockapi.io/myData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.username}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.phone}</Table.Cell>
                                <Link to="/update">
                                    <Table.Cell>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}