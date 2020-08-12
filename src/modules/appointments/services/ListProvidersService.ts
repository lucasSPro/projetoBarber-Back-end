import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import IUserRepository from '@modules/users/repositories/IUsersRepository';
// import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';
import { classToClass } from 'class-transformer';

interface IRequest {
  user_id: string;
}

@injectable()
class ListProviderService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User[]> {
    const cacheKey = `providers-list:${user_id}`;
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${user_id}`,
    );
    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });
      await this.cacheProvider.save(cacheKey, classToClass(users));
    }

    return users;
  }
}

export default ListProviderService;
