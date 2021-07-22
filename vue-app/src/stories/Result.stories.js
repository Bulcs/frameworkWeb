import ResultComponent from "../components/Result.vue";

export default {
  title: "Result",
  component: ResultComponent
};

const Template = args => ({
  components: { ResultComponent },
  setup() {
    return { args };
  },
  template: '<ResultComponent v-bind="args" />'
});

export const PrimaryResultPage = Template.bind({});
PrimaryResultPage.storyName = "Votação 1";
PrimaryResultPage.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Não", count: 1 },
    { option: "Talvez", count: 1 }
  ]
};
