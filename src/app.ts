import express from 'express';
import bodyParser from 'body-parser';
import areaRoutes from './routes/AreaRoutes';
import processRoutes from './routes/ProcessoRoutes';
import { connectDB } from './database';

const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB
connectDB();

app.use('/api/areas', areaRoutes);
app.use('/api/processes', processRoutes);

export default app;
