FROM node:lts AS builder

# Set environment variables
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies for the root and workspaces
RUN yarn global add lerna
RUN yarn install --frozen-lockfile

# Copy all other files to the container
COPY . .

# Build the project
RUN yarn build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=builder /app/demo/build /usr/share/nginx/html

# Expose the port that Nginx will run on
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]


##docker build -t sampleapp:v1 .
##docker run -p 80:80 sampleapp:v1