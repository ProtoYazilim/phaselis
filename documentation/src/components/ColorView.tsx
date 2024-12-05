import React, { FC } from "react";
import Color from "color";

const ColorView: FC<{
  ColorArr: Record<string, string>;
  title: string;
}> = ({ ColorArr, title }) => {
  const renderColorItem = ([key, value]: [string, string]) => {
    const color = Color(value);
    const lightness = color.lightness();

    const newColor = color
      .lightness(
        lightness > 49
          ? 50 - lightness + (lightness - 50) * 0.5
          : 1000 - lightness,
      )
      .saturate(10)
      .hex();

    return (
      <div
        key={key}
        style={{
          backgroundColor: value,
          color: newColor,
          padding: "5px",
          margin: "5px auto",
          borderRadius: "8px",
          textAlign: "center",
          width: "30%",
          minWidth: "200px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "14px", margin: "0" }}>
          {key}
        </p>
        <p style={{ fontSize: "10px", margin: "0" }}>{value}</p>
      </div>
    );
  };

  return (
    <div style={{ padding: "10px", textAlign: "center" }}>
      <h3 style={{ marginBottom: "10px" }}>{title}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {Object.entries(ColorArr).map((item) => renderColorItem(item))}
      </div>
    </div>
  );
};

export default ColorView;
