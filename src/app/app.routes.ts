import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    {
        path: "",
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }
]