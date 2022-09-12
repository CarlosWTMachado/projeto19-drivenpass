import {notes} from '@prisma/client';

export type CreateNote = Omit<notes, 'id' | 'createdAt'>