// You're building a restaurant table reserving app that allows users to reserve
// tables for specified numbers of people. The app will need to show only tables
// that are available and the times they are available. The app will need to store
// reservations under a given name with a phone number and number of guests.
{
  tables: {
    available: [
      {
        tableNum: Integer,
        time: Date
      },
      {
        tableNum: Integer,
        time: Date
      }
    ],
    reserved: [
      {
        id: Integer,
        name: String,
        phone: Integer,
        numGuests: integer,
        tableNum: Integer,
        time: Date
      },
      {
        id: Integer,
        tableNum: Integer,
        time: Date
      }
    ]
  }
}


// You're building a backend for a university that requires students to be able to login.
// Once logged in, the students can view the exam grades for their classes.
// They should be able to view results by semester. Each semester should only show the classes
// in which that student is enrolled that semester.
{
  username: String,
  password: String,
  isLogged: Boolean,
  enrolledSemesters: [semesterDate1, semesterDate2, semesterDate3],
  semesterDate1: {
    overallGpa: 4.0
    courses: [
      {
        subject: 'Computer Science 1',
        midterm: 'A',
        final: 'A'
      },
      {
        subject: 'Computer Science 2',
        midterm: 'A',
        final: 'A'
      }
    ]
  },
  semesterDate2: {
    overallGpa: 4.0
    courses: [
      {
        subject: 'Engineering 1',
        midterm: 'A',
        final: 'A'
      },
      {
        subject: 'Engineering 2',
        midterm: 'A',
        final: 'A'
      }
    ]
  }
}
