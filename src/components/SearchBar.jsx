import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    const [expanded, setExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleClick = () => {
        setExpanded(!expanded);
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-center items-center bg-[#c0bebe] rounded-full p-2">
                <input
                    type="search"
                    placeholder="Rechercher ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className=
                    {`
                        p-0 
                        bg-transparent 
                        focus:outline-none 
                        transition-all 
                        duration-300 
                        ${expanded ? "w-52" : "w-0"
                        }`
                    }
                />
                <button className="flex justify-center items-center text-black" onClick={handleClick}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    );
};