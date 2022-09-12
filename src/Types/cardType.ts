import {cards} from '@prisma/client';

export type CreateCard = Omit<cards, 'id' | 'createdAt'>