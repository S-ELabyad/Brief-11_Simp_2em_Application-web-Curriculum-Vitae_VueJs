<template>
    <div class="chose">

           <b-form-tags class="input" placeholder="Enter Votre Langue" input-id="tags-basic" v-model="Langue"></b-form-tags>
          <button  class="primary" @click.prevent="submitSkills">click event</button>
        
    </div>
</template>

<script>
export default {
  name: "Langue",
  data() {
    return {
      Langue: [],
    };
  },
  methods: {
    submitSkills: function () {
      this.$store.dispatch("setLangue", this.Langue);
      this.$router.push({ path: "Loisirs" });
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
