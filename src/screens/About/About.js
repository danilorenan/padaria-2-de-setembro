import { ContainerAboutHome,
    ContainerInfosAbout,
    TitleAbout,
    TextAbout, } from "./styles";
import { Helmet } from 'react-helmet';

const About = () => {
return (
    <ContainerAboutHome>
        <Helmet>
        <title>Padaria 2 de Setembro</title>
        <meta name="description" content="Padaria 2 de Setembro sobre" />
      </Helmet>
        <ContainerInfosAbout>
            <TitleAbout>
                Desde 1980
            </TitleAbout>
            <div className='style-about'>
                <TextAbout>
                    Sr Evaristo e Dona Marlene começaram com uma masseira pequena e dois fornos de tijolos, em que cada forno cabiam 30 pães caseiros. Com a ajuda da irmã de sr Evaristo, que já tinha experiência no ramo, ali começava as primeiras remessas de pães caseiros que ele saia de casa em casa oferecendo.
                    Dona Marlene grávida de seu terceiro filho trabalhava sem medir esforços com sr Evaristo, para que seus produtos saíssem com qualidade, saborosos e sempre fresquinhos na casa de seus clientes. 
                    Sim, sr Evaristo e Dona Marlene já haviam conquistado uma ótima clientela, então tiveram que pedir reforço para um sobrinho ajudar com a mão de obra pois a demanda havia aumentado. 
                    No ano de 1981 os negócios foram prosperando e por isso foi construído no mesmo endereço um imóvel pequeno da tão sonhada Padaria 2 de Setembro, com um forno que tinha capacidade para 130 pães, uma masseira grande e uma batedeira para seus bolos e cucas. 
                    Como todo empreendimento tem dificuldades, o casal também teve..., mas com perseverança, otimismo e dedicação para que seu pequeno negócio prosperasse, não esmoreceram.
                </TextAbout>
                <TextAbout>
                    Em 1983 a demanda continuava a aumentar e alguns familiares deram apoio na mão de obra enquanto ali seu Evaristo e dona Marlene tiveram que contratar seus primeiros funcionários. Daí para frente a história encarregou-se de criar uma tradição que perdura até hoje construída com muito empenho e dedicação.
                    No início dos anos 2000 a Padaria 2 de Setembro passou pela primeira grande expansão na sua área física. Acompanhando os avanços do ramo da panificação, passou por uma nova mudança. Desta vez a reestruturação se deu no novo layout, na linha de produção e na parte de vendas, mudanças essas que transformaram o conceito de vender pães, aliando qualidade, tradição e um excelente atendimento aos nossos clientes.
                    Hoje a Padaria 2 de Setembro utilizando madeira de reflorestamento e fabricação artesanal, produz mais de 9.000 unidades diárias entre pães, bolos e cucas. Cobrindo, sem medir esforços, 15 municípios em Santa Catarina.
                    Nós temos muito orgulho da nossa história e satisfação em participar da mesa de diversas pessoas que fazem dos nossos produtos sua alimentação diária.
                </TextAbout>
            </div>
            
            <h3>
                    Muito Obrigada,
                </h3>
                Padaria 2 de Setembro.
        </ContainerInfosAbout>
    </ContainerAboutHome>
)
}

export default About;