import React from 'react'

const SectionTitle = ({ title, subTitle, className, titleCss, customFont, dualText = false }) => {
    const words = title.trim().split(" ");
    const titleSplit = words[0] || "";
    const restWord = words.slice(1).join(" ");

    return (
        <div className={`flex flex-col items-center mb-16 ${className}`}>
            <p className={`italic text-primary font-medium custom-font text-lg ${titleCss} ${customFont}`}>{subTitle}</p>

            <h2 className={`text-6xl text-primary ${customFont}`}>
                <span className={dualText ? "text-white" : ""}>{titleSplit}</span>
                {restWord && ` ${restWord}`}
            </h2>
        </div>
    )
}

export default SectionTitle