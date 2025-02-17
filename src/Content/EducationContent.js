const Education = {
  key: 1,
  name: "The City College of New York",
  major: "Bachelor of Science in Computer Science",
  gpa: "3.72",
  year: "2018-2022",
  relevant_course:
    "Data Structure, Algorithms, Software Design Lab, Probability & Statistics for Computer Science, Introduction to Database Systems, Software Engineering, Programming Language Paradigms, Topics in Software Engineering, Image Processing",
  school: true,
};

const ExtraEducation = {
  key: 2,
  school: false,
  name: "CodePath",
  description: [
    {
      key: "1",
      content:
        "Attended 12-week program during the spring semester which involved designing android applications that are similar to Flixster, Twitter and Instagram.",
    },
    {
      key: "2",
      content:
        "Attended 12-week program during summer to prepare, review and solve challenging algorithms problems.",
    },
  ],
};

export { Education, ExtraEducation };
