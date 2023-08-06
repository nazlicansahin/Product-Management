export default function addTopic() {
    return (<form className="flex flex-col gap-3">
        <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Topic Title" />

        <input type="text" className="border border-slate-500 px-8 py-2" placeholder="Topic Description" />


        <button className="bg-slate-700 text-white font-bold px-8 py-3 w-fit">Add Topic</button>
    </form>)
}