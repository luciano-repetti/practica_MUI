#!/bin/bash

# Verificar si yarn está instalado
if ! command -v yarn &> /dev/null
then
    echo "Yarn no está instalado. Por favor instálalo."
    exit 1
fi

# Instalar dependencias e iniciar el servidor de desarrollo
yarn install && ./ejecucion_linux/run-dev.bash
