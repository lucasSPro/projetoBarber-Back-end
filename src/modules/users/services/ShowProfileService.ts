import { injectable, inject } from 'tsyringe';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
}

@injectable()
class ShowProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    return this.usersRepository.save(user);
  }
}

export default ShowProfileService;
