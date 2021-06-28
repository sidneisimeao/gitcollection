# Imagem de Origem
FROM node:alpine

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /usr/app

# Instalando dependências da aplicação e armazenando em cache.
COPY package.json ./

# Instala dependencias globais
RUN npm install react-scripts@4.0.3 -g --silent

# Instala as dependencias
RUN npm install typescript --silent

# Instala as dependencias
RUN npm install --silent

# Copia o projeto pro container
COPY . .

# Container ficará ouvindo os acessos na porta 3000
EXPOSE 3000

# Inicializa a aplicação
CMD ["npm", "start"]