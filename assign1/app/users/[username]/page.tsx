import React from 'react'

interface UserPageProps {
    params: Promise<{
        username: string
    }>
}

export default async function UserPage({ params }: UserPageProps) {
    const { username } = await params;
    return (
        <div>
            <h1>Welcome to the user page {username}</h1>
        </div>
    );
};
