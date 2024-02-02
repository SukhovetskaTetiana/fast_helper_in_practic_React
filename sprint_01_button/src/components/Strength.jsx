import React, { useState } from "react";
import { BUTTONS } from "../data/data";
import TabButton from "./TabButton";

import Section from "./Section";
import Tabs from "./Tabs";

export default function Strength() {
  const [tabValue, setTabValue] = useState("");

  function handleClick(selectButton) {
    setTabValue(selectButton);
  }

  let tabContent = <p>Please, select the button</p>;
  if (tabValue) {
    tabContent = (
      <div id="tab-content">
        <img src={BUTTONS[tabValue].image} alt={BUTTONS[tabValue].title} />
        <div>
          <h3>{BUTTONS[tabValue].title}</h3>
          <p>{BUTTONS[tabValue].desctiption}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Section id="strength" title="Our strength">
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={tabValue === "ecologically"}
                onClick={() => handleClick("ecologically")}
              >
                Ecologically
              </TabButton>
              <TabButton
                isSelected={tabValue === "fresh"}
                onClick={() => handleClick("fresh")}
              >
                Fresh
              </TabButton>
              <TabButton
                isSelected={tabValue === "ripe"}
                onClick={() => handleClick("ripe")}
              >
                Ripe
              </TabButton>
              <TabButton
                isSelected={tabValue === "delivery"}
                onClick={() => handleClick("delivery")}
              >
                Delivery
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
