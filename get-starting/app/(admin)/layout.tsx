import React from 'react'


    

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (        
        <html>
            <body>
                <header>
                    <h1>Admin Layout</h1>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
export default AdminLayout;