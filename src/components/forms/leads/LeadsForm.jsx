import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spin } from "antd";
import { schema } from "./leadSchema";
import {
  TextInputField,
  SelectField,
  NumberInputField,
  TextAreaField,
  CheckBoxField,
} from "../FormFields";
import PropTypes from "prop-types";

const LeadsForm = ({ closeModal }) => {
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
            <h2 className="text-xl font-semibold">Create Lead</h2>
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

          <h3 className="text-lg font-semibold mb-6">Lead Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <TextInputField
              name="leadOwner"
              control={control}
              label="Lead owner"
              placeholder="Lead owner"
              errors={errors}
            />
            <TextInputField
              name="company"
              control={control}
              label="Company"
              placeholder="Company"
              errors={errors}
            />
            <TextInputField
              name="firstName"
              control={control}
              label="First name"
              placeholder="First name"
              errors={errors}
            />
            <TextInputField
              name="lastName"
              control={control}
              label="Last name"
              placeholder="Last name"
              errors={errors}
            />
            <TextInputField
              name="title"
              control={control}
              label="Title"
              placeholder="Title"
              errors={errors}
            />
            <TextInputField
              name="email"
              control={control}
              label="Email"
              placeholder="Email"
              errors={errors}
            />
            <TextInputField
              name="phone"
              control={control}
              label="Phone"
              placeholder="Phone"
              errors={errors}
            />
            <TextInputField
              name="fax"
              control={control}
              label="Fax"
              placeholder="Fax"
              errors={errors}
            />
            <TextInputField
              name="mobile"
              control={control}
              label="Mobile"
              placeholder="Mobile"
              errors={errors}
            />
            <TextInputField
              name="website"
              control={control}
              label="Website"
              placeholder="Website"
              errors={errors}
            />
            <SelectField
              name="leadSource"
              control={control}
              label="Lead source"
              placeholder="Select lead source"
              options={[
                "Website",
                "Referral",
                "Advertisement",
                "Social Media",
                "Email Campaign",
                "Cold Call",
                "Event",
              ]}
              errors={errors}
            />
            <SelectField
              name="leadStatus"
              control={control}
              label="Lead status"
              placeholder="Select lead status"
              options={[
                "New",
                "Contacted",
                "Qualified",
                "Unqualified",
                "Converted",
                "Lost",
              ]}
              errors={errors}
            />
            <SelectField
              name="industry"
              control={control}
              label="Industry"
              placeholder="Select industry"
              options={[
                "Technology",
                "Healthcare",
                "Finance",
                "Education",
                "Retail",
                "Manufacturing",
                "Consulting",
                "Real Estate",
              ]}
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
            <NumberInputField
              name="annualRevenue"
              control={control}
              label="Annual revenue"
              placeholder="Annual revenue"
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
            <TextInputField
              name="skypeId"
              control={control}
              label="Skype ID"
              placeholder="Skype ID"
              errors={errors}
            />
            <TextInputField
              name="secondaryEmail"
              control={control}
              label="Secondary email"
              placeholder="Secondary email"
              errors={errors}
            />
            <TextInputField
              name="twitter"
              control={control}
              label="Twitter"
              placeholder="Twitter"
              errors={errors}
            />
            <CheckBoxField
              name="emailOptOut"
              control={control}
              label="Email opt out"
              errors={errors}
            />
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-6">Address Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <TextInputField
                  name="street"
                  control={control}
                  label="Street"
                  placeholder="Street"
                  errors={errors}
                />

                <SelectField
                  name="state"
                  control={control}
                  label="State"
                  placeholder="Select state"
                  options={["State1", "State2", "State3"]}
                  errors={errors}
                />

                <SelectField
                  name="country"
                  control={control}
                  label="Country"
                  placeholder="Select country"
                  options={["Country1", "Country2", "Country3"]}
                  errors={errors}
                />
              </div>
              <div className="space-y-4">
                <SelectField
                  name="city"
                  control={control}
                  label="City"
                  placeholder="Select city"
                  options={["City1", "City2", "City3"]}
                  errors={errors}
                />
                <TextInputField
                  name="zipCode"
                  control={control}
                  label="Zip code"
                  placeholder="Zip code"
                  errors={errors}
                />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-6">
                Description Information
              </h3>
              <TextAreaField
                name="description"
                control={control}
                label="Description"
                placeholder="Description"
                errors={errors}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

LeadsForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LeadsForm;
