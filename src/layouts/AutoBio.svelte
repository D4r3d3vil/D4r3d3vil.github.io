<script>
    import { skills } from '../info.js'
</script>
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
              I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Feel free to <a><strong>contact</strong></a> me here.
            </p>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-6">My Skills ⌨️</h3>
          <div class="flex flex-wrap">
            {#each skills as skill}
              <div class="bg-base-300 rounded-lg font-semibold p-2 m-1 text-xs md:p-4 md:m-2 md:text-base">{skill.name} <span class='emoji {skill.class}'></span></div>
            {/each}
          </div>
        </div>
      </div>
    </div>
</div>