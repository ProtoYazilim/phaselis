import React from "react";
import CodeBlock from "@theme/CodeBlock";

type BasicPropViewType = {
  prop: string;
  type: string;
  description: string;
  code?: string;
};

const BasicPropView = ({
  prop,
  type,
  description,
  code,
}: BasicPropViewType) => {
  return (
    <>
      {prop && <h3>{prop}</h3>}
      {code && (
        <p>
          <code>{type}</code>
        </p>
      )}
      {description && <p>{description}</p>}
      {code && <CodeBlock language="jsx">{code}</CodeBlock>}
    </>
  );
};

export default BasicPropView;
