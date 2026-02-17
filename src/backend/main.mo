import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Migration "migration";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

// Migrate actor state on upgrade
(with migration = Migration.run)
actor {
  let siteDomain = "AryaTatainsurance";
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  public type Contact = {
    name : Text;
    phoneNumber : Text;
    email : Text;
    message : Text;
  };

  module Contact {
    public func compare(contact1 : Contact, contact2 : Contact) : Order.Order {
      switch (Text.compare(contact1.name, contact2.name)) {
        case (#equal) { Text.compare(contact1.email, contact2.email) };
        case (order) { order };
      };
    };
  };

  let userProfiles = Map.empty<Principal, UserProfile>();
  let contacts = Map.empty<Principal, Contact>();

  // Expose the site domain via a shared query function
  public shared query ({ caller }) func getSiteDomain() : async Text {
    siteDomain;
  };

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form submission - accessible to any user including guests
  public shared ({ caller }) func submitContact(contact : Contact) : async () {
    // No authorization check - any user including guests can submit contact forms
    contacts.add(caller, contact);
  };

  // Retrieve a specific contact - admin only
  public query ({ caller }) func getContact(user : Principal) : async ?Contact {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can retrieve contacts");
    };
    contacts.get(user);
  };

  // Retrieve all contacts - admin only
  public query ({ caller }) func getAllContacts() : async [Contact] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can retrieve all contacts");
    };
    contacts.values().toArray().sort();
  };
};
