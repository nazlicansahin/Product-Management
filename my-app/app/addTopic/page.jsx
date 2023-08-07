'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function addTopic() {
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
            const res = await fetch('http://localhost:3000/api/topics', {
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
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="border border-slate-500 px-8 py-2" placeholder="Product Name" />

        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" className="border border-slate-500 px-8 py-2" placeholder="Product Description" />

        <input onChange={(e) => setStock(e.target.value)} value={stock} type="text" className="border border-slate-500 px-8 py-2" placeholder="Stock number" />

        <button type='submit' className="bg-slate-700 text-white font-bold px-8 py-3 w-fit">Add Product</button>
    </form>)
}