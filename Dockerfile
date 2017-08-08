# @see: https://medium.com/ai2-blog/dockerizing-a-react-application-3563688a2378
# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.2.1

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN npm install -g serve
RUN npm run serve
EXPOSE 5000
EXPOSE 9914

# Install all dependencies of the current project.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm run build --production