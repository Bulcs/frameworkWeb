<template>
  <div class="votingCard">
    <div v-if="observableState === 'open'">
      <h3>{{ title }}</h3>
      <Buttons :options="getOptions" @onVote="vote"></Buttons>
    </div>
    <div v-else>
      <h3>{{ title }}</h3>
      <Result :votes="votes"></Result>
    </div>
  </div>
</template>

<script>
import Buttons from "./Buttons";
import Result from "./Result";

export default {
  components: { Buttons, Result },
  props: ["title", "state", "votes"],
  data() {
    return {
      options: [],
      observableState: this.state
    };
  },
  methods: {
    vote(index) {
      this.observableState = "close";
      this.votes[index].count++;
    }
  },
  computed: {
    getOptions() {
      for (var i = 0; i < this.votes.length; i++) {
        this.options[i] = this.votes[i].option;
      }
      return this.options;
    }
  }
};
</script>
