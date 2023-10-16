import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="relative p-0">
            <input
                type="text"
                placeholder="Rechercher..."
                className="p-2 w-[270px] md:w-60 border-b bg-gray-100 focus:outline-none focus:border-b-black focus:bg-slate-300 focus:bg-opacity-30 text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 text-black"
                style={{
                    zIndex: 1,
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.351-4.351M9 17a6 6 0 100-12 6 6 0 000 12z"
                    />
                </svg>
            </button>
        </div>
    );
};