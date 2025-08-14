# Use the official Node.js image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build
ENV MONGODB_URI=mongodb+srv://saipranayt314:saipranay12@cluster0.maeisbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
# Expose the port Next.js runs on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
