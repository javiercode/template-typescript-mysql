# Descargando la imagen alpine de Node.js
FROM node:16-alpine3.15

# Ir a la carpeta de trabajo
WORKDIR /usr/app

# copiando archivos del package.json desde la maquina local a la imagen
COPY package*.json ./

# Instalación de dependencias
RUN npm install --legacy-peer-deps

# Copiando todo de la maquina local a la imagen
COPY . .

RUN npm run build
# COPY ormconfig.json ./build/
# COPY .env ./build/
WORKDIR ./build

# Exponiendo el puerto 3000
EXPOSE 4000

# El comando con el cual se inicializara el contenedor
CMD node index.js
# CMD ["node", "src/bin/www"]