
export default function MainPage(){
    return(

        

        
        <>
            <Header />
            <PhotoCarrousel photoArray={CARROUSEL_IMAGES}/>
            <AboutContainer />
            <a href='/'>Voltar para home</a>
        </>
    );
}