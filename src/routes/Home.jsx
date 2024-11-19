import { Link } from "react-router-dom"
import arrow from '../assets/icons/ArrowUpRight.svg'
import envelope from '../assets/icons/EnvelopeSimple.svg'
import github from '../assets/icons/GithubLogo.svg'
import instagram from '../assets/icons/InstagramLogo.svg'
import linkedin from '../assets/icons/LinkedinLogo.svg'
import whats from '../assets/icons/whatsapp-logo.svg'
import brasfal from '../assets/images/brasfal.png'
import compass from '../assets/images/compassVideo.png'
import forever from '../assets/images/ForeverHomes.png'
import furniro from '../assets/images/furniro.png'
import guilherme from '../assets/GuilhermeRibeiro.png'


const Home = () => {
  return (
<div>
    <div className="flex flex-col xl:flex-row items-center justify-center gap-6 bg-[url('/src/assets/Background_Intro.svg')] bg-cover py-16 px-4">
        <div className="flex flex-col gap-8 w-full max-w-[680px] p-2">
            <h1 className="font-inconsolata text-gray500 text-center text-lg sm:text-xl md:text-2xl">
                Hello World! Meu nome é <span className="text-red">Guilherme Ribeiro</span> e sou
            </h1>
            <h2 className="font-asap text-gray600 font-bold text-center text-2xl sm:text-3xl md:text-4xl">
                Desenvolvedor Front-End
            </h2>
            <p className="text-gray400 font-maven text-center text-xs sm:text-sm md:text-base">
                Transformo necessidades em aplicações reais, envolventes e funcionais. Desenvolvo páginas Web através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
            </p>
        </div>
        <div className="flex justify-center w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] xl:max-w-[350px]">
            <img className="rounded-[30px] w-full" src={guilherme} alt="Guilherme Ribeiro" />
        </div>
    </div>

    <section id="jobs" className="bg-gray200 pb-20">
        <div className="text-center pb-14 p-2">
            <h2 className="text-red font-inconsolata text-subtitle mb-2">Meu trabalho</h2>
            <p className="text-gray100 font-asap text-title-md font-bold">Veja os projetos em destaque</p>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto px-2 lg:grid xl:grid-cols-2 gap-6 xl:w-[1040px] h-auto ">
            <div className="w-[300px] md:w-[508px] md:h-[180px] bg-gray300 p-3 rounded-lg md:flex md:justify-between">
                <div>
                        <Link to='https://guiribeiro52.github.io/Furniro/'><img src={furniro} alt="Furniro" className="rounded-lg md:w-[224px] h-[156px] object-cover" /></Link>
                </div>
                <div className="flex flex-col gap-3 md:w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Furniro</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Página que simula um e-commerce de móveis, com páginas Shop, Cart, Checkout e Login.</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-between md:justify-evenly">   
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/GuiRibeiro52/Furniro'>GitHub</Link></p>                     
                        <p className="bg-purple px-[12px] py-[4px] rounded-full">React</p>
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                    </div>
                </div>
            </div>            
            <div className="w-[300px] md:w-[508px] md:h-[180px] bg-gray300 p-3 rounded-lg md:flex md:justify-between">
                <div>
                    <img src={compass} alt="Compass Video" className="rounded-lg md:w-[224px] h-[156px] object-cover" />
                </div>
                <div className="flex flex-col gap-3 md:w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Compass Video</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Um Streaming com os melhores filmes, séries, programas de TV da atualidade.</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-between md:justify-evenly">
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/Denilson-B-Sousa/compass-video-frontend'>GitHub</Link></p>                        
                        <p className="bg-purple px-[12px] py-[4px] rounded-full">React</p>
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                    </div>
                </div>
            </div>            
            <div className="w-[300px] md:w-[508px] md:h-[180px] bg-gray300 p-3 rounded-lg md:flex md:justify-between">
                <div>
                    <img src={forever} alt="forever homes" className="rounded-lg md:w-[224px] h-[156px] object-cover" />
                </div>
                <div className="flex flex-col gap-3 md:w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Forever Homes</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Que tal ajudar uma ONG que trabalha resgatando animais?</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-between md:justify-evenly">
                        <p className="bg-green px-[12px] py-[4px] rounded-full"><Link to='https://github.com/GuiRibeiro52/Forever-Homes'>GitHub</Link></p>                        
                        <p className="bg-blue px-[12px] py-[4px] rounded-full">HTML</p>
                        <p className="bg-red px-[12px] py-[4px] rounded-full">CSS</p>                        
                        <p className="bg-yellow px-[12px] py-[4px] rounded-full">JavaScript</p>
                    </div>
                </div>
            </div>            
            <div className="w-[300px] md:w-[508px] md:h-[180px] bg-gray300 p-3 rounded-lg md:flex md:justify-between">
                <div>
                    <Link to='https://brasfal.com.br'><img src={brasfal} alt="brasfal" className="rounded-lg md:w-[224px] h-[156px] object-cover"/></Link>
                </div>
                <div className="flex flex-col gap-3 md:w-[244px] mt-1 justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-gray100 text-title-sm font-asap font-bold">Brasfal</h3>
                        <p className="text-text-sm text-gray500 text-left font-maven">Uma perfeita Landing Page, com catálogo para seus produtos</p>
                    </div>                
                    <div className="flex text-gray100 font-bold font-inconsolata text-tag-sm justify-between md:justify-evenly">
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
            <div className="flex flex-col items-center gap-2 text-center p-2">
                <h2 className="text-purple text-subtitle font-inconsolata">Contato</h2>
                <h3 className="text-gray600 text-title-md font-asap font-bold">Gostou do meu trabalho?</h3>
                <p className="text-gray500 text-text-md font-maven">Entre em contato ou acompanhe as minhas redes sociais!</p>
            </div>
            <div className="flex flex-col gap-6 sm:w-[400px] mx-auto">
                <Link to='https://api.whatsapp.com/send?phone=5516994664262'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[300px] sm:w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src={whats} alt="WhatsApp"/>
                            <p className="text-gray500 font-maven text-base">WhatsApp</p>
                        </div>
                        <div>
                            <img src={arrow} alt="arrow up" />
                        </div>
                    </div>
                </Link>
                <Link to='https://www.linkedin.com/in/guilherme-ribeiro52/'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[300px] sm:w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src={linkedin} alt="Linkedin"/>
                            <p className="text-gray500 font-maven text-base">Linkedin</p>
                        </div>
                        <div>
                            <img src={arrow} alt="arrow up" />
                        </div>
                    </div>
                </Link>
                <Link to='https://www.instagram.com/guilhermeribeiroo/'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[300px] sm:w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src={instagram} alt="Instagram"/>
                            <p className="text-gray500 font-maven text-base">Instagram</p>
                        </div>
                        <div>
                            <img src={arrow} alt="arrow up" />
                        </div>
                    </div>
                </Link>       
                <Link to='https://github.com/GuiRibeiro52'>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[300px] sm:w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src={github} alt="GitHub"/>
                            <p className="text-gray500 font-maven text-base">GitHub</p>
                        </div>
                        <div>
                            <img src={arrow} alt="arrow up" />
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex items-center justify-between p-5 bg-gray300 rounded-lg w-[300px] sm:w-[400px] h-[68px] mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <img src={envelope} alt="Email"/>
                            <p className="text-gray500 font-maven text-base">Email</p>
                        </div>
                        <div>
                            <img src={arrow} alt="arrow up" />
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
