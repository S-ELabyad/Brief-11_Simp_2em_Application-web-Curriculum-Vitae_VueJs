<template>
  <div>
    <form class="container">
      
      <button class="btn btn-warning" @click.prevent="submitAboutMe">
        VIEW YOUR CV
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "About",
    };
  },
  computed: {
    About: {
      get() {
        return this.$store.state.About;
      },
      set(value) {
        this.$store.commit("setAbout", value);
      },
    },
  },
  methods: {
    submitAboutMe: function () {
      this.$router.push({ path: "Cvprev" });
    },
  },
};
</script>

<style></style>
