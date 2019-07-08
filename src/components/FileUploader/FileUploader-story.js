/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  array,
  boolean,
  number,
  select,
  text,
} from '@storybook/addon-knobs';
import FileUploader, { FileUploaderButton } from '../FileUploader';
import FileUploaderSkeleton from '../FileUploader/FileUploader.Skeleton';
import Button from '../Button';

const buttonKinds = {
  'Primary (primary)': 'primary',
  'Secondary (secondary)': 'secondary',
  'Danger (danger)': 'danger',
  'Ghost (ghost)': 'ghost',
  'Danger Primary (danger--primary)': 'danger--primary',
  'Tertiary (tertiary)': 'tertiary',
};

const filenameStatuses = {
  'Edit (edit)': 'edit',
  'Complete (complete)': 'complete',
  'Uploading (uploading)': 'uploading',
};

const props = {
  fileUploaderButton: () => {
    const buttonKind = select('Button kind (buttonKind)', buttonKinds, '');
    return {
      className: 'bob',
      labelText: text('Label text (labelText)', 'Add files'),
      name: text('Form item name: (name)', ''),
      multiple: boolean('Supports multiple files (multiple)', true),
      disabled: boolean('Disabled (disabled)', false),
      buttonKind: buttonKind || 'primary',
      disableLabelChanges: boolean(
        'Prevent the label from being replaced with file selected file (disableLabelChanges)',
        false
      ),
      role: text('ARIA role of the button (role)', ''),
      tabIndex: number('Tab index (tabIndex)', 0),
      onChange: action('onChange'),
    };
  },
  fileUploader: () => ({
    labelTitle: text('The label title (labelTitle)', 'Upload'),
    labelDescription: text(
      'The label description (labelDescription)',
      'only .jpg files at 500mb or less'
    ),
    buttonLabel: text('The button label (buttonLabel)', 'Add files'),
    filenameStatus: select(
      'Status for file name (filenameStatus)',
      filenameStatuses,
      'edit'
    ),
    accept: array('Accepted file extensions (accept)', ['.jpg', '.png'], ','),
    name: text('Form item name: (name)', ''),
    multiple: boolean('Supports multiple files (multiple)', true),
  }),
};

storiesOf('Components|FileUploader (draft)', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['FileUploader-test'] })
  .add('FileUploaderButton', () => (
    <FileUploaderButton {...props.fileUploaderButton()} />
  ))
  .add('FileUploader', () => {
    let fileUploader;
    return (
      <div className="wfp--file__container">
        <FileUploader
          {...props.fileUploader()}
          ref={node => (fileUploader = node)}
        />
        <Button
          kind="secondary"
          small
          style={{ marginTop: '1rem' }}
          onClick={() => {
            fileUploader.clearFiles();
          }}>
          Clear File
        </Button>
      </div>
    );
  })
  .add('skeleton', () => (
    <div style={{ width: '500px' }}>
      <FileUploaderSkeleton />
    </div>
  ));
