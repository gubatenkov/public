FROM node

WORKDIR .

COPY . .

RUN npm install --production \
    cd client \
    npm install \
    npm run build


EXPOSE 5000

CMD ["node", "server/server.js"]

