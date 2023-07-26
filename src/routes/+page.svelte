
<script>
    import Typewriter from "svelte-typewriter/Typewriter.svelte";
    import { browser } from '$app/environment';
    let darkMode = true
    let languages = ['Javascript', 'HTML', 'CSS', 'TailwindCSS', 'React','Next.js', 'Express', 'Git', 'Svelte', 'Figma', 'Python']
    function handleSwitchDarkMode() {
        darkMode = !darkMode;

        darkMode
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
    }
    if (browser) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>
<div class="text-white w-5/6  m-auto my-10">
   <div class="grid md:grid-cols-4 grid-cols-3 gap-5 bg-transparent">
        <!-- About me -->
        <div class="md:flex gap-2 bg-purple-900 text-white rounded-xl col-span-3">
            <div class="flex flex-col gap-4 my-16 p-5 self-end">
                <h1 class="text-4xl font-bold">👋 Hi! I'm Juan Galvis</h1>
                <p class="text-sm font-semibold text-left">
                    I'm a full stack developer gratuated from Centennial College in Toronto Canada. 
                    I can assure you that my coding skills, professionalism, team work, and curiosity are great assets to bring to your company.
                    My skill set consists in:
                        <Typewriter  --cursor-color="#7a117f" --cursor-width="10px" mode="loop" interval="50" unwriteInterval= "50">
                            {#each languages as language}
                            <h1 class="md:text-6xl text-2xl font-bold">{language}</h1>
                            {/each}
                        </Typewriter>                    
                </p>
            </div>
            <img class="" src="/profile_pic.png" alt="profile_pic"/>
        </div>
        <!-- Language and dark mode -->
        <div class="grid grid-rows-2 gap-5 place-items-stretch">
            <div class=" bg-purple-900 rounded-xl flex items-center justify-center">
                <h1 class="">EN</h1>
            </div>
            <div class=" bg-purple-900 rounded-xl flex flex-col gap-3 items-center justify-center p-2 md:p-0">
                <input
                    class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    bind:checked={darkMode}
                    on:click={handleSwitchDarkMode} />
                    <label
                        class="inline-block pl-[0.15rem] hover:cursor-pointer md:text-lg text-xs font-bold"
                        for="flexSwitchCheckDefault"
                        >
                        Dark Mode
                    </label>
            </div>
            
        </div>
        <!-- Age -->
        <div class=" bg-red-500 rounded-xl flex flex-col gap-3 items-center justify-center px-10 py-16">
            <p class="text-sm">
                AGE
            </p>
            <h1 class="text-6xl font-bold">
                28
            </h1>
            <h4 class="text-xl font-semibold">
                Years old
            </h4>
        </div>
        <!-- LinkedIn link and email(email shows mobile only) -->
        <div class="grid md:grid-rows-1 grid-rows-2 grid-cols-1 gap-5">
            <div class="relative bg-[#0077b5]  rounded-xl flex flex-col gap-3 items-center justify-center px-10 py-16">
                <i class="fa-brands fa-linkedin md:text-7xl text-4xl"></i>
                <a href="https://www.linkedin.com/in/jsgalvis/" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div class="md:hidden bg-emerald-300 rounded-xl flex items-center justify-center relative">
                <i class="fa-solid fa-envelope md:text-7xl text-4xl"></i>
                <a href="mailto:sebas8812@gmail.com" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
        <!-- Projects -->
        <div class="md:col-span-2 bg-[url('/projects.gif')] rounded-xl relative col-span-3">
            <div class="w-full h-full flex flex-col gap-5 p-7 justify-left bg-purple-900/50 backdrop-brightness-75 rounded-xl">
                <h1 class="text-4xl font-bold">Projects</h1>
                <p class="text-lg font-semibold">
                    Check out some of my side projects and experiments such as PokeTeam and the budget calculator!
                </p>
            </div>
            <i class="fa-solid fa-arrow-right absolute top-0 right-0 mr-8 mt-5 text-xl"></i>
        </div>
        <!-- Github -->
        <div class="md:col-span-2 bg-[url('/github.gif')] rounded-xl h-72 relative col-span-3">
            <div class="w-full h-full flex flex-col gap-5 p-7 justify-between bg-black/30 backdrop-brightness-75 rounded-xl">
                <i class="fa-brands fa-github left-0 top-0 text-4xl ml-2 mt-2"></i>
                <div class="flex flex-col gap-3">
                    <h1 class="text-4xl font-bold"> Github</h1>
                    <p class="text-lg">Check out my Github page where all (or almost all) my projects are!</p>
                </div>
                <a href="https://github.com/ChogLight" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
        <!-- Tech stack -->
        <div class="p-5 md:p-0 col-span-3 md:col-span-1 bg-pink-300 rounded-xl flex justify-center items-center">
            <div class="grid grid-cols-4 gap-4 gap-y-4 text-5xl place-content-center">
                <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-python"></i>
                <i class="fa-brands fa-git-alt"></i>
                <i class="devicon-svelte-plain"></i>
                <i class="devicon-nextjs-original"></i>
                <i class="devicon-mongodb-plain-wordmark"></i>
                <i class="devicon-tailwindcss-plain"></i>
                <i class="devicon-express-original"></i>
                <i class="devicon-javascript-plain"></i>
            </div>
        </div>
        <!-- Email -->
        <div class=" md:flex hidden bg-emerald-300 rounded-xl items-center justify-center relative">
            <i class="fa-solid fa-envelope text-7xl"></i>
            <a href="mailto:sebas8812@gmail.com" target="_blank" class="absolute top-0 right-0 m-5"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <div>
            
        </div>
        
   </div>
</div>





