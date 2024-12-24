import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAllUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.json(users);
  };

  public getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getById(Number(id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  };

  public createUser = async (req: Request, res: Response) => {
    const newUser = await this.userService.create(req.body);
    return res.status(201).json(newUser);
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedUser = await this.userService.update(Number(id), req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(updatedUser);
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const success = await this.userService.delete(Number(id));
    if (!success) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
  };
}
