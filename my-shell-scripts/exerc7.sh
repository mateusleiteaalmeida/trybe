#!/bin/bash

DIRECTORY=$1
if [ -d $DIRECTORY ]
then
    PATH=`ls -l $DIRECTORY | wc -l`
    echo "O $DIRECTORY tem $PATH arquivos."
else
    echo "O argumento $DIRECTORY não é um diretório!"
fi