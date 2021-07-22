import ButtonsComponent from "../components/Buttons.vue";

export default {
  title: "Buttons",
  component: ButtonsComponent
};

const Template = args => ({
  components: { ButtonsComponent },
  setup() {
    return { args };
  },
  template: '<ButtonsComponent v-bind="args" />'
});

export const PrimaryButtonsPage = Template.bind({});
PrimaryButtonsPage.storyName = "Sim-Não-Talvez";
PrimaryButtonsPage.args = {
  options: ["Sim", "Não", "Talvez"]
};
