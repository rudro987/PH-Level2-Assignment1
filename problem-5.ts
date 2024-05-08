{
  // Problem 5

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  const calculateAverageGrade = (student : Student) : number => {

    const avgGrade = student.grades.reduce((totalGrade, currentGrade) => totalGrade + currentGrade,0) / student.grades.length;

    return avgGrade;
  };

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);

  console.log(averageGradeForBob);





}
