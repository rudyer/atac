import { useEffect, useState } from "react";
import { fetchUsersRoute } from "../../../api/api";
import { Table } from "react-bootstrap";
import { User } from "../../../models/models";

export function RouteUserList() {
    const [users, setUsers] = useState<User[]>([]);

    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchUsersRoute();
                setUsers(data);
            } catch (error: any) {
                setError(error.message);
            }
        }
        fetchData();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (

        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>X</th>
                    <th>Y</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.x}</td>
                        <td>{user.y}</td>


                    </tr>
                ))}

            </tbody>
        </Table>

    );
}