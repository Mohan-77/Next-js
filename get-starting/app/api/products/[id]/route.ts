import { NextResponse, NextRequest } from 'next/server'

interface ProductDetailsProps {
    params: Promise<{
        id: string
    }>
}

export async function GET(request: NextRequest, { params }: ProductDetailsProps) {
    const { id } = await params;
    return NextResponse.json({
        message: `Product ${id} details`,
        data: {
            id: Number(id),
            name: `product ${id} name`,
            price: 100 * Number(id),
            description: `product ${id} description`,
        },
    })
}