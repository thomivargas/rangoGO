import { model, Schema } from "mongoose";

const ClashOfClansStatsSchema = new Schema({
  tag: String,
  name: String,
  townHallLevel: Number,
  expLevel: Number,
  trophies: Number,
  bestTrophies: Number,
  warStars: Number,
  attackWins: Number,
  defenseWins: Number
}, { _id: false });

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImageURL: {
    type: String
  },
  games: [
    {
      game: { type: String, required: true },
      clashOfClans: ClashOfClansStatsSchema,
      rocketLeague: RocketLeagueStatsSchema,
    }
  ]
});
export default model("User", UserSchema);