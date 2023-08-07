import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
//tum veriyi cektik burada
const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics"
            , {
                cache: 'no-store', //bir seyleri cacheye atmasin ki guncellendiginde anlayalim
            })
        if (!res.ok) {
            throw new Error('Failed to fetch topics')
        }
        return res.json()
    } catch (error) {
        console.log('Error loading topics:', error);

    }
}
export default async function TopicsList() {
    const { topics } = await getTopics();
    /*ekrana yazdirirken {} ler icinde veri tabaninda kayitli oldugu sekild cagiriyoruz */
    return (
        <>
            {topics.map((t) => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{t.title}</h2>
                        <div>
                            {t.description}
                        </div>
                    </div>
                    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5">
                        {t.stock}
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editTopic/${t._id}`}> <HiPencilAlt size={24} /> </Link>
                    </div>
                </div>))}
        </>
    )
}