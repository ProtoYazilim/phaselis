import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_mobile_testing_re_w7yb.svg").default,
    description: (
      <>
        Phaselis framework boots your development process by providing a set of
        ui components and utilities.
      </>
    ),
  },
  {
    title: "Themes and Styles",
    Svg: require("@site/static/img/undraw_undraw_choose_color_uotg_-1-_5ah4.svg")
      .default,
    description: (
      <>
        Easily customizable with themes and styles. You can also create your
        custom themes and styles.
      </>
    ),
  },
  {
    title: "Dark Mode",
    Svg: require("@site/static/img/undraw_dark_mode_2xam.svg").default,
    description: (
      <>
        Phaselis framework provides dark mode support out of the box. You can
        easily switch between light and dark modes.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
