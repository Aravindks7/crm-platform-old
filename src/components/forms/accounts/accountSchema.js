import * as z from "zod";

export const accountSchema = z.object({
  accountOwner: z.string(),
  accountName: z.string().optional(),
  accountNumber: z.string().optional(),
  accountSite: z.string().optional(),
  parentAccount: z.string().optional(),
  accountType: z.enum(["Option1", "Option2", "Option3"]).optional(),
  industry: z.enum(["Industry1", "Industry2", "Industry3"]).optional(),
  annualRevenue: z.number().optional(),
  employees: z.enum(["1-10", "11-50", "51-200", "201-500", "500+"]).optional(),
  createdBy: z.string().optional(),
  modifiedBy: z.string().optional(),
  tickerSymbol: z.string().optional(),
  ownership: z
    .enum(["Public", "Private", "Partnership", "LLC", "Corporation"])
    .optional(),
  rating: z.enum(["Hot", "Warm", "Cold"]).optional(),
  description: z.string().optional(),
});

export const addressSchema = z.object({
  billingStreet: z.string().optional(),
  billingCity: z.enum(["City1", "City2", "City3"]).optional(),
  billingState: z.enum(["State1", "State2", "State3"]).optional(),
  billingCode: z.number().optional(),
  billingCountry: z.enum(["Country1", "Country2", "Country3"]).optional(),
  shippingStreet: z.string().optional(),
  shippingCity: z.enum(["City1", "City2", "City3"]).optional(),
  shippingState: z.enum(["State1", "State2", "State3"]).optional(),
  shippingCode: z.number().optional(),
  shippingCountry: z.enum(["Country1", "Country2", "Country3"]).optional(),
});

export const schema = z.object({
  ...accountSchema.shape,
  ...addressSchema.shape,
});
