use SHIMBIR
db = new Mongo().getDB("SHIMBIR");
db.createCollection('handlers', { capped: false });
db.createCollection('groups', { capped: false });
db.createCollection('alerts', { capped: false });
db.users.insert([
    {
        "groups" : [
            ""
        ],
        "meta" : {
            "createdDate" : ISODate("0001-01-01T00:00:00.000+0000"),
            "void" : false
        },
        "lastName" : "Yusuf",
        "alias" : "Somalis in Tech team 3",
        "firstName" : "Jamal",
        "location" : {
            "city" : "Charlotte",
            "country" : "North Carolina",
            "geoLocation" : "35.2271,80.8431"
        },
        "phoneNumber" : "202-111-1111"
    }
]);
db.groups.insert([
    {
        "_id" : ObjectId("617ddfca53faaf72e5531480"),
        "info" : {
            "name" : "early flood warning",
            "description" : "get early warnings about floods in your area",
            "location" : {
                "city" : "Mogadishu",
                "country" : "Somalia",
                "geoLocation" : "2.0469,45.3182"
            }
        },
        "contacts" : [
            "userID",
            "groupID"
        ],
        "management" : [
            {
                "id" : "1",
                "permission" : [
                    "write",
                    "delete"
                ],
                "name" : "Jamal Yusuf"
            }
        ],
        "meta" : {
            "createdDate" : ISODate("0001-01-01T00:00:00.000+0000"),
            "memberCount" : NumberLong(1),
            "city" : "Mogadishu",
            "country" : "Somalia"
        }
    }])
db.alerts.insert([
    {
        "_id" : ObjectId("617de2d353faaf72e553148d"),
        "to" : [
            "userID",
            "GroupID"
        ],
        "message" : {
            "topic" : "info",
            "color" : "blue",
            "text" : "some message"
        },
        "meta" : {
            "sentDate" : ISODate("0001-01-01T00:00:00.000+0000"),
            "void" : false,
            "notSent" : [
                "userId",
                "groupID"
            ]
        }
    }])