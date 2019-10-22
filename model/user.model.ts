export class User {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;

  constructor(id, firstName, lastName, email, avatar) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.avatar = avatar
  }
}
