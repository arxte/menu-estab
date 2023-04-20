FROM node:14-alpine
WORKDIR /back
COPY package.json /back/
RUN npm install
COPY . /app/
EXPOSE 3000
CMD ["npm", "run", "start"]