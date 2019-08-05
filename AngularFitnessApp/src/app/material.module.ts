import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
} from '@angular/material';

/* THIS MODULE IS USED TO MANAGE ALL MATERIAL COMPONENTS */

@NgModule({
    imports : [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule
    ],
    exports : [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {}