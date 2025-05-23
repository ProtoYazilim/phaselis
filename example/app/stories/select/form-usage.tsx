import FormStoryView from "../../../src/FormStoryView";
import { Select } from "phaselis";

function SwitchStory() {
  return (
    <FormStoryView
      style={{
        flex: 1,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      values={[
        {
          frameworks: "react",
        },
        {
          frameworks: "vue",
        },
      ]}
      scrollview={true}
    >
      <Select
        name="frameworks"
        options={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "angular", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "ember", label: "Ember" },
        ]}
      />
    </FormStoryView>
  );
}

export default SwitchStory;
