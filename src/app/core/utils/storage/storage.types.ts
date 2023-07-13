type StorageObjectMap = {
  'valusoft/session': {
    token: string;
    refreshToken:string;
    refreshTokenExpiryTime: Date ;
    user: number | string;
    tenent: number | string;
    fullName: string | string;
    profileImage: string;
    emailAddress: string;
    role: string;
    clientName:string,
    clientId:string
  };
};
export type StorageObjectType = 'valusoft/session';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
