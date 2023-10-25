import { useState } from "react"

function Home() {
    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            {
                isLogged ? (
                    <div style={{
                        width: "100vw",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <div>
                            <div style={{
                                 width: "80vw",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center"
                            }}>
                                <h2>bem vindo de volta!</h2>
                            </div>
        
                            <div style={{
                                 width: "80vw",
                                 display: "flex",
                                 flexDirection: "column",
                                 alignItems: "center"
                            }}>
                                <img 
                                    src="https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-working-on-project-5691620-4759502.png"
                                    alt="Imagem da Página Home" 
                                    width="420px"
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <button id="login" onClick={() => setIsLogged(true)}>Fazer login</button>
                )
            }
        </>
    )
}

export default Home