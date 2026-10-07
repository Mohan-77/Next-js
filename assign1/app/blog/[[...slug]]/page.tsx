interface BlogPageProps {

    params: Promise<{
        slug?: string[] | undefined
    }>  
}
export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    return (
        <div>
            <h1>You Visited {slug?.join('/') || 'Blog'}</h1>
        </div>
    );
}