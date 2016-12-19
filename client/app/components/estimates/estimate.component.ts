import { Contact } from './../../models/contact';
import { Router } from '@angular/router';
import { Estimate } from '../../models/estimate';
import { EstimateService } from './../../services/estimate.service';
import { AppComponent } from './../../app.component';
import{Component, OnInit} from '@angular/core';


@Component({

    selector: 'estimates',
  templateUrl:'../app/components/estimates/estimate.component.html'

})
export class EstimateComponent implements OnInit {

Estimates: Estimate[];
selectedEstimate: Estimate;
error: any;

constructor(
    private router: Router,
    private estimateService: EstimateService){}

    getEstimates(){
       
        this.estimateService.getEstimates()
        .then(Estimates => this.Estimates = Estimates);
    }
    ngOnInit(){
        this.getEstimates();
    }
    OnSelect(estimate:Estimate){
        this.selectedEstimate = estimate;
    }
    gotoDetail(){
        this.router.navigate(['/estDetail', this.selectedEstimate._id]);
    }
    addEstimate(){
        this.selectedEstimate = null;
        this.router.navigate(['/estDetail', 'new']);
    }
    deleteEstimate(estimate: Estimate, event:any){
        event.stopPropagation();
        this.estimateService
        .delete(estimate)
        .then(res => {
            this.Estimates = this.Estimates.filter(h => h !== estimate);
            if(this.selectedEstimate === estimate){ this.selectedEstimate = null; }   
     })
     .catch(error => this.error = error);
    }
}
        