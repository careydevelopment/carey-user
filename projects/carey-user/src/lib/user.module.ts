import { ModuleWithProviders, NgModule } from '@angular/core';
import { USER_CONFIG_TOKEN } from './model/token';
import { UserConfig } from './model/user-config';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
  static forRoot(config: UserConfig): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [{ provide: USER_CONFIG_TOKEN, useValue: config }]
    };
  }
}
