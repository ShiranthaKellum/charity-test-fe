import { Component } from '@angular/core';
import { Patient } from '../../model/patient';
import { PatientService } from 'src/app/services/patientService/patient.service';
import { PageUtilService } from 'src/app/services/pageUtilService/page-util.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent {
  constructor(
    private patientService: PatientService,
    private pageUtilService: PageUtilService
  ) {}
  submitted: boolean = false;
  patient: Patient = {
    name: '',
    age: '',
    gender: '',
    country: '',
    height: '',
    weight: '',
    heartRate: '',
    bloodPressure: '',
    sugarLevel: '',
    allergies: '',
    symptoms: '',
    diseases: '',
    treatments: '',
    medicines: '',
    history: '',
    observations: '',
  };
  addPatient(): void {
    const data = {
      name: this.patient.name,
      age: this.patient.age,
      gender: this.patient.gender,
      country: this.patient.country,
      height: this.patient.height,
      weight: this.patient.weight,
      heartRate: this.patient.heartRate,
      bloodPressure: this.patient.bloodPressure,
      sugarLevel: this.patient.sugarLevel,
      allergies: this.patient.allergies,
      symptoms: this.patient.symptoms,
      diseases: this.patient.diseases,
      treatments: this.patient.treatments,
      medicines: this.patient.medicines,
      history: this.patient.history,
      observations: this.patient.observations
    }
    this.patientService.create(data).subscribe({
      next: res => {
        console.log("Submission responce: ", res);
        this.submitted = true;
        this.pageUtilService.reloadPage();
      },
      error: e => console.log("Submission error: ", e)
    });
  }
}
