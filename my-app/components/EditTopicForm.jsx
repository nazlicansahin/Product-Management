'use client'
import { useState } from "react";

import { useRouter } from "next/navigation";
export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();//refreshi engeller
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newTitle, newDescription }),
            })
            if (!res.ok) {
                throw new Error('Failed to update topic')
            }
            router.push('/')
        } catch (error) {
            console.log('Error updating topic:', error);

        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" className="border border-slate-500 px-8 py-2" placeholder="Topic Title" />

            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type="text" className="border border-slate-500 px-8 py-2" placeholder="Topic Description" />


            <button className="bg-slate-700 text-white font-bold px-8 py-3 w-fit">Edit Topic</button>
        </form>
    )
}