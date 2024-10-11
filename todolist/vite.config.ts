import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

// Declara a variável config com o tipo string ou undefined
const config: string | undefined = process.env.VITE_PORT;

// Converte a variável config para número, garantindo que tenha um valor
const port: number = parseInt(config || '5173', 10); // Usa 5173 como padrão se config estiver indefinido

export default defineConfig({
  plugins: [react()],
  server: {
    port, // Usa a variável port
  },
});
