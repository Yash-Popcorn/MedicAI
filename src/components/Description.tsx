import { useRouter } from "next/router"

export default function Description() {

    const route = useRouter()

    return (
        <div
            className="max-w-screen h-72 p-10"
        > 
            
            <p
                className="text-gray-800  font-bold text-5xl w-[40%] animate-highlight h-10 mb-16"
            >
                {"Solving for all of your medical needs and more"}
            </p>
            <p
                className="text-gray-500  font-semibold text-3xl w-[40%] animate-highlight h-10 mb-12"
            >
                {"Using artificial intelligence to get valuable insight"}
            </p>
            <button
                className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg h-12 w-64 text-white font-semibold transition ease-in-out hover:scale-110"
                onClick={() => {
                    route.push("/dashboard")
                }}
            >
                Go to Dashboard
            </button>
        </div>
    )
}