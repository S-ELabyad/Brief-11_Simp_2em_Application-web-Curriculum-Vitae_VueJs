<template>
  <div class="CV">
            <div class="container">
                <div class="personnelInfo">
                  <h1>{{ fullName }}</h1>
                </div>


                <div class="experience">
                    <h3>Formation</h3>
                    <div class="line"></div>

                    <div v-for="(formation, index) in Formation" :key="index">
                        <div class="contents">
                          <h4>{{ formation.Formation }}</h4>
                          <h5><span>{{formation.Date}}</span></h5>
                        </div>
                      <br />
                    </div>
                </div>

                <div class="experience">
                      <h3>Competence</h3>
                      <div class="line"></div>
                      <ul class="skills" >
                        <li v-for="(competence, index) in Competence" :key="index">
                          {{ index + 1 }} - {{ Competence }}
                        </li>
                      </ul>
                </div>

              <div class="experience">
                <h3>EXPERIENCE</h3>
                <div class="line"></div>
                  <div v-for="(experience, index) in Experience" :key="index">
                        <div class="contents">
                          <h4>{{ experience.Experience}}</h4>
                          <h5><span> {{ experience.Date}} </span></h5>
                        </div>
                    <br />
                  </div>
                <br />
              </div>

                            <div class="experience">
                                <h3>Langue</h3>
                                <div class="line"></div>
                                <ul class="skills" >
                                  <li v-for="(langue, index) in Langue" :key="index">
                                    {{ index + 1 }} - {{ Langue }}
                                  </li>
                                </ul>
                          </div>
           

                           <div class="experience">
                                <h3>Loisirs</h3>
                                <div class="line"></div>
                                <ul class="skills" >
                                  <li v-for="(loisirs, index) in Loisirs" :key="index">
                                    {{ index + 1 }} - {{ Loisirs }}
                                  </li>
                                </ul>
                          </div>



              <button
                type="button"
                class="btn btn-warning btn-lg btn-block mt-5 redirectBtn"
                @click="goToDownload">
                Go to download page
              </button>
        </div>
  </div>
</template>

<script>
export default {
  name: "Cvprev",
  data() {
    return {
      fullName: this.$store.state.fullName,

      Formation: this.$store.state.FormationList[0],

      Competence: this.$store.state.CompetenceList[0],

      Experience: this.$store.state.ExperienceList[0],

      Langue: this.$store.state.LangueList[0],

       Loisirs: this.$store.state.LoisirsList[0],
    };
  },
  methods: {
    goToDownload: function () {
      this.$router.push({ path: "Download" });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

$primary_font: "Lato", sans-serif;
$primary_color: #50d90f;
.CV {
  font-family: $primary_font;
  .personnelInfo {
    padding: 2% 8%;
    background: linear-gradient(
90deg
, #50d9 0%, #020024 100%);
    h2,
    h1 {
      color: white;
    }
    h2,
    h1 {
      font-weight: bold;
    }
    h2 {
      font-size: 25px;
    }
    h1 {
      font-size: 60px;
    }
    .info {
      display: flex;
      justify-content: space-between;
      p {
        color: white;
        font-size: 20px;
        svg {
          margin-right: 15px;
        }
      }
    }
    .aboutMe {
      color: white;
    }
  }
  .experience {
    background-color: #f9f9f9;
    padding: 2% 8%;
    h3 {
      font-weight: bold;
      color: bleu;
      font-size: 40px;
    }
    .line {
      &::after {
        border-radius: 0;
        height: 2px;
        background: linear-gradient(
          90deg,
          rgba(80, 217, 15, 1) 0%,
          rgba(2, 0, 36, 1) 100%
        );
      }
    }
    .contents {
      h4 {
        color: $primary_color;
        font-weight: bold;
      }
      h5 {
        color: $primary_color;
        font-weight: bold;
        span {
          color: $primary_color;
          font-weight: 300;
        }
      }
      p {
        color: black;
        font-weight: bold;
      }
    }
    .skills {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        list-style: none;
        font-weight: bold;
        font-size: 25px;
      }
    }
  }
}
</style>
