import { Link } from "react-router-dom";

const Inicio = ()=>{
    return(
        <>
        <body>
            <main class="index">
                <section class="section categorias">
                    <h2>Bienvenido a mi página de pokémon</h2>
                    
                    <ul class="blocks-list">
                        <li class="blocks-item">
                            <Link to='/dashboard'>
                            <a class="link" id="listado">
                                <img id="listadepokemons" src="/src/assets/images/pokemons.png" alt=""/>
                                <h4 class="texto">Pokémons</h4>
                            </a>
                            </Link>
                        </li>
                        
                        <li class="blocks-item">
                            <Link to='/contact'>
                            <a class="link" id="paginadecontacto">
                                <img src="/src/assets/images/pokemon_help.png" alt="pokemon_help"/>
                                <h4 class="texto">Página de contacto</h4>
                            </a>
                            </Link>
                        </li>
                    </ul>
                </section>
            </main>
            <footer class="footer">
                    <a title="Inicio"><img src="/src/assets/images/pokemon_company.png"/>
                        © 2022 Pokémon | Esta página ha sido creada por José Antonio Pérez González 
                    </a>
            </footer>
            <script src="./assets/js/main.js"></script>
        </body>
        </>
    )
}
export default Inicio;