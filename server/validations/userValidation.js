const { z } = require("zod");

exports.updateProfileSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name is required").optional(),
        email: z.string().email("Invalid email address").optional(),
        number: z.string().min(10, "Valid number required").optional(),
        education: z.string().optional().nullable().or(z.literal("")),
        skills: z.union([z.string(), z.array(z.string())]).optional().nullable().or(z.literal("")),
        location: z.string().optional().nullable().or(z.literal("")),
        experience: z.string().optional().nullable().or(z.literal("")),
        about: z.string().optional().nullable().or(z.literal("")),
        resume: z.string().url("Must be a valid URL").optional().nullable().or(z.literal("")),
        _id: z.string().length(24, "Invalid MongoDB ID").optional(),
    }),
});

exports.jobIdSchema = z.object({
    params: z.object({
        id: z.string().length(24, "Invalid MongoDB ID"),
    }),
});
