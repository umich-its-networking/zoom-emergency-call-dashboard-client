FROM node:lts-alpine

# Set working directory
WORKDIR /usr/src/app

# ENV PATH /app/node_modules/.bin:$PATH

RUN npm install -g @vue/cli
RUN npm install -g typescript

# Install system dependencies 
COPY package.json .
COPY package-lock.json .
RUN npm install

CMD ["npm", "run", "serve"]

# Add app
COPY . .