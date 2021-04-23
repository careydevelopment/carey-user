import { InjectionToken } from '@angular/core';
import { UserConfig } from './user-config';

export const USER_CONFIG_TOKEN = new InjectionToken<UserConfig>('USER_CONFIG');
