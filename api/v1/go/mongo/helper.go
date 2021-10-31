package mongo

import (
	"context"
	"encoding/json"
	"time"

	"github.com/prometheus/common/log"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"go.mongodb.org/mongo-driver/tag"
)

//AppName used in setting various driver options
const AppName = "sit-shimbir-v1"

//QueryTimeout used to set a timeout on a query
var QueryTimeout = 30 * time.Second

//ConnectionTimeout used to set a timeout on a server connection
var ConnectionTimeout = 60 * time.Second

//SocketTimeout used to set a timeout for a socket read/write to return
var SocketTimeout = 60 * time.Second

//OperationWithTimeout returns context with a set time limit
func OperationWithTimeout(ctx context.Context) context.Context {
	ctxWithTimeout, _ := context.WithTimeout(ctx, QueryTimeout)
	return ctxWithTimeout
}

//SetOptionsForMongoClient creates a pre-defined struct for setting basic connection settings
func SetOptionsForMongoClient(tags string) *options.ClientOptions {
	opts := &options.ClientOptions{
		AppName:        NewString(AppName),
		ConnectTimeout: &ConnectionTimeout,
		SocketTimeout:  &SocketTimeout,
		ReadPreference: getReadPreference(tags),
	}
	return opts
}

//SetOptionsForFind creates a pre-defined struct for all FIND operations
func SetOptionsForFind(ctx context.Context) *options.FindOptions {
	opts := &options.FindOptions{
		Comment: NewString(AppName + "-find, CID: "),
		MaxTime: &QueryTimeout,
	}
	return opts
}

//SetOptionsForFindOne creates a pre-defined struct for all FIND-ONE operations
func SetOptionsForFindOne(ctx context.Context) *options.FindOneOptions {

	opts := &options.FindOneOptions{
		Comment: NewString(AppName + "-findOne, CID: "),
		MaxTime: &QueryTimeout,
	}
	return opts
}

//getReadPreference returns the read prefence accordingly with or without tags set
func getReadPreference(tagsValue string) *readpref.ReadPref {
	tags, err := getTagsFromConfig(tagsValue)

	if tags == nil {
		msg := "Connection will be established without tags"

		if err != nil {
			log.Debugf("%v. Error encountered when retrieving tags: %v", msg, err)
		} else {
			log.Debugf("%v. No tags provided", msg)
		}
		return readpref.SecondaryPreferred()
	}

	return readpref.SecondaryPreferred(readpref.WithTagSets(tags))
}

//getTagsFromConfig attempts to retrieve tags from the config value
func getTagsFromConfig(value string) (tag.Set, error) {
	if value != "" {
		var tags tag.Set
		err := json.Unmarshal([]byte(value), &tags)
		return tags, err
	}
	return nil, nil
}

func NewString(s string) *string {
	return &s
}
