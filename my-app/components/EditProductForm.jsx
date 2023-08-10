'use client'
import { useState } from "react";

import { useRouter } from "next/navigation";
export default function EditProductForm({ id, title, description, stock }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newStock, setNewStock] = useState(stock);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();//refreshi engeller
        try {
            const res = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newTitle, newDescription, newStock }),
            })
            if (!res.ok) {
                throw new Error('Failed to update product')
            }
            router.push('/')
            router.refresh()

        } catch (error) {
            console.log('Error update product:', error);

        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-md my-1  gap-5" placeholder="Product Title" />

            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-md my-1  gap-5" placeholder="Product Description" />

            <input onChange={(e) => setNewStock(e.target.value)} value={newStock} type="text" className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-md my-1  gap-5" placeholder="Products Description" />

            <button className="text-white py-3 rounded text-center bg-pink-500 p-2 font-bold w-fit">Edit Product</button>
        </form>
    )
}