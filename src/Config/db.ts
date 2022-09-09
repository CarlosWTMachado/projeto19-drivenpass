// import {DATABASEURL} from '../environmentVariables';
// import pg from 'pg';

// const { Pool } = pg;
// const connection = new Pool({
// 	connectionString: DATABASEURL()
// });
// export default connection;

import pkg from '@prisma/client';

const {PrismaClient} = pkg;
const prisma = new PrismaClient()

export default prisma;