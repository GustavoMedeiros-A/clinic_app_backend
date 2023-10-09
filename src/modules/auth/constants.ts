import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: 'secret_key',
};
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
