import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spin } from "antd";
import { schema } from "./contactSchema";
import { TextInputField, SelectField, CheckBoxField } from "../FormFields";
import PropTypes from "prop-types";

const ContactsForm = ({ closeModal }) => {
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
            <h2 className="text-xl font-semibold ">Edit Contact</h2>
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

          <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <SelectField
              name="contactOwner"
              control={control}
              label="Contact Owner"
              placeholder="Select Contact Owner"
              options={["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]}
              errors={errors}
            />
            <SelectField
              name="leadSource"
              control={control}
              label="Lead Source"
              placeholder="Select Lead Source"
              options={["Trade Show"]}
              errors={errors}
            />
            <TextInputField
              name="firstName"
              control={control}
              label="First Name"
              placeholder="Select First Name"
              errors={errors}
            />
            <TextInputField
              name="lastName"
              control={control}
              label="Last Name"
              placeholder="Last Name"
              errors={errors}
            />
            <TextInputField
              name="accountName"
              control={control}
              label="Account Name"
              placeholder="Account Name"
              errors={errors}
            />
            <TextInputField
              name="vendorName"
              control={control}
              label="Vendor Name"
              placeholder="Vendor Name"
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
              name="title"
              control={control}
              label="Title"
              placeholder="Title"
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
              name="department"
              control={control}
              label="Department"
              placeholder="Department"
              errors={errors}
            />
            <TextInputField
              name="otherPhone"
              control={control}
              label="Other Phone"
              placeholder="Other Phone"
              errors={errors}
            />
            <TextInputField
              name="homePhone"
              control={control}
              label="Home Phone"
              placeholder="Home Phone"
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
              name="fax"
              control={control}
              label="Fax"
              placeholder="Fax"
              errors={errors}
            />
            <TextInputField
              name="assistant"
              control={control}
              label="Assistant"
              placeholder="Assistant"
              errors={errors}
            />
            <TextInputField
              name="dateOfBirth"
              control={control}
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              errors={errors}
            />
            <div className="col-start-2 col-end-3">
              <TextInputField
                name="asstPhone"
                control={control}
                label="Assistant Phone"
                placeholder="Assistant Phone"
                errors={errors}
              />
              <div className="pb-8">
                <CheckBoxField
                  name="emailOptOut"
                  control={control}
                  label="Email Opt Out"
                  errors={errors}
                />
              </div>
              <TextInputField
                name="skypeId"
                control={control}
                label="Skype ID"
                placeholder="Skype ID"
                errors={errors}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

ContactsForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ContactsForm;
