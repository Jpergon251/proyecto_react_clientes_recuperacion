import React from 'react'

const Contact = () => {
  return (
    <>
    <body>
    
    <main>
            <section class="section pag-contacto">
                
                <form class="form-contacto">
                    <h2>Contactanos</h2>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="tel" name="telefono" id="telefono" placeholder="Teléfono"/>
                    <button type="submit">Enviar</button>
                </form>
                <img src="/src/assets/images/pokemon_help.png" alt="support"/>
                
            </section>
        </main>
    <footer class="footer">
        <a title="Inicio"><img src="/src/assets/images/pokemon_company.png"/>
            © 2022 Pokémon | Esta página ha sido creada por José Antonio Pérez González 
        </a>
    </footer>
    </body>
    </>
  )
}

export default Contact