import Link from "next/link";

export default function Navbar() {
    return (

        <nav className="flex justify-between items-center rounded-md bg-white px-8 py-3">
            <Link className="text-slate-600 font-bold" href={"/"}>Main Page</Link>
            <Link className="text-white py-3 rounded text-center bg-pink-500 p-2 font-bold" href={"/addProduct"}>Add Product</Link>
        </nav>
    )

}