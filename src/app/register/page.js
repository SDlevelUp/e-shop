"use client";

import InputComponent from "@/components/FormElements/InputComponent/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent/SelectComponent";
import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { registerNewUser } from "@/services/register";
import { registrationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

export default function Register() {
    const [formData, setFormData] = useState(initialFormData);
    const [isRegistered, setIsRegistered] = useState(false);
    const { isAuthUser } = useContext(GlobalContext);

    const router = useRouter()

    console.log(formData);

    function isFormValid() {
        return formData &&
            formData.firstName &&
            formData.firstName.trim() !== "" &&
            formData.lastName &&
            formData.lastName.trim() !== "" &&
            formData.email &&
            formData.email.trim() !== "" &&
            formData.password &&
            formData.password.trim() !== ""
            ? true
            : false;
    }

    console.log(isFormValid());

    async function handleRegisterOnSubmit() {
        const data = await registerNewUser(formData);
        if (data.success) {
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setIsRegistered(true);
            setFormData(initialFormData);
        } else {
            toast.error(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            setFormData(initialFormData);
        }

        console.log(data);
    }

    useEffect(() => {
        if (isAuthUser) router.push("/");
    }, [isAuthUser]);

    return (
        <div className="relative py-24">
            <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-48 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
                    <div className="w-full mt-10 mr-0 mb-0 ml-0 relative lg:mt-0 lg:w-5/12">
                        <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative">
                            <p className="w-full text-2xl font-medium text-center font-serif text-black pb-4">
                                {isRegistered
                                    ? "Inscription réussie !"
                                    : "Créer un compte"
                                }
                            </p>
                            {isRegistered ? (
                                <button
                                    className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg 
                                    text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide
                                    "
                                    onClick={() => router.push('/login')}
                                >
                                    Connexion
                                </button>
                            ) : (
                                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                                    {registrationFormControls.map((controlItem) =>
                                        controlItem.componentType === "input" ? (
                                            <InputComponent
                                                key={controlItem.id}
                                                type={controlItem.type}
                                                placeholder={controlItem.placeholder}
                                                label={controlItem.label}
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        [controlItem.id]: event.target.value,
                                                    });
                                                }}
                                                value={formData[controlItem.id]}
                                            />
                                        ) : controlItem.componentType === "select" ? (
                                            <SelectComponent
                                                options={controlItem.options}
                                                label={controlItem.label}
                                                onChange={(event) => {
                                                    setFormData({
                                                        ...formData,
                                                        [controlItem.id]: event.target.value,
                                                    });
                                                }}
                                                value={formData[controlItem.id]}
                                            />
                                        ) : null
                                    )}
                                    <button
                                        className="
                                        disabled:opacity-50
                                        inline-flex 
                                        w-full 
                                        items-center 
                                        justify-center 
                                        bg-black 
                                        px-4
                                        py-3
                                        text-lg
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
                                        disabled={!isFormValid()}
                                        onClick={handleRegisterOnSubmit}
                                    >
                                        S'inscrire
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Notification />
        </div>
    );
}