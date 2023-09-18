'use client';

import InputComponent from "@/components/FormElements/InputComponent/InputComponent"
import { loginFormControls } from "@/utils";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    return (
        <div className="bg-white relative">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
                            <p className="w-full text-2xl font-medium text-center font-serif text-black">
                                Connexion
                            </p>
                            <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                {loginFormControls.map((controlItem, index) => (
                                    <div key={`control-${index}`}>
                                        {controlItem.componentType === 'input' ? (
                                            <InputComponent
                                                type={controlItem.type}
                                                placeholder={controlItem.placeholder}
                                                label={controlItem.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                                <button
                                    className="
                                        inline-flex 
                                        w-full 
                                        items-center 
                                        justify-center 
                                        bg-black 
                                        px-4
                                        py-3
                                        text-l
                                        text-white
                                        transition-all 
                                        duration-200
                                        ease-in-out 
                                        focus:shadow 
                                        font-medium 
                                        uppercase 
                                        tracking-wide
                                        hover:bg-slate-300
                                        hover:text-black
                                    "
                                >
                                    Connexion
                                </button>
                                <div className="flex flex-col gap-2">
                                    <p className="underline"> Nouveau sur le site ?</p>
                                    <button
                                        className="
                                            inline-flex 
                                            w-full 
                                            items-center 
                                            justify-center 
                                            bg-black 
                                            px-4
                                            py-3
                                            text-l
                                            text-white
                                            transition-all 
                                            duration-200
                                            ease-in-out 
                                            focus:shadow 
                                            font-medium 
                                            uppercase 
                                            tracking-wide
                                            hover:bg-slate-300
                                            hover:text-black
                                        "
                                        onClick={() => router.push('/register')}
                                    >
                                        Créer un compte
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};