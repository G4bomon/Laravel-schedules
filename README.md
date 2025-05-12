# Como instalar la aplicacion 

para instalar la aplicacion primero realiza un git clone al repositorio

despues debes instalar una serie de librerias esto es mediante los siguientes codigos, entra a la raiz del proyecto y ejecuta 

```
composer install

```

y

```
npm install

```

## Setear al .env

para esto entra en vs code y abre la carpeta, entra en en .env.example, copia el contenido y pegalo en un archivo .env nuevo

## opcional: cambia el DB_CONNECTION para vincularlo con mysql

yo use sqlite pero trabaja igual solo modifica los datos en DB_CONNECTION dentro del .env 

## Pasos finales

ejecuta el codigo de

```
php artisan migrate

```

y luego ejecuta el comando para generar una key de applicacion que es

```
php artisan key:generate

```

con esto ya todo deberia funcionar y puedes lanzar la aplicacion con 

```
compser run dev

```

y deberia lanzarte una conexion en el puerto http://127.0.0.1:8000

