import * as z from "zod";

export const leadSchema = z.object({
  leadImage: z.string().optional(),
  leadOwner: z.string().optional(),
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  title: z.string().optional(),
  leadSource: z.enum(['Website', 'Referral', 'Advertisement', 'Social Media', 'Email Campaign', 'Cold Call', 'Event']).optional(),
  industry: z.enum(['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Consulting', 'Real Estate']).optional(),
  annualRevenue: z.number().optional(),
  emailOptOut: z.boolean().optional(),
  company: z.string().optional(),
  fax: z.string().optional(),
  website: z.string().optional(),
  leadStatus: z.enum(['New', 'Contacted', 'Qualified', 'Unqualified', 'Converted', 'Lost']).optional(),
  numberOfEmployees: z.number().optional(),
  rating: z.enum(['Hot', 'Warm', 'Cold']).optional(),
  skypeId: z.string().optional(),
  secondaryEmail: z.string().optional(),
  twitter: z.string().optional(),
  description: z.string().optional(),
});


export const addressSchema = z.object({
  street: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  country: z.string().optional(),
});

export const schema = z.object({
  ...leadSchema.shape,
  ...addressSchema.shape,
});
