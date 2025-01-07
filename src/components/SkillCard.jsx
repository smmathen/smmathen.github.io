import React from "react";

const SkillCard = ({ imgSrc, altText, skillName }) => {
    return (
        <div className="shadow-md shadow-[#040C16] hover:scale-110 duration-500 p-4 flex flex-col items-center">
            <div className="flex-grow flex items-center justify-center">
                <img className="h-full max-h-[100px] object-contain" src={imgSrc} alt={altText} />
            </div>
            <p className="mt-4">{skillName}</p>
        </div>
    );
};

export default SkillCard;
