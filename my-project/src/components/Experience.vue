<template>
  <div>
    <div class="chose" v-for="(Experiences, index) in ExperienceList" :key="index">
         <input type="Date" class="input"  v-model="Experiences.Date"   />
          <input type="text" class="input"  placeholder="Enter Votre Experience" v-model="Experiences.Experience" />
           <button type="button" class="primary" @click="addExperience" >
           Ajouté nouveau </button>
          <button  class="primary" @click.prevent="submitPersonalInfo">click event</button>
          
        
  </div>
    </div>
</template>

<script>
export default {
  name: "Experience",
 data() {
    return {
        ExperienceList: [
        {
          Date: "",
          Experience: "",
        },
      ],
    };
  },
  computed: {
    Experience : {
      get() {
        return this.$store.state.Experience;
      },
       set(value) {
        this.$store.commit("setExperience", value);
      },
    }
  },
  methods: {
        addExperience: function () {
      this.ExperienceList.push({
          Date: "",
          Experience: "",
      });
    },
      submitPersonalInfo: function () {
       this.$store.dispatch("setExperience", this.ExperienceList);
      this.$router.push({ path: "Langue" });
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 30px 0 0;
}
.msg {
color: green;
    font-size: medium;
    text-align: center;

}
.input{
    width: 25%;
    height: 3rem;
    text-align: center;
    margin-top: 2rem;
}
.chose {
      display: grid;
    padding: 2rem;
    justify-items: center;
}
.primary {
      background-color: green;
    color: white;
    margin-top: 2rem;
    width: 8rem;
    height: 2rem;
    border-radius: 2.5rem;
}

</style>
