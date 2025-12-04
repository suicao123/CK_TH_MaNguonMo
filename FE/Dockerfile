FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

# Vite mặc định chạy port 5173, nhưng ta sẽ ép nó chạy port 3000 cho chuẩn
EXPOSE 3000

# Dùng host để Docker bên ngoài truy cập được
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]