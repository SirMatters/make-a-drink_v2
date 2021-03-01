import { text, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { trackingFields } from './Comment';

export const Cocktail = list({
  fields: {
    ...trackingFields,
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'CocktailImage.cocktail',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    ingredients: relationship({
      ref: 'Ingredient',
      many: true,
    }),
    // TODO: tags
  },
});
