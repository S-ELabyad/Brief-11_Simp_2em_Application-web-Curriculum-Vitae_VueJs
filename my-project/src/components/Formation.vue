<template>
  <div>
      <div class="chose" v-for="(Formations, index) in FormationList" :key="index">
         <input type="Date" class="input" v-model="Formations.Date"  />
          <input type="text" class="input"  placeholder="Enter Votre Formations"  v-model="Formations.Formation" />
           <button type="button" class="primary" @click="addFormation" >
           Ajouté nouveau </button>
           <button  class="primary" @click.prevent="submitPersonalInfo">click event</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Formation",
  data() {
    return {
        FormationList: [
        {
          Date: "",
          Formation: "",
        },
      ],
    };
  },
  computed: {
    Formation : {
      get() {
        return this.$store.state.Formation;
      },
       set(value) {
        this.$store.commit("setFormation", value);
      },
    }
  },
  methods: {
       addFormation: function () {
      this.FormationList.push({
          Date: "",
          Formation: "",
      });
    },
     submitPersonalInfo: function () {
      this.$store.dispatch("setFormation", this.FormationList);
      this.$router.push({ path: "Competence" });
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
