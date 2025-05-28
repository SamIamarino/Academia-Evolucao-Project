import Header from "../components/header/Header"
import PhotoCarrousel from "../components/photoCarrousel/PhotoCarrousel";
import InfoCardContainer from "../components/infoCardContainer/InfoCardContainer";
import TextContainer from "../components/textContainer/TextContainer";
import Footer from "../components/footer/Footer";
import { CARROUSEL_IMAGES_HISTORIA,INFO_CARD_CONTAINER_ABOUT_PAGE } from "../data";
import { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

export default function AboutPage(){

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);
    const [isDarkTheme, setIsDarkTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    useEffect(() => {
      const updateValues = () => {
        const mobile = window.innerWidth <= 850;
        const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
        setIsMobile(mobile);
        setIsDarkTheme(darkTheme);
    
        document.body.style.backgroundColor = darkTheme ? "#1C1C1C" : "#F1F1F1";
      };
    
      updateValues();
    
      const themeWatcher = window.matchMedia("(prefers-color-scheme: dark)");
      themeWatcher.addEventListener("change", updateValues);
      window.addEventListener("resize", updateValues);
    
      return () => {
        themeWatcher.removeEventListener("change", updateValues);
        window.removeEventListener("resize", updateValues);
      };
    }, []);

    return(
         <>
            <Header toggleNavBar={false}/>

            <PhotoCarrousel 
              photoArray={CARROUSEL_IMAGES_HISTORIA}
              mobile={isMobile}
            />

            <InfoCardContainer 
              dataSource={INFO_CARD_CONTAINER_ABOUT_PAGE}
              toggleTitle={false}
              darkTheme={isDarkTheme}
              mobile={isMobile}
              scrollID={"visaoAcademia"}
            />

            <TextContainer 
              title={"Nossa Historia: "}
              description1={"A Evolução foi fundada em 2006 por um casal de Profissionais de Educação Física apaixonados pelo exercício e pelo esporte — em especial, o basquetebol (rs). Mas nossa história começa um pouco antes, em 2003, com a abertura de uma pequena sala nos fundos, dedicada exclusivamente às aulas de ginástica."}
              description2={"Desde então, seguimos firmes em nosso propósito de evoluir continuamente. Passamos por diversas reformas e ampliações, investimos em novos equipamentos, realizamos inúmeras reuniões de equipe e formações profissionais. Cada passo contribuiu para consolidar nossa cultura e nosso jeito de trabalhar com o exercício físico. E seguimos em movimento — sempre abertos a aprender mais e melhorar."}
              darkTheme={isDarkTheme}
            />

            <TextContainer 
              title={"Cultura de Crescimento: "}
              description1={"Nosso propósito é resolver problemas, dar significado ao exercício e promover mudanças de comportamento que impactem positivamente a vida das pessoas. Criamos uma cultura baseada na conscientização: incentivamos a constância, a técnica e o reconhecimento dos benefícios que o movimento traz para a saúde física e mental."}
              description2={"Acreditamos que não existe treino mágico. Mas sabemos que, com esforço e hábitos saudáveis, os resultados virão — e serão duradouros. Por isso, cultivamos uma relação positiva com o exercício físico."}
              description3={"Nossa metodologia se baseia em etapas de aprendizagem, respeitando a individualidade de cada pessoa e oferecendo o tempo necessário para adaptação e construção do hábito. Isso inclui uma progressão gradual dos treinos, com foco na técnica e em exercícios essenciais, além da educação sobre os princípios do treinamento, mentalidade adequada e aspectos do processo de reabilitação. Tudo com o objetivo de gerar afeto, engajamento e aderência ao programa de treinamento."}
              darkTheme={isDarkTheme}
            />

            <FloatButton 
              href="https://wa.me/message/JIYIDMVOUKSKJ1"
              icon={<WhatsAppOutlined />}
              style={{ backgroundColor: '#25D366'}}
              rowClassName={() => 'dark-row'}
            />

            <Footer />
          </>
    );
}