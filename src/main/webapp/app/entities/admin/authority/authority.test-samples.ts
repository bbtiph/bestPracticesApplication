import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7bdf39e6-5f17-442f-aed4-ff544cae19cb',
};

export const sampleWithPartialData: IAuthority = {
  name: '2059716a-98fc-4e6e-94d3-f60b2c788c0c',
};

export const sampleWithFullData: IAuthority = {
  name: '9df8be39-081e-447e-81d2-f342c7fcec35',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
