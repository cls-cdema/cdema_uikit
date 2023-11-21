/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Link from '../components/Link';

storiesOf('Design|Guidelines', module)
  .addParameters({ options: { showPanel: false, isToolshown: false } })
  .add('Development', () => (
    <Page title="Development" subTitle="Help improving the UI Kit">
      <p>
        Development is made on a GitHub repository. Feel free create an Issue or
        submit a pull request.{' '}
        <Link href="https://github.com/wfp/ui">Project on GitHub</Link>
      </p>
      <br />
      <iframe
        title="GitHub Like"
        src="https://ghbtns.com/github-btn.html?user=wfp&repo=ui&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="160px"
        height="30px"
      />
      <h3>NPM</h3>
      <p>
        <a href="https://www.npmjs.com/package/cdema_uikit">Package on npm</a>
      </p>
    </Page>
  ));
