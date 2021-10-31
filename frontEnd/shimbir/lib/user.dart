class User {

  String firstName;
  String lastName;
  String alias;
  String phoneNumber;

  User(this.firstName,this.alias,this.phoneNumber [this.lastName = ""]);
  List<String> group = [""];
   var meta = Meta("", false);
}

class Meta {
    String createDate;
    bool Voided;
    Meta(this.createDate, this.Voided);
}

class Location {
  String city;
  String country;
  String geoLocation;
  Location(this.city, this.country, [this.geoLocation = ""]);
}

