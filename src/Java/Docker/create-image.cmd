docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya19-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya19-java/app ../../..
