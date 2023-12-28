import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  getUsers() {
    return this.userRepository.find();
  }
  createUser(user: { name: string }) {
    this.userRepository.create(user);
    return this.userRepository.save(user);
  }
}
