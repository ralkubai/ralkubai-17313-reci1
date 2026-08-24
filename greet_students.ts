function greetStudents(names: string[], minLength: number): void {
    for (const name of names) {
      if (name.length >= minLength) {
        console.log(`Hello, ${name}! Your name is long enough.`);
      } else {
        console.log(`Hello, ${name}!`);
      }
    }
  }
  
  const students: string[] = ["Alice", "Bob", "Charlie", "David"];
  greetStudents(students, 5);