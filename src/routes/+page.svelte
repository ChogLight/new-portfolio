<script>
    import Typewriter from 'svelte-typewriter/Typewriter.svelte'
    let y
    let showNav = false
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
            <a class="hover:text-slate-600 duration-300" href="#about-me" on:click|preventDefault={scrollIntoView}>My experience</a>
            <a class="hover:text-slate-600 duration-300" href="#about-me" on:click|preventDefault={scrollIntoView}>Contact me</a>
        </div>
        <div class="flex gap-5">
            <a class="text-3xl" href="https://www.linkedin.com/in/jsgalvis/" target="_blank" ><i class="fa-brands fa-linkedin"></i></a>
            <a class="text-3xl" href="https://github.com/ChogLight" target="_blank" ><i class="fa-brands fa-github"></i></a>
        </div>
    </nav>
    <!--Mobile navBar-->
    <nav class={`md:hidden text-2xl text-white duration-200 sticky top-0 flex flex-col justify-between px-5 py-5 ${y>95?'bg-black bg-opacity-10 text-white':''}`}>
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
            <a class={` hover:text-slate-600 ${showNav?'opacity-100 duration-[1000ms]':'opacity-0'}`} href="#about-me" on:click|preventDefault={scrollIntoView}>My experience</a>
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
                    <img class="md:rounded-3xl rounded-lg mb-5" src="/poketeam.png" alt="poketeam"/>
                </div>
                <div class="flex gap-3 text-white md:text-lg text-sm font-semibold">
                    <i class="fa-brands fa-css3-alt"></i>

                </div>
                <div class="flex gap-20 mt-5 text-sm md:text-lg">
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
                <img class="md:rounded-3xl rounded-lg mb-5" src="/expenses-control.png" alt="poketeam"/>
                <p class="text-white md:text-lg text-sm font-semibold">React/Vanilla CSS</p>
                
                <div class="text-sm md:text-lg flex gap-20 mt-5">
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
                <img class="md:rounded-3xl rounded-lg mb-5" src="/pfc-onenet.png" alt="pfcone"/>
                <p class="text-white md:text-lg text-sm font-semibold">Express.js/EJS/Bootstrap</p>
            
            </div>
            
    
        </div>
        <div class="my-20">
            <h1 class="md:text-6xl text-4xl font-bold text-white mb-10">My experience</h1>
            <p>
    
            </p>
        </div>
    </div>
    
</div>

<svelte:window bind:scrollY={y}/>


