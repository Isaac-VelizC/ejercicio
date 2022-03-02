import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { MascotasComponent } from "./components/mascotas/mascotas.component";
import { FormComponent } from "./components/mascotas/form/form.component";

const routes: Routes = [
    { path: '', component:MascotasComponent},
    { path: 'form', component:FormComponent},
    { path: 'edit/:id', component:FormComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }

/**
 * el nuevo femenismo es una filosofia predominante, 
 * que enfatiza la creencia, una complementariedas intergral de hombre y mujres, y una misma dignidad para ambos
 */