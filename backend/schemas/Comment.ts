import { relationship, select, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const trackingFields = {
  createdAt: timestamp({
    access: { create: false, read: true, update: false },
    defaultValue: () => `${new Date().getTime()}`,
    ui: {
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'read' },
    },
  }),
  author: relationship({
    ref: 'User',
    many: false,
    access: { create: false, read: true, update: false },
    // TODO: adjust default value
    defaultValue: ({ context: { session } }) =>
      session ? { connect: { id: session.itemId } } : null,
    ui: {
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'read' },
    },
  }),
  updatedAt: timestamp({
    access: { create: false, read: true, update: false },
    hooks: {
      resolveInput: () => new Date().getTime().toString(),
    },
    ui: {
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'read' },
    },
  }),
  status: select({
    options: [
      { label: 'Draft', value: 'DRAFT' },
      { label: 'Approved', value: 'APPROVED' },
      { label: 'Disabled', value: 'DISABLED' },
    ],
    defaultValue: 'DRAFT',
    ui: {
      displayMode: 'segmented-control',
      createView: { fieldMode: 'hidden' },
    },
  }),
};

export const Comment = list({
  fields: {
    ...trackingFields,
    isFor: relationship({ ref: 'Cocktail' }),
    bodyText: text(),
    likedBy: relationship({
      ref: 'User',
      many: true,
    }),
    replyingTo: relationship({ ref: 'Comment' }),
  },
});
