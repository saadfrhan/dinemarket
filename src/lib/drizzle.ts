import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import {drizzle} from 'drizzle-orm/vercel-postgres';
import {sql} from '@vercel/postgres';

export const cartTable = pgTable('cart', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').notNull(),
  items_count: integer('items_count').default(0)
});

export const cartItemsTable = pgTable('cart_items', {
  id: serial('id').primaryKey(),
  cart_id: integer('cart_id').references(() => cartTable.id),
  product_id: varchar('product_id', { length: 255 }).notNull(), // Corrected the product_id field
  quantity: integer('quantity').notNull()
});

export const db = drizzle(sql);