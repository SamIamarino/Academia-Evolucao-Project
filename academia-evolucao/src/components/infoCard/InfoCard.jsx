import './InfoCard.css';

export default function InfoCard({title,description,darkTheme}){
    return(
        <div className={darkTheme ? "info-card-dark-themed" : "info-card"}>
                <div className={darkTheme ? "info-card-header-dark-themed" : "info-card-header"}>
                    <h1 className="info-card-title">{title}</h1>
                    <hr className={darkTheme ? 'info-card-hr-dark-themed' : 'info-card-hr'}/>
                </div>
                <div className={ darkTheme ? 'info-card-body-dark-themed' : 'info-card-body'}>
                    <h3 className='info-card-description league-spartan-font'>{description}</h3>
                </div>
        </div>
    );
}