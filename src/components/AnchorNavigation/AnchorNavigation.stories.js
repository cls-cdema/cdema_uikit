import React from 'react';
import markdown from './README.mdx';
import AnchorNavigation from '.';
import Link from '../Link';

export default {
  title: 'Components/Navigations/AnchorNavigation',
  component: AnchorNavigation,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
    mdx: markdown,
  },
};

export const RegularAnchorNavigation = (args) => (
  <AnchorNavigation {...args}>
    <Link href="#">Item one</Link>
    <Link href="#">Item two</Link>
    <Link href="#">Item three</Link>
    <Link href="#">Item four</Link>
  </AnchorNavigation>
);

RegularAnchorNavigation.args = {
  title: 'Title',
};

const anchorsourcecode = `
import { AnchorNavigation, Link } from "cdema_uikit";

<AnchorNavigation title="Title">
  <Link href="#">
    Item one
  </Link>
  <Link href="#">
    Item two
  </Link>
  <Link href="#">
    Item three
  </Link>
  <Link href="#">
    Item four
  </Link>
</AnchorNavigation>
`;

RegularAnchorNavigation.story = {
  parameters: {
    docs: {
      source: {
        code: anchorsourcecode,
      },
    },
  },
};
