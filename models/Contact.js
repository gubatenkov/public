import mongoose from 'mongoose';

const contactModel = mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    type: { type: String, default: 'personal' },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactModel);

export default Contact;
