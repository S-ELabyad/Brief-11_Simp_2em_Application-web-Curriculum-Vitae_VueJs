<template>
    <div class="chose">
          
          <input type="text" class="input"  placeholder="Enter Votre Nom Complet" v-model="fullName" />
          <button  class="primary" @click.prevent="submitPersonalInfo">click event</button>
          
    </div>
</template>

<script>
export default {
  name: "fullName",
  data() {
    return {
      
    };
  },
  computed: {
    fullName : {
      get() {
        return this.$store.state.fullName;
      },
       set(value) {
        this.$store.commit("setFullName", value);
      },
    }
  },
  methods: {
      submitPersonalInfo: function () {
      this.$router.push({ path: "Formation" });
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
