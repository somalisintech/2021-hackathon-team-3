package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID          primitive.ObjectID `bson:"_id" json:"_id"`
	PhoneNumber string             `bson:"phoneNumber" json:"phoneNumber"`
	FirstName   string             `bson:"firstName" json:"firstName"`
	LastName    string             `bson:"lastName" json:"lastName"`
	Alias       string             `bson:"alias" json:"alias"`
	Groups      []string           `bson:"groups" json:"groups"`
	Location    Location           `bson:"location" json:"location"`
	Meta        UserMeta           `bson:"meta" json:"meta"`
}

type UserMeta struct {
	CreatedDate time.Time `bson:"createdDate" json:"createdDate"`
	Void        bool      `bson:"void" json:"void"`
}

type Location struct {
	City        string `bson:"city" json:"city"`
	Country     string `bson:"country" json:"country"`
	GeoLocation string `bson:"GeoLocation" json:"GeoLocation"`
}

type Group struct {
	ID         primitive.ObjectID `bson:"_id" json:"_id"`
	Info       GroupInfo          `bson:"info" json:"info"`
	Management []GroupManagement  `bson:"management" json:"management"`
	Meta       GroupMeta          `bson:"meta" json:"meta"`
}

type GroupInfo struct {
	Name        string   `bson:"name" json:"name"`
	Description string   `bson:"description" json:"description"`
	location    Location `bson:"location" json:"location"`
	Contacts    []string `bson:"contacts" json:"contacts"`
}

type GroupManagement struct {
	ID          primitive.ObjectID `bson:"id" json:"id"`
	Permissions []string           `bson:"permission" json:"permission"`
}

type GroupMeta struct {
	CreatedDate time.Time `bson:"createdDate" json:"createdDate"`
	Void        bool      `bson:"void" json:"void"`
}

type Alert struct {
	ID      primitive.ObjectID `bson:"_id" json:"_id"`
	To      []string           `bson:"to" json:"to"`
	Message AlertMessage       `bson:"message" json:"message"`
}

type AlertMessage struct {
	Topic string `bson:"topic" json:"topic"`
	Color string `bson:"color" json:"color"`
	Text  string `bson:"text" json:"text"`
}

type AlertMeta struct {
	sentDate time.Time `bson:"sentDate" json:"sentDate"`
	NotSent  []string  `bson:"notSent" json:"notSent"`
	Void     bool      `bson:"void" json:"void"`
}
