@echo off
REM Create main folder structure

REM Create the domain layer
mkdir src\domain
mkdir src\domain\usecases
mkdir src\domain\entities
mkdir src\domain\ports

REM Create the application layer
mkdir src\application
mkdir src\application\controllers
mkdir src\application\services

REM Create the infrastructure layer
mkdir src\infrastructure
mkdir src\infrastructure\database
mkdir src\infrastructure\api
mkdir src\infrastructure\config

REM Create entry point files
echo. > src\main.ts
echo. > src\app.module.ts

REM Create domain files (use cases, entities, and ports)
echo. > src\domain\usecases\fetch-and-store-weather.usecase.ts
echo. > src\domain\entities\weather.entity.ts
echo. > src\domain\ports\weather-api-port.interface.ts
echo. > src\domain\ports\weather-repository-port.interface.ts

REM Create application files (controllers and services)
echo. > src\application\controllers\weather.controller.ts
echo. > src\application\services\weather.service.ts

REM Create infrastructure files (database, API, and config)
echo. > src\infrastructure\database\prisma.client.ts
echo. > src\infrastructure\database\weather-repository.adapter.ts
echo. > src\infrastructure\api\weather-api.adapter.ts
echo. > src\infrastructure\config\app.config.ts

echo Folder and file structure created successfully.
pause
