const adventurer = {
    name: 'Alice',
    dog: { name: 'Dinah'}};
  
  const dogName = adventurer.dog?.adventurer
  console.log(dogName);
  // expected output: undefined