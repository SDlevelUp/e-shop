import { useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Carrousel({ pictures }) {
    const [current, setCurrent] = useState(0);

    if (!pictures || !Array.isArray(pictures) || pictures.length === 0) {
        return <div>Le tableau d'images est vide ou non défini.</div>;
    }

    const length = pictures.length;

    const rightSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const leftSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
            {pictures.map((picture, index) =>
                current === index && (
                    <div key={index} className="carrousel-pictures shadow-lg flex">
                        <img src={picture} alt="Produit dans le carousel" />
                        {length > 1 && (
                            <>
                                <div className="carrousel-leftArrow bg-[#aaa1a196] rounded-full h-8 w-8 items-center flex justify-center" onClick={leftSlide}>
                                    <NavigateBeforeIcon style={{ fontSize: '2.3rem' }} />
                                </div>
                                <div className="carrousel-rightArrow  bg-[#aaa1a196] rounded-full h-8 w-8 items-center flex justify-center" onClick={rightSlide}>
                                    <NavigateNextIcon style={{ fontSize: '2.3rem' }} />
                                </div>
                            </>
                        )}
                    </div>
                )
            )}
        </>
    );
};

