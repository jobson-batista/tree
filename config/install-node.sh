#!/bin/bash
clear

#Identificando Distro
so=`hostnamectl | grep 'Operating System' | cut -d: -f2`

#Identificando User
user=`who -u | cut -d" " -f1`

#Identificando caminho atual
NODEJS=node-v14.16.0-linux-x64
OPT=$HOME/opt

echo "+------------------------------+"
echo "| Configurando Ambiente NodeJS |"
echo "|              by Tree         |"
echo "+------------------------------+"
echo

echo "Distro:  		$so"
echo "Nome de usuário:	 $user"
echo

echo "--> Baixando o NodeJS v14.16.0 ..."
echo
wget -c -q --show-progress https://nodejs.org/dist/v14.16.0/node-v14.16.0-linux-x64.tar.xz

echo
echo "--> Descompactando..."
echo
tar -xf $NODEJS.tar.xz

echo
echo "Pronto! Descompactado!"
echo

if [ ! -d $OPT ]; then
	sudo mkdir $OPT
fi

echo "Copiando $NODEJS para $OPT"
sudo cp -r $NODEJS/ $OPT

# Remover arquivos baixados
rm -r node*

# Alterando proprietário do diretório para o usuario atual
sudo chown -R $(whoami) $OPT/$NODEJS

echo "export PATH=$OPT/$NODEJS/bin:$PATH" >> ~/.profile

echo "--> Pronto!"

. ~/.profile

if [ `node -v` &> /dev/null = "bash: node: command not found"]; then
	echo "O Node não foi instalado corretamente"
else
	echo
	echo "Instalando o Angular CLI"
	echo
	npm i -g @angular/cli
fi
