package handlers

import (
	"github.com/gorilla/mux"
	"github.com/orgs/somalisintech/teams/2021-hackathon-team-3/mongo"
	"go.elastic.co/apm/module/apmgorilla"
)

//BuildRouter builds the router for handlers
func BuildRouter(buildVersion string, userRepo mongo.UserRepo) *mux.Router {
	router := NewMuxRouter()

	//Health Check
	router.HandleFunc("/health", HealthCheck(buildVersion, userRepo)).Methods("GET")

	//Config
	//if config.FeatureFlags.UseRouteForConfigs == true {
	//	router.HandleFunc("/config", config.Config(buildVersion)).Methods("GET")
	//}

	//Find User with Id
	//router.HandleFunc("/{id}",FindMemberEmails(userRepo)).Methods("GET")
	//router.HandleFunc("/{id}", healthcheck.HealthCheck(buildVersion, userRepo)).Methods("GET")
	router.HandleFunc("/create_user", HealthCheck(buildVersion, userRepo)).Methods("POST")
	router.HandleFunc("/modify_user", HealthCheck(buildVersion, userRepo)).Methods("POST")
	router.HandleFunc("/find_users", HealthCheck(buildVersion, userRepo)).Methods("GET")
	router.HandleFunc("/fetch_user/{id}", FindUser(userRepo)).Methods("GET")
	router.HandleFunc("/delete_user/{id}", HealthCheck(buildVersion, userRepo)).Methods("DELETE")
	return router
}

//NewMuxRouter creates a sensible default mux.Router to start with
func NewMuxRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	router.Use(apmgorilla.Middleware())
	return router
}
