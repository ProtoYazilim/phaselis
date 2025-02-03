import { ColorView } from "../../../src";
import StoryView from "../../../src/StoryView";

const PrimaryColorView = () => {
  return (
    <StoryView style={{ gap: 32 }}>
      <ColorView name="Primary" />
      <ColorView name="Secondary" />
      <ColorView name="Tertiary" />
      <ColorView name="Success" />
      <ColorView name="Warning" />
      <ColorView name="Danger" />
      <ColorView name="Info" />
    </StoryView>
  );
};

export default PrimaryColorView;
