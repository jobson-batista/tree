FROM node:alpine #Versao mais leve, só com o necessario

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3333 #Porta para o front consultar o back

CMD npm start

