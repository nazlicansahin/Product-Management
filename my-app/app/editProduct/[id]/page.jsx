import EditProductForm from "@/components/EditProductForm";
const getProductById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store', })
        if (!res.ok) {
            throw new Error('Failed to fetch product')
        }
        return res.json()
    } catch (error) {
        console.log('Error loading product:', error);
    }
}
export default async function EditProduct({ params }) {
    const { id } = params;
    const { product } = await getProductById(id);
    const { title, description, stock } = product;
    return (
        <EditProductForm id={id} title={title} description={description} stock={stock} />
    )
}