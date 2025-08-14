# Use the official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .


# Build the Next.js app


RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Build and start when container starts (runtime)
CMD ["sh", "-c", "npm run build && npm start"]
