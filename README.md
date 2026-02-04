# Docker Compose Multi‑Container Application
## Objective
Demonstrate container‑to‑container communication using Docker Compose                
with: - Frontend (Nginx) - Backend (Node.js) - Database (MySQL)               

## Architecture
Browser → Frontend (8081) → Backend (5000) → MySQL (3306)                    

## Features
-   Custom bridge network                
-   Named volume for DB persistence              
-   Automatic table creation             
-   Retry logic in backend               
-   Service dependency using compose                       

## How to Run
``` bash             
docker compose up -d           
```             
Open: http://localhost:8081                

## Verification Steps
-   docker ps                  
-   docker logs backend               
-   curl http://localhost:5000/data                
-   mysql -h db -u root -proot testdb                 
-   nc -zv db 3306            

## Learning Outcome
-   Multi container orchestration                   
-   Networking between services                       
-   Volume management                
-   Debugging communication issues                  
