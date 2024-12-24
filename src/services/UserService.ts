import { IUser } from '../types/IUser';

export class UserService {
  private users: IUser[] = [];
  private currentId = 1;

  public getAll(): IUser[] {
    return this.users;
  }

  public getById(id: number): IUser | undefined {
    return this.users.find((user) => user.id === id);
  }

  public create(data: Omit<IUser, 'id'>): IUser {
    const newUser: IUser = {
      id: this.currentId++,
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  public update(id: number, data: Partial<IUser>): IUser | undefined {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) return undefined;

    const updatedUser = { ...this.users[userIndex], ...data };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  public delete(id: number): boolean {
    const userIndex = this.users.findIndex((u) => u.id === id);
    if (userIndex === -1) return false;

    this.users.splice(userIndex, 1);
    return true;
  }
}
