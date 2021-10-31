package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"

	"github.com/orgs/somalisintech/teams/2021-hackathon-team-3/model"
	"github.com/orgs/somalisintech/teams/2021-hackathon-team-3/mongo"
)

var selecUsers *mongo.Selection

func init() {
	selecUsers = mongo.NewUserSelection(
		mongo.UsersSelection,
	)

}

type findUsersResponse struct {
	Emails []model.User `json:"handlers"`
}

type CreateUserRequest struct {
	PhoneNumber string         `json:"phoneNumber"`
	FirstName   string         `json:"firstName"`
	LastName    string         `json:"lastName"`
	Alias       string         `json:"alias"`
	Groups      []string       `json:"groups"`
	Location    model.Location `json:"location"`
}

type APIErrorResponse struct {
	StatusCode int      `json:"-"`
	Message    string   `json:"message"`
	Detail     []string `json:"Details"`
}

func FindUser(userRepo mongo.UserRepo) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		id := mux.Vars(r)["id"]
		user, err := userRepo.GetUserByID(context.TODO(), id)
		if err != nil {
			apierr := APIErrorResponse{
				StatusCode: http.StatusBadRequest,
				Message:    "Bad Request",
				Detail:     []string{err.Error()},
			}
			w.WriteHeader(apierr.StatusCode)
			json.NewEncoder(w).Encode(apierr)
			return
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(user)
	}
}

func FindUsers(userRepo mongo.UserRepo) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode("ok")
	}
}

func Update(memberRepo mongo.UserRepo) func(w http.ResponseWriter, r *http.Request) {

	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		var ok = struct {
			Message string
		}{
			Message: "It runs!",
		}
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(ok)
	}
}
