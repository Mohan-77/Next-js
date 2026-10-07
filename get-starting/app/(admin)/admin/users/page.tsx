import Link from 'next/link';
import React from 'react'

            
const UsersPage = () => {
    return (
        <div>
            <h1>Users</h1>
            <Link href="/users/1">User 1</Link>
            <Link href="/users/2">User 2</Link>
            <Link href="/users/3">User 3</Link>
        </div>
    )
}
export default UsersPage;