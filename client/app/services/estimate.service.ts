import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Estimate} from "../models/estimate";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EstimateService {

    private EstimateUrl = 'api/Estimates';

constructor( private http: Http) { }

getEstimates(): Promise<Estimate[]> {
   
    return this.http.get(this.EstimateUrl)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
}

getEstimate(id:string){
    return this.http.get(this.EstimateUrl + '/' +id)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);

}
save(estimate: Estimate): Promise<Estimate>{
    if(estimate._id){
        return this.put(estimate);
        }
        return this.post(estimate);
    }




private post(estimate:Estimate): Promise<Estimate>{
let headers = new Headers({
    'Content-Type': 'application/json'
});
return this.http
.post(this.EstimateUrl, JSON.stringify(estimate), {headers:headers})
.toPromise()
.then(response => response.json())
.catch (this.handleError);
}

private put(estimate: Estimate){
    let headers = new Headers();
    headers.append('Contact-Type', 'applicatin/json');

    let url = `${this.EstimateUrl}/${estimate._id}`;
    
    return this.http
    .put(url, JSON.stringify(estimate), {headers: headers})
    .toPromise()
    .then(() => estimate)
    .catch(this.handleError);
}
    delete(estimate:Estimate){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.EstimateUrl}/${estimate._id}`;

        return this.http
        .delete(url, headers)
        .toPromise()
        .catch(this.handleError);
    }
    private handleError(error:any){
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
