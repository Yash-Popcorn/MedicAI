import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

interface CardProps {
    text: string
}

const Cards = ["Get Medicine Information", "Medicine Recommend", "Side Effects of Medicine", "Treat Sickness", "Recommended Vaccines", "Calculate Body Mass Index"]

const Card = (_props: CardProps) => {

    const route = useRouter()

    let desc = ""
    if (_props.text === "Get Medicine Information") {
        desc = "Interested in learning about a medicine that actually provides 100% real information? Use this bot."
    } else if (_props.text === "Medicine Recommend") {
        desc = "Do not know medicines you can intake for the sympton you are having? We have some recommendations. Based on factual data from National Institutes of Health"
    } else if (_props.text === "Treat Sickness") {
        desc = "Have something bothering you and your doctor takes too much time to reply? The AI has a solution for your exact problem"
    } else if (_props.text === "Recommended Vaccines") {
        desc = "Having some unusual problems and wondering if there is a vaccine for such a problem? We have the answers"
    } else if (_props.text === "Calculate Body Mass Index") {
        desc = "Are you interested in knowing what your BMI is? Determines if you are obese, underweight, overweight, or normal"
    } else {
        desc = "Not sure if a medicine is safe to have? Do not worry as the AI provides the side-effects and when it is best to intake the medicine"
    }
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{_props.text}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            <button
                className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg h-12 w-64 text-white font-semibold transition ease-in-out hover:scale-110"
                onClick={() => {
                    route.push({
                        pathname: "/communicate",
                        query: {
                            Topic: _props.text
                        }
                    })
                }}
            >
                Start Communicating
            </button>
        
        </div>
    )
}
export default function Dashboard() {

    return (
        <>
            <Navbar/>

            <div
                className="flex justify-center items-center h-screen"
            >
                <div
                    className="grid grid-cols-3 gap-4"
                >
                    {
                        Cards.map((text) => {
                            return (
                                <>
                                    <Card text={text}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}