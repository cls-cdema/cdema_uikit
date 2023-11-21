import React from 'react';
import markdown from './README.mdx';
import Value from '.';
import Unit from '../Unit';

export default {
  title: 'Components/UI Elements/Value',
  component: Value,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <Value
    {...args}
    value={
      <Unit type="Usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
    secondaryValue={
      <Unit type="Usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
  />
);

const valuesourcecode = `
import { Value, Unit } from "cdema_uikit";

<Value
    value={
      <Unit type="Usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
    secondaryValue={
      <Unit type="Usd" input="thousand" output="million" showZero hideEmpty>
        1234567
      </Unit>
    }
/>
`;

Regular.story = {
  parameters: {
    docs: {
      source: {
        code: valuesourcecode,
      },
    },
  },
};
