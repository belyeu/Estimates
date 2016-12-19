/**
 * Created by Mason Belyeu 12.1.2016
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Estimate} from "../../models/estimate";
import {EstimateService} from "../../services/estimate.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    Estimates: Estimate[] = [];

    constructor(
        private router: Router,
        private estimateService: EstimateService) {
    }

    ngOnInit() {
        this.estimateService.getEstimates()
            .then(Estimates => this.Estimates = Estimates);
    }

    gotoDetail(estimate: Estimate) {
        let link = ['/estDetail', estimate._id];
        this.router.navigate(link);
    }
}