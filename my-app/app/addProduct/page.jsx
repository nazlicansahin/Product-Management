'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function addProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState('');

    const router = useRouter();
    //submiti mongodb ye gondermek icin
    const handleSubmit = async (e) => {
        e.preventDefault();//refreshi engeller
        if (!title || !description) {
            alert('Please add a title and description')
            return
        }
        try {
            const res = await fetch('http://localhost:3000/api/products', {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, stock }),
            })
            if (res.ok) {
                alert('Product added')
                router.push('/')
                router.refresh()
            } else {
                throw new Error('Failed to create product')
            }
        } catch (error) {
            console.log('Error adding product:', error);
        }
    }
    return (<form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-md my-1  gap-5" placeholder="Product Name" />

        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-md my-1  gap-5" placeholder="Product Description" />

        <input onChange={(e) => setStock(e.target.value)} value={stock} type="text" className="flex justify-between items-center p-3 border border-slate-300 bg-white rounded-md my-1  gap-5" placeholder="Stock number" />

        <button type='submit' className="text-white py-3 rounded text-center bg-pink-500 p-2 font-bold w-fit">Add Product</button>
    </form>)
}