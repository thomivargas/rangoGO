import { model, Schema } from "mongoose";

const GameStatSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  game: {
    type: String,
    required: true
  },
  stats: {
    kills: { type: Number, default: 0 },
    deaths: { type: Number, default: 0 },
    assists: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 },
    rank: { type: String },
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

export default model('GameStat', GameStatSchema);