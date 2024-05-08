@echo off

rem Verificar si yarn está instalado
where yarn > nul 2>&1
if %errorlevel% neq 0 (
    echo Yarn no está instalado. Por favor instálalo.
    exit /b 1
)

rem Instalar dependencias e iniciar el servidor de desarrollo
yarn install && call ./ejecucion_windows/run-dev.bat