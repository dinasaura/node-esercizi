import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { getUserById } from '../models/user';
import dotenv from 'dotenv';

dotenv.config();

console.log('Loaded environment variables:');
console.log('SECRET:', process.env.SECRET);

const opts = {
  secretOrKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new JwtStrategy(opts, async (payload, done) => {
    try {
      const user = await getUserById(payload.id);
      return user ? done(null, user) : done(new Error('User not found'), false);
    } catch (error) {
      done(error, false);
    }
  })
);

