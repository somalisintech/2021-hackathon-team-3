import mongoose from "mongoose"
import MUUID from "uuid-mongodb"
const groupUUID = MUUID.v1()
const Schema = mongoose.Schema

const UserSchema = new Schema({
    info: {
        groupName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        contacts: {type: [String], required: true}, // Not working 
        createdDate: {
            type: Date,
            required: true,
            default: Date.now()
        }
    },
    management: [{    // Not working
        userId: {
            name: {
                type: String,
                required: true,
            },
            Permission: {
                required: true,
                type: [String],
                enum : ['Write','Delete', 'Read', 'Get'],
                default: 'Write'
            }
        }
    }
    ],
    meta: {
        createdDate: {
            type: Date,
            required: true,
            default: Date.now()
        },
        deletedDate: {
                type: Date,
        },
        id: {
            type: String,
            required: true,
            default: groupUUID
        },
        notvoid: {
            type: Boolean,
            default: true,
        }
    }

});

export const User = mongoose.model("User", UserSchema);


