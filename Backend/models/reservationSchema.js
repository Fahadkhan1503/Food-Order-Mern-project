import mongoose from "mongoose";
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [4, "First name must contain at least 4 Characters..."],
        maxLength: [15, "First name must contain at least 15 Characters..."],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [4, "Last name must contain at least 4 Characters..."],
        maxLength: [15, "Last name must contain at least 15 Characters..."],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid Email Address!!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone Number must contain 11 digits..."],
        maxLength: [11, "Phone Number must contain 11 digits..."],
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);