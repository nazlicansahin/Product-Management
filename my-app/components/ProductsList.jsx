import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
//tum veriyi cektik burada
const getProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products"
            , {
                cache: 'no-store', //bir seyleri cacheye atmasin ki guncellendiginde anlayalim
            })
        if (!res.ok) {
            throw new Error('Failed to fetch products')
        }
        return res.json()
    } catch (error) {
        console.log('Error loading products:', error);

    }
}
export default async function ProductsList() {
    const { products } = await getProducts().then(resp => {
        return resp ? resp : {};
    })
    /*ekrana yazdirirken {} ler icinde veri tabaninda kayitli oldugu sekild cagiriyoruz */
    return (
        <>
            {products?.map((t) => (
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
                        <Link href={`/editProduct/${t._id}`}> <HiPencilAlt size={24} /> </Link>
                    </div>
                </div>))}
        </>
    )
}