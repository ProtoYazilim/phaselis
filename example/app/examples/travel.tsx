import { Dimensions, StyleSheet } from "react-native";
import {
  Block,
  Label,
  Image,
  TabView,
  TabItem,
  LucideIcon,
  useColors,
  type PhaselisColors,
  type SlotIconName,
  Button,
  Row,
  Col,
  Avatar,
} from "phaselis";
import StoryView from "../../src/StoryView";
import {
  avatar_1,
  avatar_2,
  avatar_3,
  dalaman_1,
  dalaman_2,
  dalaman_3,
  dalaman_4,
  dalaman_5,
  dalaman_6,
  dalaman_7,
  dalaman_8,
  dalaman_9,
} from "../../assets/images";

interface PricingItemProps {
  icon: SlotIconName;
  iconColor: string;
  iconBackground: string;
  title: string;
  price: string;
}

const PricingItem = ({
  icon,
  iconColor,
  iconBackground,
  title,
  price,
}: PricingItemProps) => {
  return (
    <Block style={styles.pricingItemContainer}>
      <Block style={styles.pricingItemLeftSection}>
        <Block
          style={StyleSheet.flatten([
            styles.iconContainer,
            { backgroundColor: iconBackground },
          ])}
        >
          <LucideIcon name={icon} size="md" style={{ color: iconColor }} />
        </Block>
        <Block>
          <Label variation="small">{title}</Label>
          <Label variation="small" style={{ text: { color: "#666" } }}>
            {price}
          </Label>
        </Block>
      </Block>
      <LucideIcon name="ArrowRight" size="md" style={{ color: "#CCCCCC" }} />
    </Block>
  );
};

interface StarRatingProps {
  rating: number;
  size?: "xs" | "sm" | "md" | "lg";
}

export const StarRating = ({ rating, size = "md" }: StarRatingProps) => {
  const Colors = useColors<PhaselisColors>();
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <LucideIcon
        key={i}
        name="Star"
        size={size}
        strokeWidth={2}
        style={{ color: Colors.Warning[500] }}
      />,
    );
  }

  return <Block style={styles.starRatingContainer}>{stars}</Block>;
};

interface ReviewProps {
  avatarUri: string;
  reviewerName: string;
  rating: number;
  timeAgo: string;
  reviewText: string;
}

export const ReviewItem = ({
  avatarUri,
  reviewerName,
  rating,
  timeAgo,
  reviewText,
}: ReviewProps) => {
  return (
    <Block style={styles.reviewItemContainer}>
      <Block style={styles.reviewHeaderContainer}>
        <Block style={styles.reviewerInfoContainer}>
          <Avatar size="sm" img={avatarUri} />
          <Block style={styles.reviewerDetailsContainer}>
            <Label variation="h6" style={{ text: { color: "#333" } }}>
              {reviewerName}
            </Label>
            <Block style={styles.ratingTimeContainer}>
              <StarRating rating={rating} size="sm" />
              <Label variation="h6" style={{ text: { color: "#333" } }}>
                {timeAgo}
              </Label>
            </Block>
          </Block>
        </Block>
        <LucideIcon
          name="EllipsisVertical"
          size="lg"
          style={{ color: "#333" }}
        />
      </Block>
      <Label
        variation="small"
        style={{ text: { color: "#333" } }}
        numberOfLines={4}
      >
        {reviewText}
      </Label>
    </Block>
  );
};

interface RatingBarProps {
  starCount: number;
  width: number;
  greenBarColor?: boolean;
}

export const RatingBar = ({
  starCount,
  width,
  greenBarColor,
}: RatingBarProps) => {
  const Colors = useColors<PhaselisColors>();

  const backgroundColor = greenBarColor
    ? Colors.Success[700]
    : Colors.Primary[500];

  return (
    <Block style={styles.ratingBarContainer}>
      <Label variation="small">{starCount}</Label>
      <LucideIcon name="Star" style={{ color: Colors.Warning[500] }} />
      <Block
        style={StyleSheet.flatten([
          styles.ratingBarIndicator,
          { width, backgroundColor },
        ])}
      />
    </Block>
  );
};

interface PhotoItemProps {
  uri: string;
  width: number;
}

const PhotoItem = ({ uri, width }: PhotoItemProps) => (
  <Col style={styles.photoItemContainer}>
    <Image
      source={{ uri }}
      style={{
        element: {
          width,
          height: width,
          borderRadius: 8,
        },
      }}
    />
  </Col>
);

const TravelView = () => {
  const Colors = useColors<PhaselisColors>();
  const imageWidth = (Dimensions.get("window").width - 80) / 2;

  const renderOverviewTab = () => (
    <Block style={styles.tabContentContainer}>
      <Block style={styles.aboutSection}>
        <Label variation="h6" bold>
          About Dalaman
        </Label>
        <Label variation="small" numberOfLines={12}>
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
      </Block>
      <Block style={styles.overviewRatingContainer}>
        <StarRating rating={5} />
        <Label variation="small" bold>
          4.7
        </Label>
        <Label variation="small" bold style={{ text: { color: "#999" } }}>
          (78 review)
        </Label>
      </Block>
      <Block style={styles.pricingSection}>
        <Label variation="h6" bold>
          Pricing
        </Label>
        <PricingItem
          icon="Plane"
          iconColor={Colors.Secondary[600]}
          iconBackground={Colors.Secondary[200]}
          title="Flights"
          price="from $199"
        />
        <Block style={styles.divider} />
        <PricingItem
          icon="Hotel"
          iconColor={Colors.Tertiary[600]}
          iconBackground={Colors.Tertiary[100]}
          title="Hotels"
          price="from $219 / night"
        />
        <Button variation="secondary" text="Book a Trip" />
      </Block>
    </Block>
  );

  const renderPhotosTab = () => (
    <>
      <Row style={styles.photoRow}>
        <PhotoItem uri={dalaman_2.uri} width={imageWidth} />
        <PhotoItem uri={dalaman_3.uri} width={imageWidth} />
      </Row>
      <Row style={styles.photoRow}>
        <PhotoItem uri={dalaman_4.uri} width={imageWidth} />
        <PhotoItem uri={dalaman_5.uri} width={imageWidth} />
      </Row>
      <Row style={styles.photoRow}>
        <PhotoItem uri={dalaman_6.uri} width={imageWidth} />
        <PhotoItem uri={dalaman_7.uri} width={imageWidth} />
      </Row>
      <Row style={{ ...styles.photoRow, ...styles.photoRowLast }}>
        <PhotoItem uri={dalaman_8.uri} width={imageWidth} />
        <PhotoItem uri={dalaman_9.uri} width={imageWidth} />
      </Row>
      <Button text="More Photos" />
    </>
  );

  const renderReviewsTab = () => (
    <Block style={styles.reviewsTabContainer}>
      <Block style={styles.ratingSummaryContainer}>
        <Block style={styles.ratingBarsContainer}>
          <RatingBar starCount={5} width={151} />
          <RatingBar starCount={4} width={106} />
          <RatingBar starCount={3} width={60} />
          <RatingBar starCount={2} width={19} />
          <RatingBar starCount={1} width={6} />
        </Block>
        <Block style={styles.ratingScoreContainer}>
          <Label variation="h1" bold style={{ text: { color: "#333" } }}>
            4.7
          </Label>
          <StarRating rating={4} size="xs" />
          <Label variation="small" style={{ text: { color: "#999" } }}>
            78 reviews
          </Label>
        </Block>
      </Block>

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

      <Block style={styles.divider} />

      <ReviewItem
        avatarUri={avatar_3.uri}
        reviewerName="Pathrick Hooze"
        rating={3}
        timeAgo="2 mins ago"
        reviewText="Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex."
      />

      <Button text="Write Review" variation="tertiary" />
    </Block>
  );

  return (
    <Block style={styles.container}>
      <Block style={styles.headerImageContainer}>
        <Image
          source={{ uri: dalaman_1.uri }}
          style={{
            element: {
              width: "100%",
              height: 316,
              position: "absolute",
            },
          }}
        />
      </Block>
      <StoryView style={styles.storyViewContainer}>
        <TabView>
          <TabItem title="Overview">{renderOverviewTab()}</TabItem>
          <TabItem title="Photos">{renderPhotosTab()}</TabItem>
          <TabItem title="Reviews">{renderReviewsTab()}</TabItem>
        </TabView>
      </StoryView>
    </Block>
  );
};

export default TravelView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImageContainer: {
    height: 300,
  },
  storyViewContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
  },
  tabContentContainer: {
    gap: 16,
  },
  aboutSection: {
    gap: 8,
  },
  overviewRatingContainer: {
    flexDirection: "row",
    gap: 8,
  },
  pricingSection: {
    gap: 16,
  },
  pricingItemContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  pricingItemLeftSection: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  iconContainer: {
    borderRadius: 32,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  starRatingContainer: {
    flexDirection: "row",
    gap: 2,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  photoRow: {
    gap: 16,
    paddingTop: 16,
  },
  photoRowLast: {
    paddingBottom: 16,
  },
  photoItemContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  ratingBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingBarIndicator: {
    height: 6,
    borderRadius: 4,
  },
  reviewItemContainer: {
    justifyContent: "center",
    gap: 12,
  },
  reviewHeaderContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  reviewerInfoContainer: {
    flexDirection: "row",
    gap: 8,
  },
  reviewerDetailsContainer: {
    gap: 4,
    justifyContent: "center",
  },
  ratingTimeContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});
