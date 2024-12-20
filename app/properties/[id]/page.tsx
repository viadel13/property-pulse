interface Params {
    id: string;
}

const PropertyPage = async ({params}: { params: Params }) => {

    const { id } = await params;

    return (
        <div>Property page {id} </div>
    );
};

export default PropertyPage;
