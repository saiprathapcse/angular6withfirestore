import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatCardModule,MatProgressSpinnerModule,MatFormFieldModule,MatInputModule } from '@angular/material';


@NgModule({
    imports: [CommonModule, MatToolbarModule, MatButtonModule,MatCardModule,MatProgressSpinnerModule,
        MatInputModule, MatFormFieldModule],
    exports: [CommonModule, MatToolbarModule, MatButtonModule,MatCardModule ,MatProgressSpinnerModule,
        MatInputModule, MatFormFieldModule],
})
export class CustomMaterialModule { }