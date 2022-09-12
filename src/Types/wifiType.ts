import {wifis} from '@prisma/client';

export type CreateWifi = Omit<wifis, 'id' | 'createdAt'>