import StoryView from "../../../src/StoryView";
import {
  Block,
  Col,
  Label,
  Row,
  type PhaselisColors,
  useColors,
} from "phaselis";
import { Text, View } from "react-native";

function LabelStory() {
  const Colors = useColors<PhaselisColors>();

  return (
    <StoryView style={{ gap: 32 }}>
      <Block style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 400,
            lineHeight: 22,
            color: Colors.Primary[600],
          }}
        >
          Font Family
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 22,
            color: Colors.Primary[600],
            paddingLeft: 8,
          }}
        >
          Roboto
        </Text>
      </Block>
      <Row style={{ justifyContent: "space-between" }}>
        <Label text="H1" variation="h1" />
        <Label text="H2" variation="h2" />
        <Label text="H3" variation="h3" />
        <Label text="H4" variation="h4" />
        <Label text="H5" variation="h5" />
        <Label text="H6" variation="h6" />
      </Row>
      <Row style={{ columnGap: 32, alignItems: "center" }}>
        <Col style={{ rowGap: 16, alignItems: "center" }}>
          <Label text="Paragraph" variation="p" />
          <Label text="Quot" variation="quot" />
          <Label text="Small" variation="small" />
        </Col>
        <Col style={{ rowGap: 16, alignItems: "center" }}>
          <Label text="Button" bold />
          <Label text="Input" />
          <Label text="Label" />
          <Label text="Label Alt" />
        </Col>
      </Row>
      <View>
        <Label
          text="H1 Light 48"
          variation="h1"
          weight="light"
          style={{
            text: { color: Colors.Primary[600] },
          }}
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Consectetur adipiscing elit. Nunc quis interdum est. Suspendisse
          dapibus quam vitae justo vulputate, non facilisis felis egestas. Nulla
          purus diam, rutrum sed elit nec, pulvinar convallis risus.
        </Text>
        <Text />
        <Label
          text="H2 Light 34"
          variation="h2"
          weight="light"
          style={{
            text: { color: Colors.Primary[600] },
          }}
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Donec lobortis nunc vel suscipit porta. Fusce viverra sapien est, vel
          pretium quam lobortis vel. Aliquam euismod, dolor quis vestibulum
          aliquet, lorem sapien tempor sem, mollis ultrices justo orci id dui.
        </Text>
        <Text />
        <Label
          text="H3 Light 28"
          variation="h3"
          weight="light"
          style={{
            text: { color: Colors.Primary[600] },
          }}
        />
        <Text />
        <Text />
        <Label
          text="H4 Regular 22"
          variation="h4"
          style={{
            text: { color: Colors.Primary[600] },
          }}
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Aliquam tempus malesuada justo, ut aliquam tortor elementum non. Morbi
          dignissim, orci nec pulvinar molestie, urna quam eleifend orci,
          accumsan hendrerit eros nibh vel nibh. Maecenas fermentum libero nec
          lorem suscipit ultrices.
        </Text>
        <Text />
        <Label
          text="H5 Medium 18"
          variation="h5"
          weight="medium"
          style={{
            text: { color: Colors.Primary[600] },
          }}
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Donec non elit facilisis, sodales justo a, blandit arcu. Mauris
          laoreet risus a purus fringilla, ut tincidunt diam ullamcorper. In
          ipsum ligula, placerat et volutpat vitae, tincidunt in lectus. Sed
          quam libero, tristique in auctor quis, sodales vel lorem. Phasellus
          sed est sagittis, tristique ligula ac, eleifend tellus. Nulla gravida,
          augue quis tincidunt sodales, ipsum libero porta augue, ut laoreet
          enim lorem id purus. Quisque elementum ante nec nibh posuere aliquam.
          Aenean at ipsum in velit finibus mattis. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Etiam eu augue congue arcu rhoncus sollicitudin eu nec urna.
          Suspendisse potenti. Integer id tincidunt magna. Proin tincidunt, diam
          eget laoreet tristique, leo dolor sodales justo, quis tempus sapien
          justo id leo.
        </Text>
        <Text />
        <Label
          text="H6 Bold 16"
          variation="h6"
          weight="bold"
          style={{
            text: { color: Colors.Primary[600] },
          }}
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Etiam mattis ut sem id cursus. Morbi faucibus dapibus condimentum.
          Etiam vitae suscipit arcu. Cras facilisis, ligula eu scelerisque
          hendrerit, erat augue interdum lectus, non maximus purus ante blandit
          mi. Sed molestie facilisis velit vel posuere.
        </Text>
        <Text />
        <Label
          text="Quot “Nulla enim eros, placerat nec lobortis eget, consectetur nec diam. Nunc condimentum ut arcu ut finibus. Integer porta nisi nec molestie tempus. Curabitur neque ante, sagittis a volutpat quis, hendrerit nec ipsum.”"
          numberOfLines={6}
          variation="quot"
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Vestibulum sodales risus fringilla purus sodales malesuada. In dictum
          dignissim erat, euismod ultricies nunc posuere at. Fusce id metus vel
          sapien condimentum varius ac vitae lacus. Nullam vestibulum cursus
          odio aliquam ornare. Nam hendrerit nunc nec pretium cursus.
        </Text>
        <Text />
        <Label
          text="Small Vestibulum nec placerat elit. Morbi aliquet interdum felis, nec facilisis ipsum pellentesque id. Maecenas fermentum lacus ornare nunc eleifend fringilla. Nullam nec odio sed nunc egestas laoreet."
          numberOfLines={4}
          variation="small"
        />
        <Text />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "300",
            color: Colors.Primary[950],
          }}
        >
          Suspendisse aliquam venenatis lacus feugiat condimentum. In in
          tristique risus, quis pretium nunc. Cras viverra augue ac urna luctus
          feugiat. Pellentesque dapibus scelerisque elit, et semper erat. Nunc
          porttitor efficitur sem condimentum dictum. Proin dignissim ligula at
          lacus lacinia pharetra. Praesent ac egestas mi. Nullam a nisl
          pulvinar, ultricies mauris eu, vulputate nunc. Nullam ac efficitur
          dui, a vestibulum lacus. Nullam fringilla quam sed fringilla mollis.
          Maecenas in nibh et nisl hendrerit sollicitudin. Suspendisse egestas
          ante et justo tincidunt viverra. Praesent et feugiat libero.
        </Text>
      </View>
    </StoryView>
  );
}

export default LabelStory;
