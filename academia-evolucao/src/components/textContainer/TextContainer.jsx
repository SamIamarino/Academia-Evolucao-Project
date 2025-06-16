import './TextContainer.css';

const TextContainer = ({title,description1,description2,description3,darkTheme}) => {
    return (
        <div className="text-container-wrapper">
            <div className={darkTheme ? "text-container-dark-themed" : "text-container"}>
                <h1 className={darkTheme ? "text-container-title-dark-themed": "text-container-title"}>{title}</h1>
                <div className={darkTheme ? "text-container-content-dark-themed" : "text-container-content"}>
                    <p className='league-spartan-font'>{description1}</p>
                    <p className='league-spartan-font'>{description2}</p>
                    <p className='league-spartan-font'>{description3}</p>
                </div>
            </div>
        </div>
        
    );
};

export default TextContainer;