const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user");
require("dotenv").config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB for seeding...");

        const adminEmail = "admin@example.com";
        const adminPassword = "adminpassword123";

        const existingAdmin = await User.findOne({ email: adminEmail });
        if (existingAdmin) {
            console.log("Admin user already exists.");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        const adminUser = new User({
            name: "Super Admin",
            email: adminEmail,
            password: hashedPassword,
            role: "admin",
            number: "0000000000"
        });

        await adminUser.save();
        console.log("Admin user created successfully!");
        console.log(`Email: ${adminEmail}`);
        console.log(`Password: ${adminPassword}`);
    } catch (error) {
        console.error("Error seeding admin:", error);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
};

seedAdmin();
