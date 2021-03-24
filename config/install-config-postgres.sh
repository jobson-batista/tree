#!/bin/bash

if [ ! `psql --version | cut -d" " -f1`="psql" ]; then
    echo "Instalando postgresql"
    sudo apt install postgresql postgresql-contrib -y
fi

echo "PostgreSQL instalado!"

echo
echo "Instalando pgAdmin4"

# Instalando a chave publica do repositorio do pgadmin
sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add

# Criando arquivo de configuracao do repositorio para Debian 10 (Buster)
sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/buster pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'

# Instalação de fato do pgAdmin
sudo apt install pgadmin4 -y

# Configuracao do webserver
sudo /usr/pgadmin4/bin/setup-web.sh
