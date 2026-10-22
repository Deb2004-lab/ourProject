import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import dotenv from 'dotenv';
import { kMaxLength } from 'buffer';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"],
        trim: true,
        maxLength: [50, "Name cant exceed 50 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, "please fill a valid email address"],
    },
    password: {
        type: String,
        required: [true, "password is Required"],
        select: false,
        minLength: [8, "password must be 8 characters long"]
    },
    role: {
        type: "student",
        enum: ["student", "Teacher", "Admin"]
    },
    resetpasswordToken: string,
    resetpasswordExpired: Date,

    department: {
        type: string,
        trim: true,
        default: null,
    },
    experties: {
        type: [string],
        default: [],
    },
    maxStudents: {
        type: Number,
        default: 10,
        min: [1, "min student at least 1"]
    },
    assignedStudents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    supervisor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        default: null,
    },
}, {
    timestamp: true,
}
);