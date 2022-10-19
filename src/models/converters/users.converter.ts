import UsersOutput from '../dto/output/users.output';
import UserEntity from '../entities/user.entity';

export default class UsersConverter {
  entityToOutput(entity: UserEntity): UsersOutput {
    const output = new UsersOutput();

    output.id = entity.id;
    output.name = entity.username;
    output.active = entity.active;
    output.createdAt = entity.createdAt;
    output.updatedAt = entity.updatedAt;
    return output;
  }
}
