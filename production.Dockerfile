FROM	node:16-alpine
WORKDIR /usr/src/app/

# Build backend
COPY    backend/. .
COPY    .env .

RUN     npm install

# Running env
ARG     NODE_ENV
ENV     NODE_ENV=${NODE_ENV}

CMD ["npm", "run", "start"] 
