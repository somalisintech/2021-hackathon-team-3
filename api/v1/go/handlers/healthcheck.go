package handlers

import (
	"encoding/json"
	"net/http"
	"strings"
)

type ConnectionChecker interface {
	ConnectionCheck() (bool, string, error)
}

//HealthCheck function that returns a middleware for the health check endpoints
func HealthCheck(buildVersion string, cc ...ConnectionChecker) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {

		var response healthCheckResponse
		pingdb := strings.ToLower(r.URL.Query().Get("pingdb")) == "true"

		if pingdb {
			//Check Connections
			for _, c := range cc {

				ok, info, err := c.ConnectionCheck()
				connResponse := connectionResponse{
					Status: "Ok",
					Info:   info,
				}

				if !ok || err != nil {
					connResponse.Status = "Error"
				}

				if err != nil {
					connResponse.Error = err.Error()
				}

				response.Connections = append(response.Connections, connResponse)
			}
		}
		response.APIVersion = buildVersion
		//Write Response
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(200)
		json.NewEncoder(w).Encode(struct {
			Message string
			URL     string
		}{Message: "Hello health works!: QueryValues: " + r.URL.Query().Encode(),
			URL: r.URL.String(),
		})
	}
}

type healthCheckResponse struct {
	Connections []connectionResponse `json:"connections,omitempty"`
	APIVersion  string               `json:"apiVersion,omitempty"`
}

type connectionResponse struct {
	Info   string `json:"info"`
	Status string `json:"status"`
	Error  string `json:"error,omitempty"`
}
