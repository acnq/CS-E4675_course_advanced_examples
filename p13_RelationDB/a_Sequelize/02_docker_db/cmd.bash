docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres
docker ps
docker exec -it <COUNTAINER ID> psql -U postgres postgres