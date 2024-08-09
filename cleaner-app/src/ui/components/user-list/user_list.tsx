import { useEffect, useState } from "react";
import { fetchUsers } from "../../../api/api";
import { Table } from "react-bootstrap";
import { User } from "../../../models/models";

export function UserList() {
    const [searchItem, setSearchItem] = useState('')
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const [error, setError] = useState<string | null>(null);
    const handleInputChange = (e: any) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = users.filter((user: User) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredUsers(filteredItems);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchUsers();
                setUsers(data);
                setFilteredUsers(data)
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
        <div>

            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Pesquisar"
                        value={searchItem}
                        onChange={handleInputChange}
                    />

                </label>
            </div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    );
}