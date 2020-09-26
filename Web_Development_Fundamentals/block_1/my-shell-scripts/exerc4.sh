#!/bin/bash

PATH=/home/mateus/Documentos/1_5
if [ -e $PATH ]
then
    echo "O caminho $PATH está habilitado"
fi
if [ -w $PATH ]
then
    echo "Você tem permissão para editar $PATH"
else
    echo "Você não foi autorizado a editar $PATH"
fi