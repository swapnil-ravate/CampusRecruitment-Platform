const { z } = require("zod");

exports.updateProfileSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        mobile: z.string().optional(),
        companyName: z.string().optional(),
        designation: z.string().optional(),
        bio: z.string().optional(),
        location: z.string().optional(),
        skills: z.union([z.string(), z.array(z.string())]).optional(),
    }),
});

exports.jobIdSchema = z.object({
    params: z.object({
        id: z.string().length(24, "Invalid MongoDB ID"),
    }),
});
