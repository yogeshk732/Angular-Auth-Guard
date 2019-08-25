<h1>Auth Guard</h1>

1) Create auth guard service in src->app folder with name auth-guard.service.ts
2) import this file in router module.
<code>import { AuthGuardService as AuthGuard } from '@services/auth/auth-guard.service';</code>
3) Then, use in routesUrl:
<code>
{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
}
</code>
