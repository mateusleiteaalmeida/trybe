#!/bin/bash

PATH=$1

if [ -f $PATH ]
then
    echo "$PATH é um arquivo comum"
elif [ -d $PATH ]
then
    echo "$PATH é um diretório"
else
    echo "$PATH é outro tipo de arquivo"
fi
ls -l $PATH