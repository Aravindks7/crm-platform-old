import * as z from "zod";

export const dealSchema = z.object({
  dealOwner: z.enum(["Sabu John Bosco"]),
  dealName: z.string().optional(),
  accountName: z.string().optional(),
  type: z.enum(["-None-", "Existing Business", "New Business"]).optional(),
  nextStep: z.string().optional(),
  leadSource: z
    .enum([
      "Website",
      "Referral",
      "Advertisement",
      "Social Media",
      "Email Campaign",
      "Cold Call",
      "Event",
    ])
    .optional(),
  contactName: z.string().optional(),
  amount: z.number().optional(),
  closingDate: z.date().optional(),
  stage: z
    .enum([
      "Value Proposition, Identify Decision Makers",
      "Proposal/Price Quote",
      "Negotiation/Review",
    ])
    .optional(),
  probability: z.number().optional(),
  expectedRevenue: z.number().optional(),
  campaignSource: z.string().optional(),

  description: z.string().optional(),
});

export const schema = z.object({
  ...dealSchema.shape,
});
