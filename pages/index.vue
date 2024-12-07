

<template>

<div class="main__container">
    <NavBar/>
    <!-- <SearchByFilter class="hidden sm:block"/> -->
    <HeroPage/>
    <SearchBar class="hidden sm:block"/>
    <HousesComp/>
    <ToastReg/>
    <BadToastReg/>
    </div>


</template>


<script>
import { isAuthenticated } from "../middlewares/AuthStatus";
import { useRouter } from "#app";
import { onMounted } from "vue";

export default {
  setup() {
    const router = useRouter();

    onMounted(async () => {
      try {
        const authenticated = await isAuthenticated();

        if (authenticated) {
          router.push('/Dashboard');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      }
    });
  }
};
</script>
