package main

import (
	"flag"
	"net/http"
	"time"

	log "github.com/sirupsen/logrus"

	"github.com/TV4/graceful"
	"github.com/orgs/somalisintech/teams/2021-hackathon-team-3/handlers"
	"github.com/orgs/somalisintech/teams/2021-hackathon-team-3/mongo"
	"github.com/rs/cors"
)

//variable set during build-time
var (
	BuildVersion = flag.String("buildVersion", "local", "what version of the application is running")
	MongoURL     = flag.String("mongoURL", "mongodb://localhost:47017", "mongo database URL and port")
)

func main() {
	flag.Parse()
	//Build  Repository
	userRepo := mongo.NewUserRepository(*MongoURL)
	router := handlers.BuildRouter(*BuildVersion, userRepo)
	h := &http.Server{Addr: ":" + "8000", Handler: cors.Default().Handler(router)}
	graceful.Timeout = time.Duration(25) * time.Second
	graceful.LogListenAndServe(h, log.New())
}
