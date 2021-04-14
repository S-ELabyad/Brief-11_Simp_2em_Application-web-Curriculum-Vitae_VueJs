<template>
    <div class="chose">
            <b-form-tags class="input" placeholder="Enter Votre Centre d’intérêts" input-id="tags-basic" v-model="Loisirs"></b-form-tags>
                  <button  class="primary" @click.prevent="submitSkills">click event</button>
          
        
    </div>
</template>

<script>
export default {

  name: "Loisirs",
  data() {
    return {
      Loisirs: [],
    };
  },
  methods: {
    submitSkills: function () {
      this.$store.dispatch("setLoisirs", this.Loisirs);
      this.$router.push({ path: "About" });
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
