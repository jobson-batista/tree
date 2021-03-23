#!/bin/bash
clear

#Identificando Distro
so=`hostnamectl | grep 'Operating System' | cut -d: -f2`

#Identificando User
user=`who -u | cut -d" " -f1`

#Identificando caminho atual
pathRole=`pwd`
dicN=node-v14.16.0
NODEJS=node-v14.16.0-linux-x64

echo "+------------------------------+"
echo "| Configurando Ambiente NodeJS |"
echo "|              by Tree         |"
echo "+------------------------------+"
echo ""

echo "Distro:  		$so"
echo "Nome de usuário:	$user"
echo ""

echo "--> Baixando o NodeJS v14.16.0 ..."
echo ""
wget -c -q --show-progress https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz

echo ""
echo "--> Descompactando..."
echo ""
tar -xf $NODEJS.tar.xz

echo ""
echo "Pronto! Descompactado!"
echo ""

echo "Movendo para /opt"
sudo cp -r $NODEJS/ /opt

# Remover arquivos baixados
rm -r node*

echo "export PATH=/opt/$NODEJS/bin:$PATH" >> ~/.profile
. ~/.profile

echo "Pronto!"
echo "Node instalado com sucesso!"
