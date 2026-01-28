const { z } = require("zod");

exports.registerSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        role: z.enum(["student", "recruiter", "admin", "teacher"]).optional(), // precise roles
        number: z.string().min(10, "Valid number required"),
    }),
});

exports.loginSchema = z.object({
    body: z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password is required"),
    }),
});
