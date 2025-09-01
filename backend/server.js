    import express from "express";
    import cors from "cors";
    import fs from "fs";
    import XLSX from "xlsx";
    import nodemailer from "nodemailer";
    import twilio from "twilio";

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.post("/api/contact", async (req, res) => {
        console.log("Form data received:", req.body);
    const { name, email, phone, subject, message } = req.body;
    const date = new Date().toLocaleString();

    // --- Save to Excel ---
    let workbook;
    if (fs.existsSync(filePath)) {
        workbook = XLSX.readFile(filePath);
    } else {
        workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(
        workbook,
        XLSX.utils.aoa_to_sheet([["Name","Email","Phone","Subject","Message","Date"]]),
        "Sheet1"
        );
    }

    const sheet = workbook.Sheets["Sheet1"];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    data.push([name, email, phone, subject, message, date]);
    workbook.Sheets["Sheet1"] = XLSX.utils.aoa_to_sheet(data);
    XLSX.writeFile(workbook, filePath);

    // --- Send Email ---
    const mailOptions = {
        from: "mail id",
        to: "mail id",
        subject: `New Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nDate: ${date}`,
    };
    transporter.sendMail(mailOptions, (err) => {
        if (err) console.error(err);
    });

    // --- Send WhatsApp ---
    try {
        await client.messages.create({
        from: whatsappFrom,
        to: whatsappTo,
        body: `New Contact Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
        });
    } catch (err) {
        console.error("WhatsApp Error:", err);
    }

    res.json({ success: true, message: "Form submitted successfully!" });
    });

    app.listen(5000, () => console.log("Server running on port 5000"));

    const filePath = "./submissions.xlsx";

    // Twilio WhatsApp setup
    const accountSid = "AC id in twillio";
    const authToken = "twilio auth token";
    const client = twilio(accountSid, authToken);
    const whatsappFrom = "whatsapp:+"; // Twilio sandbox number
    const whatsappTo = "whatsapp:+91";

    // Email setup
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "use your mail",
        pass: "use your password",
    },
    });
