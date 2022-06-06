# 2021-hackathon-team-3

### not fully implemented
This was a hackathon project and not fully implemented yet. Apologies.
How to build app;

Pre-requistes:
    Install Docker Hub
```
    cd local-setup/docker
    docker-compose up --build
```

To build independently: 

MongoDB:
Initalise the mongodb Database
Expose to localhost:
 Point to this URI "mongodb://localhost:47017" <-- outside of docker
```
    docker-compose up --build mongo
```

Users API

```
    docker-compose up --build users
```


Groups API

```
    docker-compose up --build groups
```

etc etc


API endpoints w/ Docker

Docker localhost root endpoint: 
    `http://localhost:30088/api`

To hit specific apis;
    `http://localhost:30088/api/${API_NAME}`
    example:
    `http://localhost:30088/api/groups`


To test if Docker is live:
When docker is initialised, it automatically fills in all the collections with dummy data. 
There is a endpoint setup to test if the Mongo is connected and live.

Steps:
1: Go into the mongo database running;
    CLick on Mongo docker instance in Docker Hub
    CLick to access mongo docker using CLI
    Once in the shell, type `mongo`
    Go into the database `SHIMBIR` and find the one document in the collection `users`. Copy the `_id` field. 

2: Hit the endpoint
    Make a GET request to http://localhost:30088/api/fetch_user/${_id}
    GET `http://localhost:30088/api/fetch_user/617e779844108c0a5dafc7dc`