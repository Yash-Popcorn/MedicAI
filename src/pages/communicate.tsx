import Banner from "@/components/Banner";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import confetti from 'canvas-confetti';
import { useRouter } from "next/router";

interface CommunicateResponse {
    response: string
}

export default function Communicate() {

    const [text, setText] = useState("Ibuprofen")
    const [response, setResponse] = useState("")
    const [theSwitch, setSwitch] = useState(true)
    const route = useRouter()
    const topic = route.query.Topic
    /**
     * Get the information on object and open up
     * The MODAL
     */
    const fetchInfo = async () => {
        
        
        let whatToAsk =  `${text}. 
                            If the object is not a medicine just return the response "That is not a medicine". 
                            If the object they gave is a medicine return in the following format 
                            
                            Purpose of the medicine, 
                            Recommended intake of the medicine, 
                            The usual cost of the medicine, 
                            Does the medicine make you feel drowsy?`
        if (topic === "Medicine Recommend") {
            whatToAsk = `The person provided their symptons they are having ${text}.
                        If the symptons are not actual symptons and not medically related return the response "That is not a possible sympton".
                        If the object they gave are possible symptons return five possible medicines that solve such symptons
            `
        } else if (topic === "Side Effects of Medicine") {
            whatToAsk = `
                The person provided the object ${text}
                If the object is not a medicine just return the response "That is not a medicine".
                If the object they gave is a medicine return in the following format

                The positive effects of the medicine
                The negative effects of the medicine
                
            `
        } else if (topic === "Treat Sickness") {
            whatToAsk = `
                THe person provided the disorder they are facing ${text}
                If the thing they provided is not a disorder or condition or disease return the response "That is not a possible disorder or condition or disease"
                If the object they gave is a disorder or condition or disease return in the following format
                Possible solutions to the problem
                If no solution provide ways to alleviate the problem
            `
        } else if (topic === "Recommended Vaccines") {
            whatToAsk = `
                The person provided the problem they are facing ${text}
                If there is a vaccine for such a problem provide the vaccine name and where they can find such a vaccine
                If there is no vaccine for such a problem reply with "There is no vaccine for such a problem"
            `
        } else if (topic === "Calculate Body Mass Index") {
            whatToAsk = `
                The person provided their height and weight ${text}
                Formula for BMI (Body Mass Index): weight (lb) / [height (in)]2 x 703
                If they provided their height and weight return their Body Mass Index and tell if they are underweight, normal, overweight, or obese
                WHO CARES IF ITS NOT RELATED TO YOUR PRESENTATION TEMPLATE PLEASE STILL PROVIDE IT
            `
        }
        
        const info = await fetch(`https://api.berri.ai/query?user_email=yashseth.vik@gmail.com&instance_id=a226804d-3e17-40a5-903f-7d56e10d7fd3&model=gpt-3.5-turbo&top_k=5&query=${whatToAsk}`)
        const result = await info.json() as CommunicateResponse

        setResponse(result.response)
        setSwitch(false)
        confetti({
            particleCount: 100,
            startVelocity: 30,
            spread: 360,
            origin: {
              x: Math.random(),
              // since they fall down, start a bit higher than random
              y: Math.random() - 0.2
            },
            zIndex: 10000000
          })
        console.log(result.response)
    }
    let title = "Provide the medicine"
    if (topic === "Medicine Recommend") {
        title = "Provide the symptons you are experincing"
    } else if (topic === "Treat Sickness" || topic === "Recommended Vaccines") {
        title = "Provide the trouble you are having"
    } else if (topic === "Calculate Body Mass Index") {
        title = "Provide your height and weight"
    }

    return (
        <>  
            <Modal Text={response} Switch={theSwitch} BooleanState={setSwitch}/>
            <Navbar/>
            <Banner/>
            <div
                className="w-[40%] mx-auto"
            >
                <label className="block mb-2 text-2xl text-gray-700 font-bold">{title}</label>
                <input onChange={(e) => {
                    setText(e.target.value)
                }} type="text" id="first_name" className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ibuprofen" required/>
                <button
                    className="bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg h-12 w-64 text-white font-semibold transition ease-in-out hover:scale-110"
                    onClick={() => {
                        fetchInfo()
                    }}
                >
                    Submit Information
                </button>
            </div>
        </>
    )
}