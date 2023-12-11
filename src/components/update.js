import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Update() {
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setUser(localStorage.getItem('Username'));
        setEmail(localStorage.getItem('Email'));
        setPhone(localStorage.getItem('Phone'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6576dcb5197926adf62c9df8.mockapi.io/myData/${id}`, {
            username,
            email,
            phone
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='Username' value={username} onChange={(e) => setUser(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
