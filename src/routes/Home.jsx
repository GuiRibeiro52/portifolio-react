import { Link } from "react-router-dom"


const Home = () => {
  return (
<div>
    <div className="flex items-center justify-center gap-16 bg-[url('/src/assets/Background_Intro.svg')] bg-cover bg-center min-h-screen py-32">
        <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center w-full max-w-[680px] gap-4">
                <h1 className="font-inconsolata text-subtitle text-gray500 text-center">
                    Hello World! Meu nome é <span className="text-red">Guilherme Ribeiro</span> e sou
                </h1>
                <h2 className="font-asap text-gray600 text-title-lg font-bold text-center">
                    Desenvolvedor Front-End
                </h2>
                <p className="text-gray400 font-maven text-sm text-center">
                    Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo páginas Web através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
                </p>
            </div>  
            <div className="text-gray200 font-inconsolata text-tag-md font-bold flex gap-4 flex-wrap justify-center">
                <p className="bg-green px-[12px] py-[4px] rounded-full">GitHub</p>
                <p className="bg-purple px-[12px] py-[4px] rounded-full">React</p>
                <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>
                <p className="bg-yellow px-[12px] py-[4px] rounded-full">JavaScript</p>
            </div>          
        </div>
        <div>
            <img className="w-[350px] rounded-[30px]" src="/src/assets/GuilhermeRibeiro.png" alt="Guilherme Ribeiro" />
        </div>
    </div>
    <section id="jobs" className="bg-gray200 pb-20">
        <div className="text-center pb-14">
            <h2 className="text-red font-inconsolata text-subtitle mb-2">Meu trabalho</h2>
            <p className="text-gray100 font-asap text-title-md font-bold">Veja os projetos em destaque</p>
        </div>
        <div className="grid grid-cols-2 gap-6 w-[1040px] h-[384px] justify-center mx-auto">
            <div className="w-[508px] h-[180px] bg-gray300 p-3 gap-4 rounded-lg flex justify-between">
                <div>
                    <Link to='https://guiribeiro52.github.io/Furniro/'><img src="/src/assets/images/furniro.png" alt="Furniro" className="rounded-lg w-[224px] h-[156px] object-cover" /></Link>
                </div>
                <div className="flex flex-col w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Furniro</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Página que simula um e-commerce de móveis, com páginas Shop, Cart, Checkout e Login.</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-evenly">   
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/GuiRibeiro52/Furniro'>GitHub</Link></p>                     
                        <p className="bg-purple px-[12px] py-[4px] rounded-full">React</p>
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                    </div>
                </div>
            </div>            
            <div className="w-[508px] h-[180px] bg-gray300 p-3 gap-4 rounded-lg flex justify-between">
                <div>
                    <img src="/src/assets/images/compassVideo.png" alt="Compass Video" className="rounded-lg w-[224px] h-[156px] object-cover" />
                </div>
                <div className="flex flex-col w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Compass Video</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Um Streaming com os melhores filmes, séries, programas de TV da atualidade.</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-evenly">
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/Denilson-B-Sousa/compass-video-frontend'>GitHub</Link></p>                        
                        <p className="bg-purple px-[12px] py-[4px] rounded-full">React</p>
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                    </div>
                </div>
            </div>            
            <div className="w-[508px] h-[180px] bg-gray300 p-3 gap-4 rounded-lg flex justify-between">
                <div>
                    <img src="/src/assets/images/ForeverHomes.png" alt="forever homes" className="rounded-lg w-[224px] h-[156px] object-cover" />
                </div>
                <div className="flex flex-col w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Forever Homes</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Que tal ajudar uma ONG que trabalha resgatando animais?</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-between">
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/GuiRibeiro52/Forever-Homes'>GitHub</Link></p>                        
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                        <p className="bg-yellow px-[12px] py-[4px] rounded-full">JavaScript</p>
                    </div>
                </div>
            </div>            
            <div className="w-[508px] h-[180px] bg-gray300 p-3 gap-4 rounded-lg flex justify-between">
                <div>
                    <Link to='https://guiribeiro52.github.io/Brasfal/'><img src="/src/assets/images/brasfal.png" alt="brasfal" className="rounded-lg w-[224px] h-[156px] object-cover cursor-pointer"/></Link>
                </div>
                <div className="flex flex-col w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Brasfal</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Uma perfeita Landing Page, com catálogo para seus produtos</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-evenly">
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/GuiRibeiro52/Brasfal'>GitHub</Link></p>                        
                        <p className="bg-purple px-[12px] py-[4px] rounded-full">React</p>
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                    </div>
                </div>
            </div>            
        </div>
    </section>
    <section id="contact" className="bg-[url('/src/assets/Background_Contacts.svg')] bg-cover bg-center min-h-screen py-32">
        <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-purple text-subtitle font-inconsolata">Contato</h2>
                <h3 className="text-gray600 text-title-md font-asap font-bold">Gostou do meu trabalho?</h3>
                <p className="text-gray500 text-text-md font-maven">Entre em contato ou acompanhe as minhas redes sociais!</p>
            </div>
            <div className="flex flex-col gap-6 w-[400px] mx-auto">
                <Link to='https://api.whatsapp.com/send?phone=5516994664262'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[400px] h-[68px]">
                        <div className="flex items-center justify-center gap-3">
                            <img src="/src/assets/icons/whatsapp-logo.svg" alt="WhatsApp"/>
                            <p className="text-gray500 font-maven text-base">WhatsApp</p>
                        </div>
                        <div>
                            <img src="/src/assets/icons/ArrowUpRight.svg" alt="arrow up" />
                        </div>
                    </div>
                </Link>
                <Link to='https://www.linkedin.com/in/guilherme-ribeiro52/'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src="/src/assets/icons/LinkedinLogo.svg" alt="Linkedin"/>
                            <p className="text-gray500 font-maven text-base">Linkedin</p>
                        </div>
                        <div>
                            <img src="/src/assets/icons/ArrowUpRight.svg" alt="arrow up" />
                        </div>
                    </div>
                </Link>
                <Link to='https://www.instagram.com/guilhermeribeiroo/'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src="/src/assets/icons/InstagramLogo.svg" alt="Instagram"/>
                            <p className="text-gray500 font-maven text-base">Instagram</p>
                        </div>
                        <div>
                            <img src="/src/assets/icons/ArrowUpRight.svg" alt="arrow up" />
                        </div>
                    </div>
                </Link>       
                <Link to='https://github.com/GuiRibeiro52'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src="/src/assets/icons/GithubLogo.svg" alt="GitHub"/>
                            <p className="text-gray500 font-maven text-base">GitHub</p>
                        </div>
                        <div>
                            <img src="/src/assets/icons/ArrowUpRight.svg" alt="arrow up" />
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src="/src/assets/icons/EnvelopeSimple.svg" alt="Email"/>
                            <p className="text-gray500 font-maven text-base">Email</p>
                        </div>
                        <div>
                            <img src="/src/assets/icons/ArrowUpRight.svg" alt="arrow up" />
                        </div>
                    </div>
                </Link>                
            </div>
        </div>
    </section>
</div>

  )
}

export default Home
