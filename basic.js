// You're building an application that requires user login.
// Once logged in the user has a bunch of profile information and preference settings
// available to them. They will need to be able to set their birthday, gender,
// phone number and location (city, state, country). They should be able to provide
// text to tell about themselves. They also should be able to enable and disable the
// visibility of their birthday, gender, phone number, and location.

{
  username: String,
  password: String,
  isLogged: Boolean,
  settings: {
    dob: Date,
    gender: String,
    phone: Integer,
    location: {
      city: String,
      state: String,
      country: String
    },
    isVisible: Boolean
  },
  bio: String
}
