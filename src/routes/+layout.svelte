<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
	  import Footer from "$lib/components/Footer.svelte";
     
</script>
<main class="h-screen">
  <div><Header /></div>
  <div class="md:w-[80%]  border flex flex-col items-center justify-center mx-auto">
    <slot />
  </div>
  <div><Footer/></div>
</main>  
