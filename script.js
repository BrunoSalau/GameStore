const main = document.querySelector('main');
const registrar = () =>{
    main.innerHTML = (`
        <section class="menu">
            <div class="registro">
                <article class="imagem">
                    <div class="animation">
                        <img src="IMG/john-wick-neon-art-3840x2160-25470.jpg" alt="">
                        <img src="IMG/call-of-duty-black-3840x2160-25461.jpg" alt="">
                        <img src="IMG/battlefield-6-3840x2160-25547.jpg" alt="">
                        <img src="IMG/games/elden.jpg" alt="">
                        <img src="IMG/john-wick-neon-art-3840x2160-25470.jpg" alt="">
                    </div>
                </article>
                <div class="formulario">
                    <form action="get">
                        <article class="regis">
                            <h1>Registrar</h1>
                        </article>
                        <input type="text" type="name" placeholder="Username">
                        <input type="text" type="email" placeholder="Email">
                        <input type="text" type="password" placeholder="Password">
                        <div class="botao">
                            <a href="" class="btn3">Entrar</a>
                        
                    </form>
                            <a href="" class="btn1">Login</a>
                        </div>
                </div>
            </div>
        </section>
        `)
}
const login = () => {
    main.innerHTML = (`
    <section class="menu">
            <div class="registro">
                <article class="imagem">
                    <div class="animation">
                        <img src="IMG/john-wick-neon-art-3840x2160-25470.jpg" alt="">
                        <img src="IMG/call-of-duty-black-3840x2160-25461.jpg" alt="">
                        <img src="IMG/battlefield-6-3840x2160-25547.jpg" alt="">
                        <img src="IMG/games/elden.jpg" alt="">
                        <img src="IMG/john-wick-neon-art-3840x2160-25470.jpg" alt="">
                    </div>
                </article>
                <div class="formulario">
                    <form action="get">
                        <article class="regis">
                            <h1>Login</h1>
                        </article>
                        <input type="text" type="email" placeholder="Email">
                        <input type="text" type="password" placeholder="Password">
                        <div class="botao">
                            <a href="" class="btn3">Entrar</a>
                        
                    </form>
                            <a href="" class="btn2">Registrar</a>
                        </div>
                </div>
            </div>
        </section>
    `);
}
const paginaP = () => {
    main.innerHTML = (`
        <!--NAVEGAÇÃO-->
        <nav class="nave">
            <ul>
                <li class="listaIMG"><a href="#home"><img src="IMG/controle-de-video-game.png" alt=""></a></li>
                <li class="lista"><a href="#home">HOME</a></li>
                <li class="lista"><a href="#produtos">PRODUTOS</a></li>
                <li class="lista"><a href="#sobre">SOBRE</a></li>
                <li class="lista"><a href="">CONTA</a></li>
            </ul>
        </nav>
<!--BANNER DA LOJA-->
        <div class="container">
            <img class="imag" src="IMG/img1.jpeg" alt="">
            <div class="textoImg"><h1>Games Store</h1></div>
        </div>

<!--PRODUTOS DA LOJA-->
        <section class="loja" id="produtos">
            <h3 class="titulo">Produtos</h3>
                <div class="cards">
                    <article class="produto">
                        <div class="img"><img src="IMG/games/elden.jpg" alt=""></div>
                        <div class="name"><h3>Elden Ring</h3></div>
                        <div class="plataforma"><p>PC</p></div>
                        <div class="preço"><h4>R$60,25</h4></div>
                        <a href="" class="finalizar"><div class="comprar"><p>COMPRAR</p></div></a>
                    </article>
                    <article class="produto">
                        <div class="img"><img src="IMG/games/gta.jpg" alt=""></div>
                        <div class="name"><h3>Grand Theft Auto V</h3></div>
                        <div class="plataforma"><p>PC</p></div>
                        <div class="preço"><h4>R$30,90</h4></div>
                        <a href="" class="finalizar"><div class="comprar"><p>COMPRAR</p></div></a>
                    </article>
                    <article class="produto">
                        <div class="img"><img src="IMG/games/csgo.png" alt=""></div>
                        <div class="name"><h3>Counter-Strike Global Offensive</h3></div>
                        <div class="plataforma"><p>PC</p></div>
                        <div class="preço"><h4>R$259,99</h4></div>
                        <a href="" class="finalizar"><div class="comprar"><p>COMPRAR</p></div></a>
                    </article>
                    <article class="produto">
                        <div class="img"><img src="IMG/games/minecraft.jpg" alt=""></div>
                        <div class="name"><h3>Minecraft</h3></div>
                        <div class="plataforma"><p>PC</p></div>
                        <div class="preço"><h4>R$54,00</h4></div>
                        <a href="" class="finalizar"><div class="comprar"><p>COMPRAR</p></div></a>
                    </article>
                    <article class="produto">
                        <div class="img"><img src="IMG/games/valorant.jpeg" alt=""></div>
                        <div class="name"><h3>Valorant</h3></div>
                        <div class="plataforma"><p>PC</p></div>
                        <div class="preço"><h4>Gratis</h4></div>
                        <a href="" class="finalizar"><div class="comprar"><p>COMPRAR</p></div></a>
                    </article>
                    <article class="produto">
                        <div class="img"><img src="IMG/games/resident.png" alt=""></div>
                        <div class="name"><h3>Resident Evil Requiem</h3></div>
                        <div class="plataforma"><p>PC</p></div>
                        <div class="preço"><h4>R$699,99</h4></div>
                        <a href="" class="finalizar"><div class="comprar"><p>COMPRAR</p></div></a>
                    </article>
                </div>
        </section>
    <!--SOBRE-->
        <section class="sobre" id="sobre">
            <h3 class="titulo">Sobre a Games Store</h3>
            <article class="sobre2">
                <div class="imagem2">
                    <img class="imaga" src="IMG/battlefield-6-3840x2160-25547.jpg" alt="">
                </div>
                <div class="text">
                    <p>A Games Store é uma loja especializada na venda de jogos digitais, focada em oferecer praticidade, segurança e uma ótima experiência para os jogadores. Atuamos no mercado há anos, trazendo os principais lançamentos e garantindo um serviço rápido e confiável.</p>
                </div>
            </article>
        </section>
        `)
}

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("btn1")) {
        e.preventDefault();
        login();
    }

    if (e.target.classList.contains("btn2")) {
        e.preventDefault();
        registrar();
    }

    if (e.target.classList.contains("btn3")){
        e.preventDefault();
        paginaP();
    }

});
//registrar();
//login();
