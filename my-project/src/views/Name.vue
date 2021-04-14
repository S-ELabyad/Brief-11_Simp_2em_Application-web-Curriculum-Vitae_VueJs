<template >
    <div class="chose">
     
          
          <fullName />
          <Formation/>
          <Competence />
          <Experience />
          <Langue  />
          <Loisirs />
          <About />
          <Cvprev />
         
    </div>
</template>


<script>
import fullName from "@/components/fullName.vue";

import Formation from "@/components/Formation.vue";
import Competence from "@/components/Competence.vue";
import Experience from "@/components/Experience.vue";
import Langue from "@/components/Langue.vue";
import Loisirs from "@/components/Loisirs.vue";
import About from "@/components/About.vue";
import Cvprev from "@/components/CvPrev.vue";
// import Download from "../components/Download.vue";



export default {
  name: "Name",
  components: {
    fullName,
    Formation,
    Competence, 
    Experience,
    Langue,
    Loisirs,
    About,
    Cvprev,
    // Download,
    
  },
  
  
  
};
</script>

