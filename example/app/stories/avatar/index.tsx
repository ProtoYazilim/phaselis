import StorySection from "../../../src/StorySection";
import StoryView from "../../../src/StoryView";
import { Avatar } from "phaselis";
import { avatar_image } from "../../../assets/logos";

const AvatarStory = () => {
  return (
    <StoryView>
      <StorySection
        leftText="Image or Text"
        rightText="MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 16,
        }}
      >
        <Avatar size="md" img={avatar_image.uri} />
        <Avatar size="md" text="MD" />
      </StorySection>
      <StorySection
        leftText="Sizes"
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: 16,
        }}
      >
        <Avatar size="xs" text="XS" />
        <Avatar size="sm" text="SM" />
        <Avatar size="md" text="MD" />
        <Avatar size="lg" text="LG" />
        <Avatar size="xl" text="XL" />
      </StorySection>
      <StorySection
        leftText="Corner"
        rightText="MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 16,
        }}
      >
        <Avatar size="md" text="MD" />
        <Avatar size="md" text="MD" variation="rounded" />
        <Avatar size="md" text="MD" variation="square" />
      </StorySection>
    </StoryView>
  );
};

export default AvatarStory;
