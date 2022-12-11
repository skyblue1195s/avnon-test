import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidebarMenuComponent, MenuItemComponent],
  exports: [SidebarMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ]
})
export class LayoutModule { }
