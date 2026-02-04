# Commands Used 
## Start Services
`docker compose up -d`

## Check Containers
`docker ps `         
`docker compose ps`              

## View Logs
`docker logs backend`           
`docker logs database`           

## Enter Containers
`docker exec -it backend sh`         
`docker exec -it frontend sh`        

## Test Communication 
`mysql -h db -u root -proot testdb`            
`nc -zv db 3306`          
`curl http://backend:5000/data`            

## Restart
`docker compose down -v`            
`docker compose up -d`                

## Network Inspect
`docker network inspect`           
