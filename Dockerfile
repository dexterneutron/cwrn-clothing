FROM node:latest AS development
ENV NODE_ENV development
# Add a work directory
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]