import Map "mo:core/Map";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";

module {
  type UserProfile = {
    name : Text;
  };

  type Contact = {
    name : Text;
    phoneNumber : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    accessControlState : AccessControl.AccessControlState;
    userProfiles : Map.Map<Principal, UserProfile>;
    contacts : Map.Map<Principal, Contact>;
  };

  type NewActor = {
    siteDomain : Text;
    accessControlState : AccessControl.AccessControlState;
    userProfiles : Map.Map<Principal, UserProfile>;
    contacts : Map.Map<Principal, Contact>;
  };

  public func run(old : OldActor) : NewActor {
    {
      old with
      siteDomain = "AryaTatainsurance";
    };
  };
};
