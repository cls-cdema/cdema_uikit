import React, { useState } from 'react';

import { SingleDatePickerInput } from './SingleDatePickerInput';
import { DateRangePickerInput } from './DateRangePickerInput';
import Input from '../Input';
import moment from 'moment';
import { Controller, useForm } from 'react-hook-form';

import 'react-dates/initialize';
import { SingleDatePicker, DateRangePicker } from 'react-dates';
import markdown from './README.mdx';

export default {
  title: 'Components/UI Elements/DatePicker',
  component: SingleDatePickerInput,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const SingleDatePickerDefault = (args) => (
  <SingleDatePickerInput {...args} />
);
SingleDatePickerDefault.args = {
  datePicker: SingleDatePicker,
  labelText: 'Label text (labelText)',
  placeholder: 'Placeholder text (placeholder)',
  disabled: false,
  hideLabel: false,
  showClearDate: false,
  invalid: false,
  invalidText: 'A valid value is required',
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  helperText: 'Optional helper text.',
};

const singleSourceCode = `
import 'react-dates/initialize';
import { SingleDatePickerInput } from "cdema_uikit";
import { SingleDatePicker } from 'react-dates';

<SingleDatePickerInput
  datePicker={SingleDatePicker}
  helperText="Optional helper text."
  inputIconPosition="after"
  invalidText="A valid value is required"
  labelText="Label datepicker"
  onBlur={()=>{}}
  onChange={()=>{}}
  onFocus={()=>{}}
  placeholder="Placeholder text (placeholder)"
  showDefaultInputIcon
/>
`;

SingleDatePickerDefault.story = {
  parameters: {
    docs: {
      source: {
        code: singleSourceCode,
      },
    },
  },
};

export const InvalidDatePicker = (args) => <SingleDatePickerInput {...args} />;
InvalidDatePicker.args = {
  datePicker: SingleDatePicker,
  labelText: 'Label text (labelText)',
  invalid: true,
  invalidText: 'A valid value is required',
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  helperText: 'Optional helper text.',
};

const invaliddatepickersourcecode = `
  <SingleDatePickerInput 
  datePicker=SingleDatePicker
  labelText='Label text (labelText)'
  invalid={true}
  invalidText= 'A valid value is required'
  showDefaultInputIcon= {true}
  inputIconPosition= 'after'
  helperText= 'Optional helper text.' 
  />
`;
InvalidDatePicker.story = {
  parameters: {
    docs: {
      source: {
        code: invaliddatepickersourcecode,
      },
    },
  },
};

export const SingleDatePickerNew = (args) => {
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  return (
    <Input
      labelText="Input using SingleDatePicker by Airbnb"
      helperText="HelperText">
      {(e) => (
        <SingleDatePicker
          showDefaultInputIcon={true}
          inputIconPosition="after"
          onDateChange={(newDate) => setDate(newDate)}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          date={date}
          id="your_unique_id"
        />
      )}
    </Input>
  );
};

const singledatepickernewsourcecode = `
import React, { useState } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import {Input} from 'cdema_uikit';

export const SingleDatePickerNew = () => {
  const [date, setDate] = useState(moment());
  const [focused, setFocused] = useState(false);
  return (
    <Input
      labelText="Input using SingleDatePicker by Airbnb"
      helperText="HelperText">
      {(e) => (
        <SingleDatePicker
          showDefaultInputIcon={true}
          inputIconPosition="after"
          onDateChange={(newDate) => setDate(newDate)}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          date={date}
          id="your_unique_id"
        />
      )}
    </Input>
  );
}
`;

SingleDatePickerNew.story = {
  parameters: {
    docs: {
      source: {
        code: singledatepickernewsourcecode,
      },
    },
  },
};

export const DateRangePickerDefault = (args) => (
  <DateRangePickerInput {...args} />
);
DateRangePickerDefault.args = {
  datePicker: DateRangePicker,
  date: moment(),
  labelText: 'Label text (labelText)',
  placeholder: 'Placeholder text (placeholder)',
  disabled: false,
  hideLabel: false,
  showClearDate: false,
  invalid: true,
  invalidText: 'A valid value is required',
  showDefaultInputIcon: true,
  inputIconPosition: 'after',
  helperText: 'Optional helper text.',
};
const dateRangeSourceCode = `
import 'react-dates/initialize';
import moment from 'moment';
import { DateRangePickerInput } from "cdema_uikit";
import { DateRangePicker } from 'react-dates';

<DateRangePickerInput
  datePicker=DateRangePicker
  date=moment()
  labelText='Label text (labelText)'
  placeholder='Placeholder text (placeholder)'
  disabled={false}
  hideLabel={false}
  showClearDate={false}
  invalid={true}
  invalidText='A valid value is required'
  showDefaultInputIcon={true}
  inputIconPosition='after'
  helperText='Optional helper text.'
/>
`;

DateRangePickerDefault.story = {
  parameters: {
    docs: {
      source: {
        code: dateRangeSourceCode,
      },
    },
  },
};

export const DatePickerHookForm = (args) => {
  const { control, watch } = useForm();
  const input = watch('test');

  return (
    <>
      {JSON.stringify(input)}
      <br />
      <Controller
        control={control}
        name="test"
        render={({ field, fieldState, formState }) => (
          <SingleDatePickerInput
            {...field}
            {...fieldState}
            datePicker={SingleDatePicker}
            helperText="Optional helper text."
            inputIconPosition="after"
            invalidText="A valid value is required"
            labelText="Label datepicker"
            placeholder="Placeholder text (placeholder)"
            showDefaultInputIcon
          />
        )}
      />
    </>
  );
};

const datePickerHookSourceCode = `
import 'react-dates/initialize';
import { SingleDatePickerInput } from "cdema_uikit";
import { SingleDatePicker } from 'react-dates';
import { Controller, useForm } from 'react-hook-form';

export const DatePickerHookForm = (args) => {
  const { control } = useForm();

  return (
    <>
      <Controller
        control={control}
        name="test"
        render={({ field, fieldState, formState }) => (
          <SingleDatePickerInput
            {...field}
            {...fieldState}
            datePicker={SingleDatePicker}
            helperText="Optional helper text."
            inputIconPosition="after"
            invalidText="A valid value is required"
            labelText="Label datepicker"
            placeholder="Placeholder text (placeholder)"
            showDefaultInputIcon
          />
        )}
      />
    </>
  );
};
`;

DatePickerHookForm.story = {
  parameters: {
    docs: {
      source: {
        code: datePickerHookSourceCode,
      },
    },
  },
};

export const DatePickerRangeHookForm = (args) => {
  const { control, watch } = useForm();
  const datePickerRange = watch('datePickerRange');
  return (
    <>
      {JSON.stringify(datePickerRange)}
      <br />
      <Controller
        control={control}
        name="datePickerRange"
        render={({ field, fieldState, formState }) => (
          <DateRangePickerInput
            {...fieldState}
            {...field}
            datePicker={DateRangePicker}
            helperText="Optional helper text."
            inputIconPosition="after"
            invalidText="A valid value is required"
            labelText="Label datepicker"
            placeholder="Placeholder text (placeholder)"
            showDefaultInputIcon
          />
        )}
      />
    </>
  );
};

const datePickerRangeHookFormSourceCode = `
import 'react-dates/initialize';
import { DateRangePickerInput } from "cdema_uikit";
import { DateRangePicker } from 'react-dates';
import { Controller, useForm } from 'react-hook-form';

export const DatePickerRangeHookForm = (args) => {
  const { control, watch } = useForm();
  const datePickerRange = watch('datePickerRange');
  return (
    <>
      <Controller
        control={control}
        name="datePickerRange"
        render={({ field, fieldState, formState }) => (
          <DateRangePickerInput
            {...fieldState}
            {...field}
            datePicker={DateRangePicker}
            helperText="Optional helper text."
            inputIconPosition="after"
            invalidText="A valid value is required"
            labelText="Label datepicker"
            placeholder="Placeholder text (placeholder)"
            showDefaultInputIcon
          />
        )}
      />
    </>
  );
};
`;

DatePickerRangeHookForm.story = {
  parameters: {
    docs: {
      source: {
        code: datePickerRangeHookFormSourceCode,
      },
    },
  },
};
