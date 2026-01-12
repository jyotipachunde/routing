import { NgModule} from "@angular/core";
import { HomedashComponent } from "../homedash/homedash.component";
import { ProductsdashComponent } from "../productsdash/productsdash.component";
import { UsersdashComponent } from "../usersdash/usersdash.component";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes=[
    {
        path:'home',
        component:HomedashComponent
    },
     {
        path:'products',
        component:ProductsdashComponent
    },
     {
        path:'users',
        component:UsersdashComponent
    },
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ]

})

export class ApproutingModule{

}