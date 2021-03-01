import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  statelessSessions,
  withItemData,
} from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';
import { Cocktail } from './schemas/Cocktail';
import { Comment } from './schemas/Comment';
import { Ingredient } from './schemas/Ingredient';
import { CocktailImage } from './schemas/CocktailImage';
import { User } from './schemas/User';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const databasUrl = process.env.DATABASE_URL;

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default withAuth(
  config({
    db: {
      adapter: 'mongoose',
      url: databasUrl,
    },
    lists: createSchema({ User, Cocktail, CocktailImage, Comment, Ingredient }),
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
