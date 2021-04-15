import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullName: "",
    Formation: "",
    Competence: "",
    FormationList: [],
    Experience: "",
    ExperienceList:  [],
    CompetenceList: [],
    Langue: "",
    LangueList: [],
    Loisirs: "",
    LoisirsList : [],
    about: "",
    Cvprev:"",
    // Download: "",

  },
  mutations: {
    setFullName(state, value) {
      state.fullName = value;
    },
   
    setFormation(state, value) {
      // state.setFormation = value;
      state.FormationList.push(value);
    },
    setCompetence(state, value) {
      // state.setCompetence = value;
      state.CompetenceList.push(value);
    },
    setExperience(state, value) {
      // state.setExperience = value;
      state.ExperienceList.push(value);
    },
    setLangue(state, value) {
      // state.setLangue = value;
      state.LangueList.push(value);
    
    },
    setLoisirs(state, value) {
      // state.setLoisirs = value;
      state.LoisirsList.push(value);
      
    },
    setAbout(state, value) {
      state.about = value;
    },
  },
  
  actions: {
    setExperience(vuexContext, ExperienceData) {
      vuexContext.commit("setExperience", ExperienceData);
    },

    setFormation(vuexContext, FormationData) {
      vuexContext.commit("setFormation", FormationData);
    },

    setCompetence(vuexContext, CompetenceData) {
      vuexContext.commit("setCompetence", CompetenceData);
    },

    setLangue(vuexContext, LangueData) {
      vuexContext.commit("setLangue",LangueData);
    },

    setLoisirs(vuexContext, LoisirsData) {
      vuexContext.commit("setLoisirs",LoisirsData);
    },
  },
  modules: {},
});
