import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/services/patientService/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit{
  id: string = '';
  patientData: any;
  allergies: any[] = [];
  symptoms: any[] = [];
  diseases: any[] = [];
  treatments: any[] = [];
  medicines: any[] = [];
  history: any[] = [];
  observations: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) {}
    
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = params["id"];
        this.patientData = history.state.patientData;
      }
    ); 

    this.allergies = this.getDataIntoAnArray(this.patientData.allergies);
    this.symptoms = this.getDataIntoAnArray(this.patientData.symptoms);
    this.diseases = this.getDataIntoAnArray(this.patientData.diseases);
    this.treatments = this.getDataIntoAnArray(this.patientData.treatments);
    this.medicines = this.getDataIntoAnArray(this.patientData.medicines);
    this.history = this.getDataIntoAnArray(this.patientData.history);
    this.observations = this.getDataIntoAnArray(this.patientData.observations);
  }

  getDataIntoAnArray(input: string): any {
    return input.split(',').map(item => item.trim());
  }
}