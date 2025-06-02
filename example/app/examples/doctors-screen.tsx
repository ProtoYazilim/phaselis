import { StyleSheet } from "react-native";
import {
  Block,
  Image,
  useColors,
  type PhaselisColors,
  Label,
  LucideIcon,
  Row,
  Button,
  Col,
} from "phaselis";
import StoryView from "../../src/StoryView";
import { doctor_1, avatar_1, avatar_2 } from "../../assets/images";
import { StarRating, ReviewItem, RatingBar } from "./travel";
import { useNavigation } from "expo-router";

const StatItem = ({ value, label }: { value: string; label: string }) => {
  const Colors = useColors<PhaselisColors>();

  return (
    <Col style={{ gap: 4, alignItems: "center", justifyContent: "center" }}>
      <Label
        variation="h4"
        style={{ text: { color: Colors.Primary[900], fontWeight: 400 } }}
      >
        {value}
      </Label>
      <Label
        variation="h6"
        style={{ text: { color: Colors.Primary[900], fontWeight: 300 } }}
      >
        {label}
      </Label>
    </Col>
  );
};

export const DoctorProfileCard = ({
  imageUri,
  name,
  specialty,
  patientCount,
}: {
  imageUri: string;
  name: string;
  specialty: string;
  patientCount: string;
}) => {
  const Colors = useColors<PhaselisColors>();

  return (
    <Block
      style={{
        borderRadius: 16,
        flexDirection: "row",
        gap: 16,
        padding: 8,
        backgroundColor: Colors.Shades.white,
        ...styles.shadowMD,
      }}
    >
      <Image source={{ uri: imageUri }} width={92} height={92} />
      <Block style={{ gap: 8 }}>
        <Block style={{ gap: 4 }}>
          <Label
            variation="h5"
            bold
            style={{ text: { color: Colors.Shades.darkGray } }}
          >
            {name}
          </Label>
          <Label
            variation="h6"
            style={{ text: { color: Colors.Shades.lightGray } }}
          >
            {specialty}
          </Label>
        </Block>
        <Block style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <Block
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: Colors.Primary[100],
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LucideIcon
              name="User"
              strokeWidth={2}
              style={{ color: Colors.Primary[600] }}
            />
          </Block>
          <Block>
            <Label
              variation="small"
              style={{ text: { color: Colors.Primary[600] } }}
            >
              Patients
            </Label>
            <Label
              variation="h6"
              bold
              style={{ text: { color: Colors.Primary[600] } }}
            >
              {patientCount}
            </Label>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const RatingsSummary = ({
  averageRating,
  reviewCount,
}: {
  averageRating: string;
  reviewCount: string;
}) => {
  const Colors = useColors<PhaselisColors>();
  return (
    <Block style={styles.ratingSummaryContainer}>
      <Block style={styles.ratingBarsContainer}>
        <RatingBar starCount={5} width={151} greenBarColor />
        <RatingBar starCount={4} width={106} greenBarColor />
        <RatingBar starCount={3} width={60} greenBarColor />
        <RatingBar starCount={2} width={19} greenBarColor />
        <RatingBar starCount={1} width={6} greenBarColor />
      </Block>
      <Block style={styles.ratingScoreContainer}>
        <Label
          variation="h1"
          bold
          style={{ text: { color: Colors.Shades.lightGray } }}
        >
          {averageRating}
        </Label>
        <StarRating rating={Number(averageRating)} size="xs" />
        <Label
          variation="small"
          style={{ text: { color: Colors.Shades.darkGray } }}
        >
          {reviewCount} reviews
        </Label>
      </Block>
    </Block>
  );
};

const ContentSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const Colors = useColors<PhaselisColors>();
  return (
    <Block
      style={{
        borderRadius: 16,
        gap: 8,
        padding: 16,
        backgroundColor: Colors.Shades.white,
      }}
    >
      <Label
        variation="h6"
        bold
        style={{ text: { color: Colors.Shades.black } }}
      >
        {title}
      </Label>
      {children}
    </Block>
  );
};

const DoctorsScreenView = () => {
  const navigation = useNavigation();
  const Colors = useColors<PhaselisColors>();

  const handleAppointment = () => {
    navigation.navigate("appointment-screen" as never);
  };

  return (
    <StoryView
      style={{ gap: 16, backgroundColor: Colors.Shades.grayBackground }}
    >
      <DoctorProfileCard
        imageUri={doctor_1.uri}
        name="Dr. John Doe"
        specialty="Neurologist"
        patientCount="537+"
      />

      <Block
        style={{
          borderRadius: 16,
          gap: 16,
          padding: 16,
          backgroundColor: Colors.Shades.white,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Row style={{ gap: 16, padding: 16 }}>
          <StatItem value="96" label="Articles" />
          <StatItem value="1492+" label="Treatments" />
          <StatItem value="4976" label="Followers" />
        </Row>

        <Row style={{ gap: 16 }}>
          <Col>
            <Button text="Follow" />
          </Col>
          <Col>
            <Button text="Message" variation="primary_outline" />
          </Col>
        </Row>
      </Block>

      <Block
        style={{
          borderRadius: 16,
          gap: 16,
          padding: 16,
          backgroundColor: Colors.Shades.white,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Block style={styles.reviewsTabContainer}>
          <RatingsSummary averageRating="4.7" reviewCount="78" />

          <ReviewItem
            avatarUri={avatar_1.uri}
            reviewerName="Jane Halebery"
            rating={4}
            timeAgo="2 mins ago"
            reviewText="Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua"
          />

          <Block style={styles.divider} />

          <ReviewItem
            avatarUri={avatar_2.uri}
            reviewerName="Eliz Firtberzin"
            rating={5}
            timeAgo="2 mins ago"
            reviewText="Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco."
          />
        </Block>
      </Block>

      <ContentSection title="Education">
        <Label
          variation="small"
          style={{ text: { color: Colors.Shades.black } }}
          numberOfLines={12}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet ullamcorper purus. Sed ornare et enim nec rutrum. Morbi tincidunt
          lacus ac felis lobortis vehicula. Quisque ut congue odio. Phasellus
          porttitor, ex at lacinia gravida, ante risus aliquam leo, at euismod
          arcu enim lacinia lorem. Quisque hendrerit libero eu purus dapibus, at
          congue enim auctor. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Ut blandit in lorem
          hendrerit tristique. Maecenas vitae sem auctor, efficitur urna ut,
          varius diam.
        </Label>
      </ContentSection>

      <Button
        size="lg"
        leftIcon="CalendarCheck"
        text="Make an Appointment"
        onPress={handleAppointment}
      />
    </StoryView>
  );
};

export default DoctorsScreenView;

const styles = StyleSheet.create({
  symptomCard: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowMD: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 8,
  },
  reviewsTabContainer: {
    gap: 24,
  },
  ratingSummaryContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    gap: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingBarsContainer: {
    gap: 8,
  },
  ratingScoreContainer: {
    gap: 8,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
});
