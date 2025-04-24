import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import {
  Block,
  Image,
  useColors,
  type PhaselisColors,
  Label,
  LucideIcon,
  Row,
  Col,
  Textfield,
  type SlotIconName,
} from "phaselis";
import StoryView from "../../src/StoryView";
import {
  healthcare_1,
  healthcare_2,
  healthcare_3,
  healthcare_4,
} from "../../assets/images";
import { useNavigation } from "expo-router";

const CategoryItem = ({
  icon,
  label,
  color,
  onPress,
}: {
  icon: SlotIconName;
  label: string;
  color: keyof PhaselisColors;
  onPress?: () => void;
}) => {
  const Colors = useColors<PhaselisColors | any>();

  return (
    <Col>
      <Pressable onPress={onPress}>
        <Block
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: Colors[color][300],
            backgroundColor: Colors[color][200],
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
          }}
        >
          <LucideIcon
            name={icon}
            size="lg"
            strokeWidth={2}
            style={{ color: Colors[color][600] }}
          />
          <Label
            variation="small"
            style={{ text: { color: Colors[color][800] } }}
          >
            {label}
          </Label>
        </Block>
      </Pressable>
    </Col>
  );
};

const SymptomCard = ({ emoji, label }: { emoji: string; label: string }) => {
  const Colors = useColors<PhaselisColors | any>();

  return (
    <Block
      style={{
        shadows: [
          {
            color: "black",
            opacity: 0.2,
            radius: 8,
            offset: [3, 0],
          },
          {
            color: "black",
            opacity: 0.2,
            radius: 8,
            offset: [0, 3],
          },
        ],
        borderRadius: 16,
      }}
    >
      <Block
        style={{
          borderRadius: 16,
          borderWidth: 1,
          borderColor: Colors.Gray[300],
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 8,
          paddingHorizontal: 16,
          gap: 8,
          flexDirection: "row",
        }}
      >
        <Text style={styles.emojiStyle}>{emoji}</Text>
        <Label variation="h6" bold>
          {label}
        </Label>
      </Block>
    </Block>
  );
};

const ResearchCard = ({
  imageUri,
  title,
  description,
}: {
  imageUri: string;
  title: string;
  description: string;
}) => {
  const Colors = useColors<PhaselisColors>();

  return (
    <Block
      style={{
        padding: 8,
        gap: 8,
        flexDirection: "row",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.Gray[200],
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: imageUri }}
        style={{
          element: {
            width: 92,
            height: 92,
            borderRadius: 16,
          },
        }}
      />
      <Block style={{ gap: 4, flexWrap: "wrap", flex: 1 }}>
        <Label
          variation="h6"
          bold
          style={{ text: { color: "#666" } }}
          numberOfLines={2}
        >
          {title}
        </Label>
        <Label
          variation="small"
          style={{ text: { color: "#333" } }}
          numberOfLines={3}
        >
          {description}
        </Label>
      </Block>
    </Block>
  );
};

const HealthcareView = () => {
  const Colors = useColors<PhaselisColors>();
  const navigation = useNavigation();

  const handleDoctorsPress = () => {
    navigation.navigate("doctors-screen" as never);
  };

  return (
    <StoryView style={{ paddingVertical: 0, paddingHorizontal: 0, gap: 0 }}>
      <Image
        source={{ uri: healthcare_1.uri }}
        style={{
          element: {
            width: Dimensions.get("window").width,
            height: 250,
          },
        }}
      />
      <Block style={styles.headerOverlay}>
        <Label variation="h5" bold style={{ text: styles.headerTitle }}>
          Get Health Care
        </Label>

        <Textfield
          style={{ container: { backgroundColor: "white", width: "100%" } }}
          leftIcon="Search"
          placeholder="Search"
        />
      </Block>

      <Block style={styles.contentContainer}>
        <Row style={{ gap: 16 }}>
          <CategoryItem
            icon="Stethoscope"
            label="Doctors"
            color="Primary"
            onPress={handleDoctorsPress}
          />
          <CategoryItem icon="Pill" label="Pharmacy" color="Secondary" />
          <CategoryItem icon="Hospital" label="Hospitals" color="Tertiary" />
        </Row>

        <Block style={{ gap: 8 }}>
          <Label
            variation="h6"
            bold
            style={{ text: { color: Colors.Gray[900] } }}
          >
            Your symptoms
          </Label>
          <Row style={{ gap: 16 }}>
            <SymptomCard emoji="🤕" label="Headache" />
            <SymptomCard emoji="🤢" label="Nausea" />
            <SymptomCard emoji="🤒" label="Temperature" />
          </Row>
        </Block>

        <Block style={{ gap: 8 }}>
          <Label
            variation="h6"
            bold
            style={{ text: { color: Colors.Gray[900] } }}
          >
            New Research
          </Label>
          <Block style={{ gap: 16 }}>
            <ResearchCard
              imageUri={healthcare_2.uri}
              title="Healthcare Mobile Computers"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis urna mi, a mattis risus iaculis id."
            />
            <ResearchCard
              imageUri={healthcare_3.uri}
              title="What Is Women's Healthcare?"
              description="Vestibulum finibus placerat lorem, id pretium arcu cursus vitae. Fusce dictum felis eu odio posuere."
            />
            <ResearchCard
              imageUri={healthcare_4.uri}
              title="IT in health care has produced modest changes — so far"
              description="Ut tempus malesuada mollis. Maecenas finibus justo sit amet gravida venenatis."
            />
          </Block>
        </Block>
      </Block>
    </StoryView>
  );
};

export default HealthcareView;

const styles = StyleSheet.create({
  headerOverlay: {
    position: "absolute",
    top: 140,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 16,
    paddingHorizontal: 40,
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 20,
    textTransform: "capitalize",
    textShadowColor: "rgba(0, 0, 0, 0.12)",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
  },
  contentContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,
  },
  emojiStyle: {
    height: 32,
    width: 32,
    fontSize: 30,
  },
});
