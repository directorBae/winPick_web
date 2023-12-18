import React from "react";
import ContextData from "../../../model/context";
import FlexBoxContext from "../Flexboxcontent";
import ContextCard from "../Contextcard";

function Pricing() {
  const data = ContextData.Pricing.context;
  const keys = Object.keys(data);
  return (
    <div id="pricing">
      <FlexBoxContext
        heading={ContextData.Pricing.heading}
        context={keys.map((policy, index) => (
          <ContextCard
            key={index}
            heading={data[policy].heading}
            context={data[policy].context.join("\n")}
          />
        ))}
        contextHeight={500}
      />
    </div>
  );
}

export default Pricing;
