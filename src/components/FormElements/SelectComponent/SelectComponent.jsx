






export default function SelectComponent({ label, value, onChange }) {
    return (
        <div className="relative">
            <p className="font-medium pt-0 pb-0 pr-2 pl-2 -mt-3 mr-0 mb-0 ml-2 text-gray-600">
                {label}
            </p>
            <select
                value={value}
                onChange={onChange}
                className="
                bg-white 
                border-gray-300
                placeholder-gray-300 
                text-gray-900 
                focus:border-black 
                focus:outline-none 
                border 
                rounded-md 
                block 
                w-full 
                p-t-4 
                pr-4 
                pb-4 
                pl-4 
                mr-0 
                mt-0 
                ml-0 
                text-base
            "
            >
                {options && options.length ? (
                    options.map((optionItem) => (
                        <option
                            id={optionItem.id}
                            value={optionItem.id}
                            key={optionItem.id}
                        >
                            {optionItem.label}
                        </option>

                    ))
                ) : (
                    <option id="" value={""}>
                        Select
                    </option>
                )}
            </select>
        </div>
    );
}