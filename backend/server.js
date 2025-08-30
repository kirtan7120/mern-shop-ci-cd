import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';   // Security headers
import morgan from 'morgan';   // Logging
import 'dotenv/config';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import healthRoute from "./routes/healthRoutes.js";

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";

const port = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Connect to MongoDB
connectDB();

const app = express();

// ----------------- Middlewares -----------------
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // adds security headers
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Logging
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined')); // production logs
}

// ----------------- Static uploads -----------------
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ----------------- API Routes -----------------
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/orders', orderRoutes);
app.use('/api/v1/upload', uploadRoutes);
app.use('/api/v1/payment', paymentRoutes);
app.use("/api/v1/health", healthRoute);

// ----------------- Root Route -----------------
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// ----------------- Error Handlers -----------------
app.use(notFound);
app.use(errorHandler);

// ----------------- Server -----------------
app.listen(port, () => {
  console.log(`🚀 Server running in ${NODE_ENV} mode on port ${port}`);
});
