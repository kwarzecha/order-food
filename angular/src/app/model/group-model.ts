import {UserModel} from './user-model';

export class GroupModel {
  id: number;
  name: string;
  owner_id: number;
  owner: UserModel;
}