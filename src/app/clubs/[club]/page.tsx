export default function Page({ params }: any) {
    return (
        <div>
            <h1>This is the page for {params.club}</h1>
        </div>
    )
}