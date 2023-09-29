import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

export default function ImageSlider() {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 5 },
        left1: { x: '-50%', scale: 0.7, zIndex: 2 },
        left: { x: '-90%', scale: 0.5, zIndex: 1 },
        right: { x: '90%', scale: 0.5, zIndex: 1 },
        right1: { x: '50%', scale: 0.7, zIndex: 2 },
    };

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
            return updateIndexes;
        });
    };

    const images = [
        "/img/qamis-men.webp",
        "/img/abaya-women2.webp",
        "/img/qamis-men2.webp",
        "/img/abaya-women.webp",
        "/img/qamis-enfant.webp",
    ];

    return (
        <div className="flex flex-col items-center justify-center mt-[43px] 2xl:mt-[50px] h-screen">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="shadow-lg w-[40%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[25%] 3xl:w-[30%] h-auto"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute' }}
                />
            ))}
            <button
                onClick={handleNext}
                className="text-white rounded-full bg-black w-10 h-10 mt-[350px] lg:mt-[500px] xl:mt-[600px] 2xl:mt-[700px] 3xl:mt-[800px] md:mt-[400px] sm:mt-[400px]"
            >
                <NavigateNextOutlinedIcon />
            </button>
        </div>
    )
};