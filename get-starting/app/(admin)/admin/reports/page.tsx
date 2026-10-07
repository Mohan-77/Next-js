import Link from 'next/link';
import React from 'react'
const ReportsPage = () => {
    return (
        <div>
            <h1>Reports</h1>
            <Link href="/reports/1">Report 1</Link>
            <Link href="/reports/2">Report 2</Link>
            <Link href="/reports/3">Report 3</Link>
        </div>
    )
}
export default ReportsPage;
