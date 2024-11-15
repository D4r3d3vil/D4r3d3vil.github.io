<script>
      import "@fortawesome/fontawesome-free/css/all.min.css";
      import '../app.css';
      import {page} from '$app/stores'
      import { onMount } from 'svelte'
      import {initTheme, toggleTheme} from "../theme.js";
      $: hideMenu = $page.data?.hideMenu;

      let themeIcon;
      onMount(()=>{
          if (hideMenu) return
          initTheme(themeIcon)
      })

</script>
<div class="portfolio snap-mandatory snap-y h-screen overflow-y-scroll">
{#if !hideMenu}
<div class="navbar bg-base-100 sticky top-0 z-50 flex h-16 w-full justify-center bg-opacity-70 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm p-0 border-b-base-300 border-b-[1px]">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="1" class="btn btn-ghost lg:hidden">
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
              <li>
                  <i bind:this={themeIcon} on:click={toggleTheme} data-toggle-theme="light,dark"></i>
              </li>
            </ul>
      </div>
    </div>
{/if}
<slot></slot>
</div>