import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { GetAllPatientsComponent } from './components/get-all-patients/get-all-patients.component';

const routes: Routes = [
  { path: '', component: AddPatientComponent },
  { path: 'addPatient', component: AddPatientComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'get-all-patients', component: GetAllPatientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
