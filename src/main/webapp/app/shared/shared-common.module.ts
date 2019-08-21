import { NgModule } from '@angular/core';

import { JhipsterDemo01SqlServerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JhipsterDemo01SqlServerSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterDemo01SqlServerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterDemo01SqlServerSharedCommonModule {}
