import mongoose, { Schema, model } from "mongoose";

interface IUser {
    name: string;
    email: string;
    googleId: string;
    avatar: string | null;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: null
    }
},
{
    timestamps: true
}
)

export const User = model<IUser>("User", userSchema)