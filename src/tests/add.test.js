const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;



test('should add two numbers', () => {
   const result = add(3,4); 
   expect(result).toBe(7);  //like assert in python
});

test('should display Ed', () => {
   const result = generateGreeting('Ed');
   expect(result).toBe('Hello Ed!');
});

test('should generate greeting for no name', () => {
   const result = generateGreeting();
   expect(result).toBe('Hello Anonymous!');
});