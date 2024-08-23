import { Controller } from "react-hook-form";
import { Input, Select, InputNumber, Checkbox } from "antd";
import PropTypes from "prop-types";

export const TextInputField = ({
  name,
  control,
  label,
  placeholder,
  errors,
}) => (
  <div>
    <label className="text-sm text-gray-500 font-medium">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          type="text"
          placeholder={placeholder}
          className="w-full my-2"
          {...field}
        />
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export const SelectField = ({
  name,
  control,
  label,
  placeholder,
  options,
  errors,
}) => (
  <div>
    <label className="text-sm text-gray-500 font-medium">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          placeholder={placeholder}
          className="w-full my-2"
          {...field}
          onChange={(value) => field.onChange(value)}
        >
          {options.map((option) => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export const NumberInputField = ({
  name,
  control,
  label,
  placeholder,
  errors,
}) => (
  <div>
    <label className="text-sm text-gray-500 font-medium">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputNumber
          placeholder={placeholder}
          className="w-full my-2"
          {...field}
        />
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export const TextAreaField = ({
  name,
  control,
  label,
  placeholder,
  errors,
}) => (
  <div>
    <label className="text-sm text-gray-500 font-medium">{label}</label>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input.TextArea
          {...field}
          rows={5}
          placeholder={placeholder}
          className="w-full my-2"
        />
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

export const CheckBoxField = ({ name, control, label, errors }) => (
  <div className="mt-8">
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }) => (
        <label className="text-sm text-gray-500 font-medium">
          <Checkbox {...field} />
          <span className="ml-2">{label}</span>
        </label>
      )}
    />
    {errors[name] && (
      <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
    )}
  </div>
);

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.array.isRequired,
  errors: PropTypes.object,
};

NumberInputField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
};

CheckBoxField.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object,
};
