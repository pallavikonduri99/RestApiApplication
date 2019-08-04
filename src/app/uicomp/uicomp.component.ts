import { UpdateServiceService } from './../update-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-uicomp',
  templateUrl: './uicomp.component.html',
 styleUrls: ['./uicomp.component.css']

})
export class UICompComponent implements OnInit {

  updateForm: FormGroup;
  errorMessage:string;
  trainingdays:string;

  formConfig: any = [
    {type: 'text', name: 'trainingname', label: 'training Name'},
    {type: 'date', name: 'startdate', label: 'startdate'},
    {type: 'date', name: 'enddate', label: 'enddate'}
    ];

 constructor(private router:Router,private service: UpdateServiceService, 
   private builder: FormBuilder, private actRouter :ActivatedRoute) {

  this.updateForm = this.builder.group({});
 }

 ngOnInit() {
     this.actRouter.params.subscribe(param => {
       this.errorMessage=param['msg'];
     });
     this.formConfig.forEach(element => {
         this.updateForm.addControl(element.name, new FormControl('', {}));
     });
 }

 validate() {
   console.log(this.updateForm.value);
  // const uname = this.updateForm.controls.name.value;
   //const phone = this.updateForm.controls.phone.value;
   /*if(uname == '')
   {
    this.errorMessage='Name Cannot be empty';     
   }
   else if(phone ==''){
     this.errorMessage='Phone no cant be empty';
   }*/
   //else
   {
      this.service.updateData(this.updateForm.value).then(response=>this.errorMessage=response.toString());
      this.trainingdays="No ofTraining Days: "+this.getDateDiff(this.updateForm.controls.enddate.value,this.updateForm.controls.startdate.value);
this.errorMessage="saved successfully";


      //this.errorMessage="JSON.stringify(this.updateForm)";

   }
 }
 getDateDiff(date2:string, date1:string)
 {
  var oneDay = 24*60*60*1000;
  return Math.round(Math.abs(new Date(date2).getTime() - new Date(date1).getTime())/(oneDay));
 }
}
