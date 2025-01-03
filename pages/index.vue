

<template>

<div class="main__container">
    <NavBar/>
    <!-- <SearchByFilter class="hidden sm:block"/> -->
     <HeroSectionPage/>
     <!-- <SlideComp/> -->
    <!-- <HeroPage/> -->
    <ShowCase/>
    <SearchBar class="hidden sm:block"/>
   
    <HousesComp/>
    <!-- <LoveUs/> -->
    <ShowCase/>
      <HeroPage/>
    <ToastReg/>
    <BadToastReg/>
    </div>


</template>


<script>
import { isAuthenticated } from "../middlewares/AuthStatus";
import { useRouter } from "#app";
import { onMounted } from "vue";
import { GetCsrfToken } from "../middlewares/GetCsrf";
import SlideComp from "~/components/SlideComp.vue";

export default {
  setup() {
    const router = useRouter();

   onMounted(async () => {
      try {
        const authenticated = await isAuthenticated();
         const GenerateCsrf = await GetCsrfToken();

        if (authenticated) {
          router.push('/Dashboard');
        }
        if (GenerateCsrf) {
        console.log("Csrf generated")
      }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    });
  },
};
</script>
