<script>
    import Typewriter from 'svelte-typewriter/Typewriter.svelte'
    import Modal from '../components/Modal.svelte';
    let y
    let showNav = false
    let modular = false
    let content = {
        title: '',
        text: '',
        images:[]
    }
    let pokeTeamContent = {
        title: 'PokeTeam',
        text: '',
        images:[]
    }

    let expensesContent = {
        title: 'Expenses control app',
        text: '',
        images:[]
    }

    let pfcContent = {
        title: 'PFC OneNet',
        text: '',
        images:[]
    }

    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
    
  }
  

</script>
<div class="text-white">
    <!--Desktop NavBar-->
    <nav class={`hidden  text-white duration-200 sticky top-0 md:flex justify-between md:px-10 py-5 ${y>95?'bg-black bg-opacity-10 text-white':''}`}>
        <div class="flex md:gap-12 gap-5 font-semibold md:text-lg text-sm ">
            <a class="hover:text-slate-600 duration-300" href="#about-me" on:click|preventDefault={scrollIntoView}>About me</a>
            <a class="hover:text-slate-600 duration-300" href="#my-projects" on:click|preventDefault={scrollIntoView}>My projects</a>
            <a class="hover:text-slate-600 duration-300" href="#my-experience" on:click|preventDefault={scrollIntoView}>My experience</a>
            <a class="hover:text-slate-600 duration-300" href="#about-me" on:click|preventDefault={scrollIntoView}>Contact me</a>
        </div>
        <div class="flex gap-5">
            <a class="text-3xl" href="https://www.linkedin.com/in/jsgalvis/" target="_blank" ><i class="fa-brands fa-linkedin"></i></a>
            <a class="text-3xl" href="https://github.com/ChogLight" target="_blank" ><i class="fa-brands fa-github"></i></a>
        </div>
    </nav>
    <!--Mobile navBar-->
    <nav class={`md:hidden text-2xl text-white duration-200 sticky top-0 flex flex-col justify-between px-5 py-5 ${y>95?`bg-black bg-opacity-${showNav?'70':'10'} text-white`:''}`}>
        <div class="flex justify-between">
            <button class="text-left mx-3 mb-5" on:click={() => {showNav? showNav = false:showNav = true}}><i class="fa-solid fa-bars"></i></button>
            <div class="flex gap-5">
                <a class="text-3xl" href="https://www.linkedin.com/in/jsgalvis/" target="_blank" ><i class="fa-brands fa-linkedin"></i></a>
                <a class="text-3xl" href="https://github.com/ChogLight" target="_blank" ><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
       
        <div class={`duration-500 md:hidden ${showNav?'flex':'invisible'} flex-col md:gap-12 gap-5 font-semibold md:text-lg text-sm`}>
            <a class={` hover:text-slate-600 ${showNav?'opacity-100 duration-[200ms]':'opacity-0'}`} href="#about-me" on:click|preventDefault={scrollIntoView}>About me</a>
            <a class={` hover:text-slate-600 ${showNav?'opacity-100 duration-[600ms]':'opacity-0'}`} href="#my-projects" on:click|preventDefault={scrollIntoView}>My projects</a>
            <a class={` hover:text-slate-600 ${showNav?'opacity-100 duration-[1000ms]':'opacity-0'}`} href="#my-experience" on:click|preventDefault={scrollIntoView}>My experience</a>
            <a class={` hover:text-slate-600 ${showNav?'opacity-100 duration-[1400ms]':'opacity-0'}`} href="#about-me" on:click|preventDefault={scrollIntoView}>Contact me</a>
        </div>
    </nav>
    <div class="md:mx-40 mx-10">
        <div id="about-me" class="flex flex-col md:flex-row gap-12 md:my-20 text-white">
            <img class="hidden md:block rounded-3xl md:basis-1/2 basis-1/5" src='/profile_pic.jpg' alt="profile_pic" width="50%%"/>
            <div class="md:basis-1/2 basis-4/5 flex flex-col gap-5">
                <h1 class="md:text-6xl text-4xl font-bold">Juan Galvis</h1>
                <img class="md:hidden rounded-3xl md:basis-1/2 basis-1/5" src='/profile_pic.jpg' alt="profile_pic" width="50%%"/>
                <h2 class="md:text-4xl text-2xl font-semibold">Web developer</h2>
                <p class=" text-justify md:text-lg text-sm">
                    I'm a full stack developer gratuated from Centennial College in Toronto Canada.
                    I can assure you that my coding skills, professionalism, team work, and curiosity are great assets to bring to your company.
                    
                    My skill set consists in: 
                </p>
                <Typewriter --cursor-color="#7a117f" --cursor-width="10px" mode="loop" interval="50" unwriteInterval= "50">
                    <h1 class="md:text-6xl text-2xl font-bold">Javascript</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">HTML</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">CSS</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">TailwindCSS</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">React</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">Next.js</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">Express.js</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">Git</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">Svelte</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">Figma</h1>
                    <h1 class="md:text-6xl text-2xl font-bold">Python</h1>
                </Typewriter>
                
            </div>
        </div>
    
    
        <div class="mt-10">
            <h1 id="my-projects" class="md:text-6xl text-4xl font-bold text-white">My projects</h1>
            <p class="mt-10 md:text-lg text-sm text-justify">
                During my time in the world of web development I have had the chance of building interesting web apps.
                From websites made for fun or practicing to commercial independent projects. Here is a small list of the projects I have made 
                and participated in. Click on the images to check a small description of the project.
            </p>
        </div>
        <div class="md:grid grid-cols-2 gap-12 my-10">
            <div>
                <h3 class="text-white md:text-3xl text-xl font-bold my-10">Poketeam</h3>
                <div>
                    <button on:click={() => {
                        content = pokeTeamContent;
                        modular = true;
                    }}>
                        <img class="md:rounded-3xl rounded-lg mb-5" src="/poketeam.png" alt="poketeam"/>
                    </button>
                </div>
                <div class="flex gap-3 text-white md:text-5xl text-4xl font-semibold">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                    <i class="fa-brands fa-square-js"></i>
                    <i class="fa-solid fa-database"></i>

                </div>
                <div class="flex justify-between gap-20 mt-4 text-sm md:text-lg">
                    <a
                        class="duration-300 text-white font-bold text-center bg-cyan-600 p-3 rounded-xl shadow-lg" 
                        href="https://poketeam-chog.netlify.app/"
                        target="_blank">
                            Website
                    </a>
                    <a
                        class="duration-300 text-white font-bold text-center bg-cyan-600 p-3 rounded-xl shadow-lg" 
                        href="https://github.com/ChogLight/poketeam"
                        target="_blank">
                            Github
                    </a>
                </div>
            </div>
            <div>
                <h3 class="text-white md:text-3xl text-xl font-bold my-10">Expenses control</h3>
                <button on:click={() => {
                    content = expensesContent;
                    modular = true;
                }}>
                    <img class="md:rounded-3xl rounded-lg mb-5" src="/expenses-control.png" alt="poketeam"/>
                </button>
                <div class="flex gap-3 text-white md:text-5xl text-4xl font-semibold">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-css3-alt"></i>
                    <i class="fa-brands fa-react"></i>
                </div>
                
                <div class="text-sm md:text-lg flex justify-between mt-5">
                    <a
                        class="duration-300 text-white font-bold text-center bg-cyan-600 p-3 rounded-xl shadow-lg" 
                        href="https://expenses-control-chog.netlify.app/"
                        target="_blank">
                            Website
                    </a>
                    <a
                        class="duration-300 text-white font-bold text-center bg-cyan-600 p-3 rounded-xl shadow-lg" 
                        href="https://github.com/ChogLight/expenses-control"
                        target="_blank">
                            Github
                    </a>
                </div>
            </div>
            <div>
                <h3 class="text-white md:text-3xl text-xl font-bold my-10">PFCOneNet</h3>
                <button on:click={() =>{
                    content = pfcContent;
                    modular = true
                }}>
                    <img class="md:rounded-3xl rounded-lg mb-5" src="/pfc-onenet.png" alt="pfcone"/>
                </button>
                
                <div class="flex gap-3 text-white md:text-5xl text-4xl font-semibold">
                    <i class="fa-brands fa-html5"></i>
                    <i class="fa-brands fa-bootstrap"></i>
                    <i class="fa-brands fa-square-js"></i>
                    <i class="fa-brands fa-node-js"></i>
                </div>
            
            </div>
            
    
        </div>
        <div id="my-experience" class="my-20">
            <h1 class="md:text-6xl text-4xl font-bold text-white mb-10">My experience</h1>
            <div>
                <div class="md:flex justify-between">
                    <h3 class="text-2xl md:text-4xl font-bold">Math, Programming and Chemistry Tutor</h3>
                    <h3 class="mt-5 md:mt-0 text-2xl md:text-4xl font-semibold">April 2021-Present</h3>
                </div>
                <div class="md:flex justify-between mt-5">
                    <h5 class="text-lg md:text-xl italic">Paper tutoring</h5>
                    <h5 class="mt-5 md:mt-0 text-lg md:text-xl italic">Toronto, ON</h5>
                    
                </div>
                <ul class="mt-10 md:text-lg text-sm text-justify list-disc list-inside">
                    <li>Tutored students of multiple ages (K-12) in subjects as programming, chemistry, and math using a chat-based software.</li>
                    <li>Graded other's tutor sessions to assure the quality of the tutoring service.</li>
                    <li>Created a clone of the chat tool and added dark mode.</li>
                </ul>
            </div>
            <div class="mt-20">
                <div class="md:flex justify-between">
                    <h3 class="text-2xl md:text-4xl font-bold">Software engineering technician</h3>
                    <h3 class="mt-5 md:mt-0 text-2xl md:text-4xl font-semibold">January 2022- June 2022</h3>
                </div>
                <div class="md:flex justify-between mt-5">
                    <h5 class="text-lg md:text-xl italic">Centennial College/PFC flexible circuits</h5>
                    <h5 class="md:mt-0 mt-5 text-lg md:text-xl italic">Toronto, ON</h5>
                    
                </div>
                <ul class="mt-10 md:text-lg text-sm text-justify list-disc list-inside">
                    <li>Participated in the building of an intranet for a circuits company.</li>
                    <li>Managed the Github repository and merged the commits when correctly tested.</li>
                    <li>Build UI of the intranet using EJS.</li>
                    <li>Helped in the bulding of the website backend using Express.js resulting in a functional authentication system</li>
                </ul>
            </div>
        </div>
        
    </div>
    <Modal bind:modular = {modular}>
        <h1 class="text-2xl font-bold leading-6 text-gray-900" id="modal-title">{content.title}</h1>
        <div class="mt-2">
            <p class="text-sm text-gray-500">{content.text}</p>
        </div>
    </Modal>
</div>


<svelte:window bind:scrollY={y}/>


