import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    exports: [
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule
    ]
})

export class HeaderModule {}