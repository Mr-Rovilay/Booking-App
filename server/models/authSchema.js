import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		  },
		  email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
			validate: {
			  validator: (v) => /^\S+@\S+\.\S+$/.test(v), // Basic email format validation
			  message: (props) => `${props.value} is not a valid email!`,
			},
		  },
		  password: {
			type: String,
			required: true,
			minlength: 6, // Minimum password length
		  },
		  profileImage: {
			type: String,
			default: 'default-profile.png', // Default profile image
		  },
		  tripList: {
			type: Array,
			default: [], // Empty trip list by default
		  },
		  wishList: {
			type: Array,
			default: [], // Empty trip list by default
		  },
		  propertyList: {
			type: Array,
			default: [], // Empty trip list by default
		  },
		    reservationList: {
			type: Array,
			default: [], // Empty trip list by default
		  },	
		lastLogin: {
			type: Date,
			default: Date.now,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		resetPasswordToken: String,
		resetPasswordExpiresAt: Date,
		verificationToken: String,
		verificationTokenExpiresAt: Date,
	},
	{ timestamps: true }
);

export const User = mongoose.model("User", userSchema);