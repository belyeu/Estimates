import { EstimateService } from '../../services/estimate.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Estimate } from '../../models/estimate';
import {Component,OnInit, Input} from'@angular/core';

@Component({
    selector: 'estimate-detail',
   templateUrl :'./app/components/estimateDetail/estimate-detail.component.html'
})
export class EstimateDetailComponent implements OnInit{
    @Input() estimate: Estimate;
    newEstimate = false;
    error: any;
    navigated = false;

    constructor(
        private estimateService:EstimateService,
        private route: ActivatedRoute){

        }        
        
        ngOnInit(){
            
            this.route.params.forEach((params:Params) =>{
                let id = params['id'];
                if(id === 'new'){                    
                    this.newEstimate = true;
                    this.estimate = new Estimate();
                
                } else {
                this.newEstimate = false;
                this.estimateService.getEstimate(id)
                    .then(estimate => this.estimate = estimate);
                }    
            });
        }

        save(){
            this.estimateService
            .save(this.estimate)
            .then(estimate =>{
                this.estimate = estimate;
                this.goBack();
            })
            .catch(error => this.error = error);
        }
        goBack(){
            window.history.back();
        }
}

    
