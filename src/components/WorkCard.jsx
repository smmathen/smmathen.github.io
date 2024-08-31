import React from "react";

const WorkCard = ({ backgroundImage, description, links }) => {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="shadow-lg shadow-color-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
        >
            <div className="opacity-0 group-hover:opacity-100 ">
                <div className="p-4 text-center">
                    <span className="text-xl text-white tracking-wider ">
                        {description}
                    </span>
                    {links.length === 1 &&
                        <div className="pt-8">
                            <a
                                href={links[0].url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                                    {links[0].text}
                                </button>
                            </a>
                        </div>
                    }
                    {
                        links.length === 2 &&
                        <div className="pt-4 pb-2 text-center flex justify-center">
                            {links.map((link) => (

                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className="text-center rounded-lg px-8 py-3 m-2 bg-[#0a192f] text-white font-bold text-lg">
                                        {link.text}
                                    </button>
                                </a>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default WorkCard;