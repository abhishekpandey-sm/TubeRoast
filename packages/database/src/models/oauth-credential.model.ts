import { Schema, model, Types } from "mongoose";

interface oAuthCredential {
    userId: Types.ObjectId;
    refreshTokenEncrypted: string;
    scopes: string[];
}

const oAuthCredentialSchema = new Schema<oAuthCredential>(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },
        refreshTokenEncrypted: {
            type: String,
            required: true
        },
        scopes: {
            type: [String],
            default: []
        }
    }, {
        timestamps: true
    }
)

export const OAuthCredential = model<oAuthCredential>("OAuthCredential", oAuthCredentialSchema)