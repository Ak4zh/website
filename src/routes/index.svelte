<script context="module">
  export const prerender = true

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch('/posts.json?limit=2').then((res) => res.json()),
        recentProjects: await fetch('/projects.json?limit=2').then((res) => res.json())
      }
    }
  }
</script>

<script>
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import PostPreview from '$lib/components/PostPreview.svelte'
  import { name } from '$lib/info.js'

  export let recentPosts
  export let recentProjects
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>
<div
  class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center"
>
  <div class="w-full lg:w-2/3">
    <div class="lg:max-w-lg">
      <h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
        Akash
        <span
          class="relative ml-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500"
          ><span class="relative skew-y-3 text-white">@ak4zh</span></span
        >
        Agarwal
      </h1>

      <div class="mt-8 space-y-2">
        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200 text-2xl">
          <span class="mx-2">A self-taught full stack developer</span>
        </p>

        <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200 font-light">
          <span class="mx-2">Learning by doing is the only way I know how to learn.</span>
        </p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center w-full h-96 lg:w-1/3">
    <img
      class="object-cover w-full skew-y-3 h-full mx-auto rounded-full lg:max-w-2xl top-0 dark:bg-slate-800 bg-gray-100"
      src="./ak4zh.png"
      alt="ak4zh"
    />
  </div>
</div>
<div class="flex flex-col flex-grow">

  <!-- recent posts -->
  <h2 class="flex items-baseline gap-4 !mb-2">
    Recent Posts
    <ButtonLink href="/posts" size="small" raised={false} class="opacity-60">View All</ButtonLink>
  </h2>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
    {#each recentPosts as post}
      {@const postType = 'posts'}
      <div class="flex p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
        <PostPreview {post} {postType} small />
      </div>
    {/each}
  </div>

    <!-- projects -->
    <h2 class="flex items-baseline gap-4 !mb-2">
      Projects
      <ButtonLink href="/projects" size="small" raised={false} class="opacity-60">View All</ButtonLink>
    </h2>
    <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {#each recentProjects as post}
      {@const postType = 'projects'}
        <div class="flex p-4 border border-slate-300 dark:border-slate-700 rounded-lg">
          <PostPreview {post} {postType} small />
        </div>
      {/each}
    </div>
</div>
