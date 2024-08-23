import * as z from 'zod';

export const contactSchema = z.object({
    contactOwner: z.enum(['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown']).optional(),
    firstName: z.string().optional(),
    accountName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    otherPhone: z.string().optional(),
    mobile: z.string().optional(),
    assistant: z.string().optional(),
    leadSource: z.enum(['Website', 'Referral', 'Advertisement', 'Social Media', 'Email Campaign', 'Cold Call', 'Event']).optional(),
    lastName: z.string().optional(),
    vendorName: z.string().optional(),
    title: z.string().optional(),
    department: z.string().optional(),
    homePhone: z.string().optional(),
    fax: z.string().optional(),
    dateOfBirth: z.date().optional(),
    asstPhone: z.string().optional(),
    emailOptOut: z.boolean().optional(),
    skypeId: z.string().optional()
})


export const schema = z.object({
    ...contactSchema.shape,
  });   