import { StyleSheet } from "react-native";
import StoryView from "../../src/StoryView";
import {
  Block,
  Image,
  useColors,
  type PhaselisColors,
  Label,
  Row,
  Col,
  LucideIcon,
  Button,
} from "phaselis";
import {
  womens_handbag,
  mens_shoes,
  men_tshirt,
  smartwatch,
} from "../../assets/images";

interface ShoppingCartItemProps {
  imageUri: string;
  productName: string;
  size: string;
  quantity: number;
  price: number;
  shadow?: boolean;
  onDelete?: () => void;
}

const ShoppingCartItem = ({
  imageUri,
  productName,
  size,
  quantity,
  price,
  onDelete,
  shadow,
}: ShoppingCartItemProps) => {
  const Colors = useColors<PhaselisColors>();

  return (
    <Block
      style={StyleSheet.flatten([
        styles.cartItemContainer,
        {
          borderColor: Colors.Secondary[100],
          backgroundColor: Colors.Secondary[50],
        },
      ])}
    >
      <Block style={styles.productContainer}>
        <Block style={shadow ? styles.shadowSM : {}}>
          <Image
            source={{ uri: imageUri }}
            height={80}
            width={80}
            style={{ borderRadius: 8 }}
          />
        </Block>
        <Block style={styles.productDetailsContainer}>
          <Label variation="h6" bold numberOfLines={2}>
            {productName}
          </Label>
          <Row>
            <Col>
              <Label variation="small">Size</Label>
            </Col>
            <Col>
              <Label variation="small" bold>
                {size}
              </Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label variation="small">Quantity</Label>
            </Col>
            <Col>
              <Label variation="small" bold>
                {quantity}
              </Label>
            </Col>
          </Row>
          <Row>
            <Label variation="h4" bold>
              $ {price}
            </Label>
          </Row>
        </Block>
      </Block>
      <LucideIcon
        name="Trash2"
        size="xl"
        strokeWidth={2}
        style={{ color: Colors.Primary[950] }}
        onPress={onDelete}
      />
    </Block>
  );
};

const ShoppingCartView = () => {
  return (
    <StoryView style={styles.storyContainer}>
      <Block style={styles.itemsListContainer}>
        <ShoppingCartItem
          imageUri={womens_handbag.uri}
          productName="Women's Handbag"
          size="Free"
          quantity={1}
          price={140}
          onDelete={() => console.log("Delete item")}
        />
        <ShoppingCartItem
          imageUri={mens_shoes.uri}
          productName="Men's Casual Sports Shoe"
          size="42"
          quantity={1}
          price={380}
          onDelete={() => console.log("Delete item")}
        />
        <ShoppingCartItem
          imageUri={smartwatch.uri}
          productName="Smart watch for men and women"
          size="Free Size"
          quantity={1}
          price={420}
          shadow
          onDelete={() => console.log("Delete item")}
        />
        <ShoppingCartItem
          imageUri={men_tshirt.uri}
          productName="Men's classic printed t-shirt"
          size="M"
          quantity={1}
          price={310}
          shadow
          onDelete={() => console.log("Delete item")}
        />
      </Block>

      <Block style={styles.priceDetailsContainer}>
        <Label variation="h6" bold>
          Price Details
        </Label>
        <Block style={styles.priceBreakdownContainer}>
          <Row>
            <Col>
              <Label variation="h6">Total Price</Label>
            </Col>
            <Col style={styles.alignRight}>
              <Label variation="h6">$ 1350</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label variation="h6">Discounts</Label>
            </Col>
            <Col style={styles.alignRight}>
              <Label variation="h6">$ 30</Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label variation="h6">Shipping</Label>
            </Col>
            <Col style={styles.alignRight}>
              <Label variation="h6">$ 0</Label>
            </Col>
          </Row>
        </Block>
        <Block style={styles.orderTotalContainer}>
          <Row>
            <Col>
              <Label variation="h6" bold>
                Order Total
              </Label>
            </Col>
            <Col style={styles.alignRight}>
              <Label variation="h4" bold>
                $ 1220
              </Label>
            </Col>
          </Row>
        </Block>
      </Block>

      <Button size="lg" text="Continue" variation="secondary" />
    </StoryView>
  );
};

export default ShoppingCartView;

const styles = StyleSheet.create({
  storyContainer: {
    gap: 32,
  },
  itemsListContainer: {
    gap: 16,
  },
  cartItemContainer: {
    padding: 16,
    gap: 16,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  productDetailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  priceDetailsContainer: {
    gap: 10,
  },
  priceBreakdownContainer: {
    gap: 8,
  },
  orderTotalContainer: {
    paddingTop: 16,
  },
  alignRight: {
    alignItems: "flex-end",
  },
  shadowSM: {
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 4,
  },
});
