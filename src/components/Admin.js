import React from 'react'

import {
    Admin,
    Resource,
} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import {
    UserList,
    UserEdit,
    UserCreate,
} from './Users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function AdminPage() {
    return (
        <>

            <Admin basename="/admin" dataProvider={dataProvider}>
                <Resource
                    name="users"
                    list={UserList}
                    edit={UserEdit}
                    create={UserCreate}
                />
            </Admin>
        </>
    );
}
export default AdminPage;