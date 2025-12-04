FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Đảm bảo trong package.json của BE bạn có script "dev": "nodemon index.js" (hoặc tên file chính của bạn)
CMD ["npm", "run", "dev"]