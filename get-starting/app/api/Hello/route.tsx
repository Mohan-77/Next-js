import { NextResponse } from 'next/server';

export async function GET() {
    const date = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'John Smith' },
        { id: 4, name: 'Jane Smith' },
        { id: 5, name: 'John Doe' },
        { id: 6, name: 'Jane Doe' },
        { id: 7, name: 'John Smith' },
        { id: 8, name: 'Jane Smith' },
        { id: 9, name: 'John Doe' },
        { id: 10, name: 'Jane Doe' },
        { id: 11, name: 'John Smith' },
        { id: 12, name: 'Jane Smith' },
        { id: 13, name: 'John Doe' },
        { id: 14, name: 'Jane Doe' },
        { id: 15, name: 'John Smith' },
        { id: 16, name: 'Jane Smith' },
    ]
    return NextResponse.json(date)
}