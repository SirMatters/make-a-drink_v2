import { integer, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Ingredient = list({
  fields: {
    name: text({ isRequired: true }),
    alcoholContents: integer({}),
    // TODO: add ingredient images
    // TODO: tags
  },
});
