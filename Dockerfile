# Utiliza una imagen base de Node.js
FROM node:14

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de la aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Puerto en el que la aplicación estará escuchando
EXPOSE 8800

# Variables de entorno para la conexión a la base de datos PostgreSQL
ENV DB_PORT=5432
ENV DB_HOST=localhost
ENV DB_USER=postgres
ENV DB_PASS=root
ENV DB_NAME=pldiplomado_db

# Comando para iniciar la aplicación
CMD ["npm", "start"]
