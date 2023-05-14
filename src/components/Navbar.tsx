const references = ["Dashboard"]

export default function Navbar() {
    return (
        <nav
            className="bg-slate-500 h-24 border-b-2 select-none"
        >
            <div
                className="max-w-screen-xl flex items-center justify-between mx-auto p-6 "
            >
                <a href="/" className="flex items-center">
                    <span className="self-center text-4xl whitespace-nowrap text-white font-bold">{'MedicAI💊'}</span>
                </a>

                <div className="flex space-x-4 invisible sm:visible ml-auto">
                    {
                        references.map((value) => {
                            return (
                                <a href="/dashboard" className="transition ease-in-out block px-4 py-2 text-2xl text-white hover:text-gray-800 font-semibold">
                                    {value}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    )
}