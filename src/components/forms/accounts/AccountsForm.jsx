import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spin } from "antd";
import { schema } from "./accountSchema";
import {
  TextInputField,
  SelectField,
  NumberInputField,
  TextAreaField,
} from "../FormFields";
import PropTypes from "prop-types";

const AccountsForm = ({ closeModal }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSavingNew, setIsSavingNew] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const inputData = event.nativeEvent.submitter.name;

    if (inputData === "save") {
      setIsSaving(true);
    } else if (inputData === "saveAndNew") {
      setIsSavingNew(true);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Data saved:", data);

    setIsSaving(false);
    setIsSavingNew(false);

    if (inputData === "saveAndNew") {
      reset();
    } else {
      closeModal();
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)} className="pt-20">
        <div className="overflow-y-auto max-h-[540px] p-4">
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Create Account</h2>
            <div className="flex space-x-2">
              <Button
                type="primary"
                htmlType="submit"
                name="save"
                className="w-full"
                disabled={isSaving || isSavingNew}
              >
                {isSaving ? <Spin size="small" /> : "Save"}
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                name="saveAndNew"
                className="w-full"
                disabled={isSaving || isSavingNew}
              >
                {isSavingNew ? <Spin size="small" /> : "Save and New"}
              </Button>
              <Button
                type="default"
                className="w-full"
                onClick={closeModal}
                disabled={isSaving || isSavingNew}
              >
                Cancel
              </Button>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-6">Account Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <TextInputField
              name="accountOwner"
              control={control}
              label="Account owner"
              placeholder="Account owner"
              errors={errors}
            />
            <TextInputField
              name="accountName"
              control={control}
              label="Account name"
              placeholder="Account name"
              errors={errors}
            />
            <TextInputField
              name="accountNumber"
              control={control}
              label="Account number"
              placeholder="Account number"
              errors={errors}
            />
            <TextInputField
              name="accountSite"
              control={control}
              label="Account site"
              placeholder="Account site"
              errors={errors}
            />
            <TextInputField
              name="parentAccount"
              control={control}
              label="Parent account"
              placeholder="Parent account"
              errors={errors}
            />
            <SelectField
              name="accountType"
              control={control}
              label="Account type"
              placeholder="Select account type"
              options={["Option1", "Option2", "Option3"]}
              errors={errors}
            />
            <SelectField
              name="industry"
              control={control}
              label="Industry"
              placeholder="Select industry"
              options={["Industry1", "Industry2", "Industry3"]}
              errors={errors}
            />
            <NumberInputField
              name="annualRevenue"
              control={control}
              label="Annual revenue"
              placeholder="Annual revenue"
              errors={errors}
            />
            <SelectField
              name="employees"
              control={control}
              label="Employees"
              placeholder="Select employees"
              options={["1-10", "11-50", "51-200", "201-500", "500+"]}
              errors={errors}
            />
            <TextInputField
              name="createdBy"
              control={control}
              label="Created by"
              placeholder="Created by"
              errors={errors}
            />
            <TextInputField
              name="modifiedBy"
              control={control}
              label="Modified by"
              placeholder="Modified by"
              errors={errors}
            />
            <TextInputField
              name="tickerSymbol"
              control={control}
              label="Ticker symbol"
              placeholder="Ticker symbol"
              errors={errors}
            />
            <SelectField
              name="ownership"
              control={control}
              label="Ownership"
              placeholder="Select ownership"
              options={[
                "Public",
                "Private",
                "Partnership",
                "LLC",
                "Corporation",
              ]}
              errors={errors}
            />
            <SelectField
              name="rating"
              control={control}
              label="Rating"
              placeholder="Select rating"
              options={["High", "Medium", "Low"]}
              errors={errors}
            />
          </div>

          <TextAreaField
            name="description"
            control={control}
            label="Description"
            placeholder="Description"
            errors={errors}
          />

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-6">Address Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <TextInputField
                  name="billingStreet"
                  control={control}
                  label="Billing street"
                  placeholder="Billing street"
                  errors={errors}
                />
                <SelectField
                  name="billingCity"
                  control={control}
                  label="Billing city"
                  placeholder="Select billing city"
                  options={["City1", "City2", "City3"]}
                  errors={errors}
                />
                <SelectField
                  name="billingState"
                  control={control}
                  label="Billing state"
                  placeholder="Select billing state"
                  options={["State1", "State2", "State3"]}
                  errors={errors}
                />
                <TextInputField
                  name="billingCode"
                  control={control}
                  label="Billing code"
                  placeholder="Billing code"
                  errors={errors}
                />
                <SelectField
                  name="billingCountry"
                  control={control}
                  label="Billing country"
                  placeholder="Select billing country"
                  options={["Country1", "Country2", "Country3"]}
                  errors={errors}
                />
              </div>
              <div className="grid gap-4">
                <TextInputField
                  name="shippingStreet"
                  control={control}
                  label="Shipping street"
                  placeholder="Shipping street"
                  errors={errors}
                />
                <SelectField
                  name="shippingCity"
                  control={control}
                  label="Shipping city"
                  placeholder="Select shipping city"
                  options={["City1", "City2", "City3"]}
                  errors={errors}
                />
                <SelectField
                  name="shippingState"
                  control={control}
                  label="Shipping state"
                  placeholder="Select shipping state"
                  options={["State1", "State2", "State3"]}
                  errors={errors}
                />
                <TextInputField
                  name="shippingCode"
                  control={control}
                  label="Shipping code"
                  placeholder="Shipping code"
                  errors={errors}
                />
                <SelectField
                  name="shippingCountry"
                  control={control}
                  label="Shipping country"
                  placeholder="Select shipping country"
                  options={["Country1", "Country2", "Country3"]}
                  errors={errors}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

AccountsForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AccountsForm;
