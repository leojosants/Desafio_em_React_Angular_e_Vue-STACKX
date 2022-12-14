import Header from "../../components/Header";
import { useState } from "react";
import { Footer } from '../../components/Footer'
import { ListTechnologies } from '../../components/ListTechnologies/index';
import { 
    Container,
    Content,
} from './styles'

function Home() {
    const [ title, setTitle ] = useState(
        'Olá, meu nome é Leonardo Santos e eu sou um desenvolvedor Front-End, Tecnologias que tenho experiência:'
    );
    
    return(
        <>
            <Header />
            
            <Container>
                <Content>

                    <div>
                        <h1>{title}</h1>
                        
                        <ListTechnologies changeTitle={setTitle} />
                    </div>

                    <Footer changeTitle={setTitle}/>
                </Content>
            </Container>
        </>
    );
}

export default Home;