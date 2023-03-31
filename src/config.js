import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || 'bmsaoilcvwbfmbmjv2co-mysql.services.clever-cloud.com';
export const DB_USER = process.env.DB_USER || 'uc8zt1zb41h6b8uy';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'HsxENArK0dWXHGTdF4fe';
export const DB_DATABASE = process.env.DB_DATABASE || 'bmsaoilcvwbfmbmjv2co';
export const DB_PORT = process.env.DB_PORT || 3306;
