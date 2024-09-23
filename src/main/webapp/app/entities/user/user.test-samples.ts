import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 30901,
  login: '@',
};

export const sampleWithPartialData: IUser = {
  id: 9604,
  login: 'o',
};

export const sampleWithFullData: IUser = {
  id: 25055,
  login: 'KDn',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
