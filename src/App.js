import React, { useState } from "react";

const data = [
  {
    teacherName: "Jade Pineda",
    userName: "jp",
    userPin: 1111,
    assignments: [
      {
        assignmentName: "Dichotomous Key",
        assignmentDescription:
          "Create a dichotomous key to classify different types of leaves.",
        assignmentAverage: 89,
      },
      {
        assignmentName: "Solar System Model",
        assignmentDescription:
          "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
        assignmentAverage: 59,
      },
      {
        assignmentName: "Chemical Reactions",
        assignmentDescription:
          "Investigate and document three chemical reactions that produce noticeable changes.",
        assignmentAverage: 78,
      },
      {
        assignmentName: "Ecosystem Research",
        assignmentDescription:
          "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
        assignmentAverage: 98,
      },
    ],
    allStudents: [
      {
        firstName: "Emma",
        lastName: "Thompson",
        average: 82,
        studentId: "111",
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 76,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 78,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 53,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 87,
          },
        ],
      },
      {
        firstName: "Noah",
        lastName: "Johnson",
        average: 82,
        studentId: "187",
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 18,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 75,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 13,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 67,
          },
        ],
      },
      {
        firstName: "Olivia",
        lastName: "Smith",
        average: 92,
        studentId: "002",
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 91,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 78,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 10,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 53,
          },
        ],
      },
      {
        firstName: "Liam",
        lastName: "Williams",
        average: 58,
        studentId: "191",
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 75,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 98,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 53,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 27,
          },
        ],
      },
      {
        firstName: "Ava",
        lastName: "Johnson",
        average: 78,
        studentId: "771",
        studentAssignment: [
          {
            assignmentName: "Dichotomous Key",
            assignmentDescription:
              "Create a dichotomous key to classify different types of leaves.",
            score: 66,
          },
          {
            assignmentName: "Solar System Model",
            assignmentDescription:
              "Build a scale model of the solar system, including all planets and their relative distances from the Sun.",
            score: 58,
          },
          {
            assignmentName: "Chemical Reactions",
            assignmentDescription:
              "Investigate and document three chemical reactions that produce noticeable changes.",
            score: 13,
          },
          {
            assignmentName: "Ecosystem Research",
            assignmentDescription:
              "Choose an ecosystem and research its components, interactions, and the importance of biodiversity within it.",
            score: 97,
          },
        ],
      },
    ],
  },
];

export default function App() {
  const [currentTeacher, setCurrentTeacher] = useState(undefined);
  const [currentStudent, setCurrentStudent] = useState(undefined);
  function determineGradeColor(grade) {
    return {
      backgroundColor:
        grade <= 100 && grade >= 85
          ? "#3d6c48"
          : grade <= 84 && grade >= 75
          ? "#b39b00"
          : grade <= 74 && grade >= 0
          ? "#a00000"
          : "red",
    };
  }
  //
  return (
    <>
      <Nav
        currentTeacher={currentTeacher}
        setCurrentTeacher={setCurrentTeacher}
      />
      <Headers />
      <AllStudents
        determineGradeColor={determineGradeColor}
        currentTeacher={currentTeacher}
        setCurrentStudent={setCurrentStudent}
      />
      <DisplayInterface
        currentStudent={currentStudent}
        determineGradeColor={determineGradeColor}
      />
      <AssignmentInfo />
    </>
  );
}

function DisplayInterface({ currentStudent, determineGradeColor }) {
  return (
    <section className="displayInterface">
      {currentStudent ? (
        <div className="interfaceDisplay">
          <div className="studentID">
            <p>student id:</p>
            <p>{currentStudent.studentId}</p>
          </div>
          <div className="name">
            <p>{currentStudent.firstName}</p>
            <p>{currentStudent.lastName}</p>
          </div>
          <div className="studentAverage">
            <p>student avg:</p>
            <p>{currentStudent.average}</p>
          </div>
          <div className="entry">
            <p>Entry</p>
          </div>
          <div className="assignment">
            <p>Assignment</p>
          </div>
          <div className="grade">
            <p>Grade</p>
          </div>
          <div className="assignmentContainer">
            {currentStudent.studentAssignment.map((assignmentObj, index) => (
              <div className="specificAssignment">
                <div className="entryNumber">
                  <p>{index + 1}</p>
                </div>
                <div className="specificAssignmentInfo">
                  <div>
                    <p>{assignmentObj.assignmentName}</p>
                  </div>
                  <p>{assignmentObj.assignmentDescription}</p>
                </div>
                <div className="assignmentGrade">
                  <p style={determineGradeColor(assignmentObj.score)}>
                    {assignmentObj.score}
                  </p>
                  <p>A+</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

function AllStudents({
  currentTeacher,
  setCurrentStudent,
  determineGradeColor,
}) {
  function handleCurrentStudent(obj) {
    setCurrentStudent((prev) => {
      return currentTeacher.allStudents.find(
        (studentObj) => studentObj === obj
      );
    });
  }
  return (
    <section className="allStudents">
      {currentTeacher ? (
        currentTeacher.allStudents.map((obj, index) => (
          <div
            style={determineGradeColor(obj.average)}
            className="specificStudent"
            key={index}
            onClick={() => handleCurrentStudent(obj)}
          >
            <div className="specificStudentContainer">
              <p className="specificStudentFirstName">{obj.firstName}</p>
              <p className="specificStudentLastName">{obj.lastName}</p>
              <p className="specificStudentScore">{obj.average}</p>
            </div>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </section>
  );
}

function Headers() {
  return (
    <>
      <div className="students">
        <p>Students</p>
      </div>
      <div className="interface">
        <button className="interfaceButon">Interface</button>
      </div>
      <div className="manageAssignment">
        <button className="assignmentsButton">Assignments</button>
      </div>
      <div className="menu">
        <p>Menu</p>
      </div>
    </>
  );
}

function Nav({ currentTeacher, setCurrentTeacher }) {
  const [userName, setUserName] = useState("");
  const [pin, setPin] = useState("");
  function handleUserName(value) {
    setUserName(value);
  }
  function handlePin(value) {
    setPin(value);
  }
  function handleLogin(e) {
    e.preventDefault();
    const newArr = data.find((obj) => obj.userName === userName);
    console.log(newArr);
    if (newArr) {
      if (newArr.userPin === Number(pin)) {
        setCurrentTeacher(newArr);
      } else {
        setCurrentTeacher(undefined);
        alert("Wrong credentials");
      }
    } else {
      setCurrentTeacher(undefined);
      alert("Wrong credentials");
    }
    setUserName("");
    setPin("");
  }
  function handleLogout() {
    setCurrentTeacher(undefined);
  }
  return (
    <nav className="topMenu">
      <div className="logoContainer">
        <img src="aida.png" alt="logo" />
        <p>AIDA</p>
      </div>
      {currentTeacher ? (
        <div class="loggedIn">
          <p>Welcome, {currentTeacher.teacherName}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form className="login" onSubmit={(e) => handleLogin(e)}>
          <input
            type="text"
            className="userName"
            placeholder="user name"
            onChange={(e) => {
              handleUserName(e.target.value);
            }}
            value={userName}
          />
          <input
            type="text"
            className="userPin"
            placeholder="pin"
            onChange={(e) => handlePin(e.target.value)}
            value={pin}
          />
          <button className="loginButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3rem"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </form>
      )}
    </nav>
  );
}

function AssignmentInfo() {
  return (
    <section className="assignmentInfo">
      <div className="specificAssignmentMenu">
        <p>Assignment Name</p>
        <div className="specificStats">
          <p>avg:</p>
          <p>87</p>
        </div>
      </div>
      <div className="listOfStudents">
        <div className="studentNameAssignment">
          <div className="studentName">
            <p>Jade</p>
            <p>Pineda</p>
          </div>
          <input type="text" />
        </div>
      </div>
    </section>
  );
}
