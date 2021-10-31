package mongo

import (
	"context"
	"errors"

	"go.mongodb.org/mongo-driver/mongo/options"

	log "github.com/sirupsen/logrus"

	"github.com/orgs/somalisintech/teams/2021-hackathon-team-3/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

const (
	UsersSelection  = "users"
	GroupsSelection = "groups"
	AlertsSelection = "alerts"
)

//Selection defines which fields are returned
type Selection struct {
	bson bson.M
}

type UserSearchParameters struct {
	LastName  string `json:"lastname"`
	FirstName string `json:"firstname"`
}

//Add adds the specified path to the selection
func (s *Selection) Add(str string) {
	s.bson[str] = 1
}

// NewUserSelection create a new Selection for the given fields
func NewUserSelection(fields ...string) *Selection {
	b := bson.M{}
	for _, field := range fields {
		b[string(field)] = 1
	}
	return &Selection{b}
}

type UserRepo interface {
	GetUserByID(ctx context.Context, id string) (users model.User, err error)
	ConnectionCheck() (bool, string, error)
}

// UserRepository MongoDB implementation of the UserRepo interface
type UserRepository struct {
	client *mongo.Client
}

func (ur *UserRepository) GetUserByID(ctx context.Context, id string) (users model.User, err error) {
	queryName := "GetByID"
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		err = errors.New("Invalid Object Id")
		return
	}

	// query
	filter := bson.M{"_id": objID}

	// Get a handle for user collection
	UsersCollection := ur.client.Database("SHIMBIR").Collection("users")

	// run query
	if err := UsersCollection.FindOne(ctx, filter).Decode(&users); err != nil {
		log.Errorf("Error executing %s query: %v", queryName, err)
	}

	return
}

// ConnectionCheck checks the connection to the underlying DB
func (ur *UserRepository) ConnectionCheck() (bool, string, error) {
	//Ping
	if err := ur.client.Ping(context.Background(), nil); err != nil {
		return false, "", err
	}
	return true, "", nil
}

// NewUserRepository create a new NewUserRepository
func NewUserRepository(mongoURL string) *UserRepository {
	log.Infof("Establishing session for MemberRepository")
	ctx := OperationWithTimeout(context.Background())
	// Set client options
	opts := &options.ClientOptions{
		AppName:        NewString(AppName),
		ConnectTimeout: &ConnectionTimeout,
		SocketTimeout:  &SocketTimeout,
	}
	clientOptions := opts.ApplyURI(mongoURL)

	// Connect to MongoDB
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("Error connecting to MongoDB Client for UserRepository", err)
	}
	if err := client.Ping(ctx, nil); err != nil {
		log.Fatal("Error pinging MongoDB Database for UserRepository", err)
	}
	log.Infof("Successfully pinged  MongoDB database for UserRepository")

	log.Infof("Successfully connected to MongoDB client for UserRepository")
	return &UserRepository{client: client}
}
