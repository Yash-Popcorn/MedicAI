import { Dispatch, SetStateAction } from "react"

interface ModalProps {
    Text: string
    Switch: boolean
    BooleanState: Dispatch<SetStateAction<boolean>>
}

export default function Modal(_props: ModalProps) {

    return (
        <div id="popup-modal" className={`inset-0 flex items-center justify-center fixed z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${_props.Switch && "hidden" || ""}`}>
            <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="p-6 text-center">
                        <p
                            className="mx-auto mb-4 w-[80px] h-42 scale-150"
                        >
                            {'🎉'}
                        </p>
                        <h3 className="mb-5 text-lg font-normal text-white">{_props.Text}</h3>
                        
                        <button onClick={() => {
                            _props.BooleanState(true)
                        }} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}