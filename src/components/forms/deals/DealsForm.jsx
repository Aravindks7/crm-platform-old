import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spin } from "antd";
import { schema } from "./dealSchema";
import {
  TextInputField,
  SelectField,
  NumberInputField,
  TextAreaField,
} from "../FormFields";
import PropTypes from "prop-types";

const DealsForm = ({ closeModal }) => {
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
            <h2 className="text-xl font-semibold">Create Deal</h2>
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

          <h3 className="text-lg font-semibold mb-6">Deal Information</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <SelectField
              name="dealOwner"
              control={control}
              label="Deal owner"
              placeholder="Deal owner"
              options={["Sabu John Bosco"]}
              errors={errors}
            />
            <TextInputField
              name="amount"
              control={control}
              label="Amount"
              placeholder="amount"
              errors={errors}
            />
            <TextInputField
              name="dealName"
              control={control}
              label="Deal name"
              placeholder="Deal name"
              errors={errors}
            />
            <TextInputField
              name="closingDate"
              control={control}
              label="Closing date"
              placeholder="Closing date"
              errors={errors}
            />
            <TextInputField
              name="accountName"
              control={control}
              label="Account name"
              placeholder="Account name"
              errors={errors}
            />
            <SelectField
              name="stage"
              control={control}
              label="Stage"
              placeholder="Select stage"
              options={[
                "Value Proposition, Identify Decision Makers",
                "Proposal/Price Quote",
                "Negotiation/Review",
              ]}
              errors={errors}
            />
            <SelectField
              name="type"
              control={control}
              label="Type"
              placeholder="Select type"
              options={["-None-", "Existing Business", "New Business"]}
              errors={errors}
            />
            <NumberInputField
              name="probability"
              control={control}
              label="Probability(%)"
              placeholder="Probability(%)"
              errors={errors}
            />
            <TextInputField
              name="nextStep"
              control={control}
              label="Next step"
              placeholder="Next step"
              errors={errors}
            />
            <NumberInputField
              name="expectedRevenue"
              control={control}
              label="Expected revenue"
              placeholder="Expected revenue"
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
            <TextInputField
              name="campaignSource"
              control={control}
              label="Campaign source"
              placeholder="Campaign source"
              errors={errors}
            />
            <TextInputField
              name="contactName"
              control={control}
              label="Contact name"
              placeholder="Contact name"
              errors={errors}
            />
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
      </form>
    </div>
  );
};

DealsForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default DealsForm;
