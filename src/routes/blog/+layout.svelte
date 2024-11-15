<script>
    import { socials } from "../../info.js";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let menu;

    $: {
        if (menu) {
            Array.from(menu.children).forEach((el) => {
                const link = el.querySelector('a');
                if (link && link.href === $page.url.href) {
                    el.classList.add('highlighted');
                    link.classList.add('selected');
                } else {
                    link.classList.remove('selected');
                    el.addEventListener('mouseover', () => {
                        const selected = document.querySelector('.selected');
                        if (selected) {
                            selected.parentElement.classList.remove('highlighted');
                        }
                    });

                    el.addEventListener('mouseout', () => {
                        const selected = document.querySelector('.selected');
                        if (selected) {
                            selected.parentElement.classList.add('highlighted');
                        }
                    });
                }
            });
        }
    }

    // Initialize onMount only once
    onMount(() => {
        // Trigger the reactive block once when the component mounts
        $page;  // Accessing this will ensure it's available for the $: block
    });
</script>

<div class="drawer md:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content">
        <label for="my-drawer-2" class="btn btn-primary drawer-button md:hidden">
            Menu
        </label>
        <slot></slot>
    </div>
    <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="menu bg-base-200 text-center min-h-full p-0 w-80 flex flex-col items-center">
            <!-- Sidebar content here -->
            <div class="profile mt-12">
                <div class="avatar">
                    <div class="w-26 rounded-full border-gray-400 border-solid border-[1.75px]">
                        <img src="/images/internal/me.jpeg"/>
                    </div>
                </div>
                <a target="_blank" href="/">
                    <p class="text-2xl font-bold text-gray-500">0xbytes</p>
                </a>
                <i class="text-xs">Everything Web</i>
            </div>
            <ul class="w-full flex flex-col items-center mt-8" bind:this={menu}>
                <li class="nav-item p-1 w-full">
                    <a href="/blog" class="nav-link flex justify-center w-full">
                        <span class="text-base">BLOG</span>
                    </a>
                </li>
                <li class="nav-item p-1 w-full">
                    <a href="/blog/categories" class="nav-link flex justify-center w-full">
                        <span class="text-base">CATEGORIES</span>
                    </a>
                </li>
                <li class="nav-item p-1 w-full">
                    <a class="nav-link flex justify-center w-full">
                        <span class="text-base">TAGS</span>
                    </a>
                </li>
                <li class="nav-item p-1 w-full">
                    <a class="nav-link flex justify-center w-full">
                        <span class="text-base">ARCHIVES</span>
                    </a>
                </li>
                <li class="nav-item p-1 w-full">
                    <a href="/#about" class="nav-link flex justify-center w-full">
                        <span class="text-base">ABOUT</span>
                    </a>
                </li>
            </ul>
            <div class="sidebar-bottom mt-auto flex flex-wrap justify-center align-items-center">
                {#each socials as social}
                    <a href={social.link} class="p-6">
                        <i class="text-2xl fa-brands fa-beat {social.icon}"></i>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .nav-item {
        text-align: center;
        font-weight: 500;
        position: relative; /* Required for absolute positioning of any child elements */
        padding-right: 10px; /* Some padding for the border to appear next to the text */
        transition: color 0.3s ease-in-out; /* Animate color on hover */
    }

    .nav-item::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 2px; /* Width of the vertical border */
        height: 0; /* Initially no height */
        background-color: oklch(var(--bc)); /* Border color */
        transition: height 0.3s ease-in-out; /* Animate the height of the border */
    }

    .nav-item:hover::before, .highlighted::before {
        height: 100%; /* Set the height to full height of the element when hovered */
    }

    .highlighted, .nav-item:hover {
        color: oklch(var(--pc)) !important; /* Change text color on hover */
    }

    .nav-link {
        background: inherit;
        text-decoration: none;
    }

    .selected {
        color: oklch(var(--pc));
    }
</style>