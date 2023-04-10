import { Routes } from "@angular/router";
import { SideNavigationComponent } from "./side-navigation/side-navigation.component";

export const AppRoutes: Routes = [
    {
        path: "",
        component : SideNavigationComponent,
        children: [
            {
                path : "",
                loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    }
]