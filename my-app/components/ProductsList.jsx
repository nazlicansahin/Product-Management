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
                <div className="flex justify-between items-center p-4 border border-slate-300 bg-white rounded-md my-3  gap-5 ">
                    <div className="flex justify-between items-center rounded-md bg-white px-8 py-3 w-64">
                        <h2 className="font-bold text-xl">{t.title}</h2>
                    </div>
                    <div className=" w-96">
                        {t.description.length > 40 ?
                            `${t.description.substring(0, 40)}...` : t.description
                        }                    </div>
                    <div className="p-4  rounded border-slate-300 my-3 flex justify-between gap-5">
                        {t.stock}
                    </div>
                    <div className="flex gap-2">
                        <RemoveBtn id={t._id} />
                        <Link href={`/editProduct/${t._id}`}> <HiPencilAlt size={24} className="text-slate-400" /> </Link>
                    </div>
                </div>))}
        </>
    )
}