FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Nên bọc trong sh -c "" như thế này:
CMD sh -c "npx sequelize-auto -h my-wordpress-db-1 -d \$DB_DATABASE -u \$DB_USER -x \$DB_PASSWORD -p \$DB_PORT --dialect \$DB_DIALECT -o src/models -l esm && npm start"