import Card from "./components/card/Card"
import './App.css'

function App() {
    return (
        <>
            <div style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "-15px"
                    }}>
            

            <Card titulo="Uma Linda Mulher (1990)"
                descricao="Executivo milionário e solitário contrata uma jovem prostituta para lhe fazer companhia por uma semana. Aos poucos, ele se encanta e fica apaixonado pela mulher." />
            
            <Card titulo="Dirty Dancing (1987)"
                descricao="No filme, a jovem Baby fica desapontada quando seus pais decidem passar o verão com ela em um resort nos Catskills. No entanto, sua sorte muda quando ela conhece um instrutor de dança com um passado contrastante com o dela." />
            
            <Card titulo="Sempre ao Seu Lado (2009)"
                descricao="Um professor universitário encontra um filhote de cachorro da raça akita na estação de trem, conhecida por sua lealdade. O cão passa a acompanhá-lo até a estação e esperar sua volta, mas um evento inesperado muda suas vidas." /></div>    
        </>
     );
}

export default App
