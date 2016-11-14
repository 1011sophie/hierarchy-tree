import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HierarchyTreeComponent } from './hierarchy-tree.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HierarchyTreeComponent],
  bootstrap: [AppComponent, HierarchyTreeComponent]
})
export class AppModule { }
