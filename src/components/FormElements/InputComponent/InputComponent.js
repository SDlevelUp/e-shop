import React, { useState } from "react";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailIcon from '@mui/icons-material/Email';

export default function InputComponent({
    label,
    placeholder,
    onChange,
    value,
    type,
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputType = isPasswordVisible ? "text" : type || "text";

    return (
        <div className="relative">
            <p className="pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-sm text-gray-600 bg-white">
                {label}
            </p>
            <div className="flex items-center">
                {type === "email" && <EmailIcon />}
            </div>
            <input
                placeholder={placeholder}
                type={inputType}
                value={value}
                onChange={onChange}
                className={`border text-black placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md ${type === "password" ? "pr-12" : "" // Ajoutez cette classe pour décaler l'icône à l'intérieur du champ de mot de passe
                    }`}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600"
                >
                    {isPasswordVisible ? (
                        <VisibilityOutlinedIcon />
                    ) : (
                        <VisibilityOffOutlinedIcon />
                    )}
                </button>
            )}
        </div>
    );
}