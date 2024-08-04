<script>
  import Card from '../layouts/Card.svelte'
  import Carousel  from 'svelte-carousel';
  import { browser } from '$app/environment';
  export let data;
  let socials = [{icon: 'fa-youtube', link:'https://youtube.com/@mulhamalamry'}, {icon: 'fa-x-twitter', link: 'https://x.com/@alamrymulham'}, {icon: 'fa-linkedin', link: 'https://www.linkedin.com/in/mulham-alamry-b14a46270/'}]
  
  let skills = [{name: 'Python', class: 'emoji python'}, {name: 'HTML', class: 'globe'}, {name: 'S/CSS', class: 'design'}, {name: 'Animation', class: 'animation'}, {name: 'Javascript', class: 'hearts'}, {name: 'SvelteKit', class: 'dynamite'}, {name: 'Django', class: 'django'}, {name: 'React', class: 'react'}, {name: 'UI/UX Design', class: 'design'}, {name: 'SaaS', class: 'saas'}, {name: 'GIT', class: 'git'}, {name: 'API', class: 'api'}, {name: 'CMS', class: 'cms'}, {name: 'Wordpress', class: 'cms'}, {name: 'Lazy Loading', class: 'lazyload'}, {name: 'Performance Optimizations', class: 'performance'}, {name: 'Mobile Optimizations', class: 'mobile'}]
</script>
<link rel="stylesheet" href="/styles/emojis.css">
<div class="portfolio snap-mandatory snap-y h-screen overflow-y-scroll">
<div class="navbar bg-base-100 sticky top-0 z-50 flex h-16 w-full justify-center bg-opacity-70 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm p-0 border-b-base-300 border-b-[1px]">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>         
          </svg>
        </label>
        <ul tabindex="0" class="menu dropdown-content mt-3 shadow bg-base-100 text-lg rounded-box w-[100vw]">
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </div>
      <a href="/" aria-label="Home" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
        <img class="w-8 md:w-10 rounded-full" src="/images/internal/me.jpeg">
        <span class="font-title text-base-content text-lg md:text-2xl">Mulham Alamry</span>
      </a>    
    </div>
    <div class="navbar-end">
        <ul class="menu menu-horizontal p-0 hidden gap-10 lg:flex">
            <li>
                <a href="/" tabindex="0"><i class="fa-solid fa-home text-2xl" title="home"></i></a>
              </li>
              <li>
                <a href="/#about" tabindex="0"><i class="fa-solid fa-info text-2xl" title="about"></i></a>
            </li>
              <li>
                <a href="/blog" tabindex="0"><i class="fa-solid fa-book text-2xl" title="blog"></i></a>
              </li>
              <li>
                <a href="/projects" tabindex="0"><i class="fa-solid fa-computer text-2xl" title="projects"></i></a>
            </li>
          </ul>
    </div>
  </div>
  <div class="relative min-h-screen snap-center flex items-center justify-center">
    <div class="hidden w-18 absolute top-1/2 left-0 transform -translate-y-1/2 border-2 border-black md:block lg:block">
      {#each socials as social}
        <a href={social.link} class="block w-16 p-4 transition duration-300 hover:bg-black hover:bg-opacity-10">
          <i class="text-3xl fa-brands fa-beat {social.icon}"></i>
        </a>
      {/each}
    </div>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">HEY, IT'S MULHAM ALAMRY</h1>
        <p class="py-6">
          I bring dynamic expertise in crafting innovative digital solutions.
          Explore my website to discover a showcase of cutting-edge projects,
          insightful blog posts, and a glimpse into my passion for coding
          excellence.
        </p>
        <a class="btn mt-3" href="/#blog">BLOG</a><br>
        <a class="btn mt-3" href="/#projects">PROJECTS</a>
      </div>
    </div>
  </div>  
    <div class="divider"></div>
    <div class="min-h-screen snap-center flex items-center justify-center" id="about">
        <div class="main-container">
          <h2 class="text-center mb-9">
            <span class="block text-4xl uppercase tracking-wide font-bold">About Me</span>
            <span class="block text-lg text-gray-500">Here's a glimpse ✨ of my autobiography</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-20 ml-8">
            <div>
              <h3 class="text-2xl font-bold mb-6">Get to know me!</h3>
              <div class="text-gray-500">
                <p class="mb-4">
                  Hey! It's
                  <strong>Mulham Alamry</strong>. I'm a
                  <strong>Fullstack Developer</strong> located in Makkah, Saudi Arabia. I've done
                  <strong>remote</strong> projects for agencies, consulted for startups, and collaborated
                  with talented people to create
                  <strong>digital products</strong> for both business and consumer use.
                </p>
                <p class="mb-16">
                  I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Feel free to <strong>contact</strong> me here.
                </p>
              </div>
            </div>
            <div class="hidden md:block lg:block">
              <h3 class="text-2xl font-bold mb-6">My Skills ⌨️</h3>
              <div class="flex flex-wrap">
                {#each skills as skill}
                  <div class="bg-base-300 p-4 m-2 rounded-lg font-semibold">{skill.name} <span class='emoji {skill.class}'></span></div>
                {/each}
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="divider"></div>
    <div class="hidden min-h-screen snap-center items-center justify-center md:flex lg:flex" id="blog">
      <h2 class="text-center mb-9">
      <span class="block text-4xl uppercase tracking-wide font-bold">Blog Updates</span>
      <span class="block text-lg text-gray-500">Latest blog posts</span>
      {#if browser}
      <div class="carousel carousel-center p-0 m-0 space-x-4 bg-base-100 rounded-box w-[99vw] bg-transparent">
        <Carousel autoplay={true} particlesToShow={data.projects.length} duration={1000 * data.projects.length} autoplayDuration={1000} arrows={false} dots={false} timingFunction={'linear'} particlesToScroll={5}>
          {#each data.posts as post}
          <div class="carousel-item">
            <Card name={post.title} imageSrc={post.image} post={post.path.replace('../uploads/pages/', '')}/>
          </div>
          {/each}
          </Carousel>
      </div>
      {/if}
      <button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="/blog">View all posts</a>
      </button>
      </h2>
    </div>
    <div class="divider"></div>
    <div class="hidden min-h-screen snap-center items-center justify-center md:flex lg:flex" id="projects">
      <h2 class="text-center mb-9">
      <span class="block text-4xl uppercase tracking-wide font-bold">Projects 🖥️</span>
      <span class="block text-lg text-gray-500">My top projects 🎩</span>
      {#if browser}
      <div class="carousel carousel-center p-0 m-0 space-x-4 bg-base-100 rounded-box w-[99vw]">
        <Carousel autoplay={true} particlesToShow={data.projects.length} duration={1000 * data.projects.length} autoplayDuration={1000} arrows={false} dots={false} timingFunction={'linear'} particlesToScroll={5}>
        {#each data.projects as project}
        <div class="carousel-item">
          <Card name={project.metadata.project.name} imageSrc={project.metadata.image} username={project.metadata.project.author} post={project.path}/>
        </div>
        {/each}
        </Carousel>
      </div>
      {/if}
      <button class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="/projects">View all projects</a>
      </button>
      </h2>
    </div>
    <footer class="footer footer-center bg-primary text-primary-content p-10 snap-center">
      <aside>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="inline-block fill-current"> <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path> </svg>
        <p class="font-bold">
          0xbytes Ltd.
          <br />
          Providing reliable tech since 2019
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4">
          {#each socials as social}
          <a href={social.link} class="block w-16 p-4 transition duration-300 hover:bg-black hover:bg-opacity-10">
            <i class="text-3xl fa-brands {social.icon}"></i>
          </a>
        {/each}
        </div>
        <a href="mailto:inquiries@0xbytes.dev">Contact me: inquiries@0xbytes.dev</a>
      </nav>
    </footer>
  </div>