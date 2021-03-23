#!/bin/bash

clear
#Identificando Distro
so=`hostnamectl | grep 'Operating System' | cut -d: -f2`

#Identificando User
user=`who -u | cut -d" " -f1`

#Identificando caminho atual
pathRole=`pwd`
dicName=node-v14.16.0

echo "+------------------------------+"
echo "| Configurando Ambiente NodeJS |"
echo "|              by Tree         |"
echo "+------------------------------+"
echo ""

echo "Distro:  $so"
echo "User:     $user"
echo ""

echo "--> Baixando o NodeJS v14.16.0 ..."
echo ""
wget -c -q --show-progress https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz -O $dicName.tar.xz

echo ""
echo "--> Descompactando..."
echo ""
tar -xf $dicName.tar.xz

echo ""
echo "Pronto! Descompactado!"
echo ""

echo "Movendo para $HOME/.local/opt"
# mv $dicName/ $HOME/.local/opt

# rm -r node*



