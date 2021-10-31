FROM mongo
COPY mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js
RUN sed -i '/use SHIMBIR/d' /docker-entrypoint-initdb.d/mongo-init.js