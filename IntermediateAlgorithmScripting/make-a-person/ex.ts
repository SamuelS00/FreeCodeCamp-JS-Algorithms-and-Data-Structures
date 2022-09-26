export default class Person {
  private firstName: string = this.firstAndLast.split(' ')[0];
  private lastName: string = this.firstAndLast.split(' ')[1];

  constructor(private firstAndLast: string) { }

  getFirstName() {
    return this.firstName;
  };

  getLastName() {
    return this.lastName
  };

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  };

  setFirstName(newFirstName: string): void {
    this.firstName = newFirstName;
  };

  setLastName(newLastName: string): void {
    this.lastName = newLastName;
  }
  
  setFullName(newFullName: string): void {
    this.firstAndLast = newFullName;
  }
};
