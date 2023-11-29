import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchCriteria } from "../models/table/search-criteria.model";
import { TableResponse } from "../models/table/table-response.model";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = environment.server + "api/";
  constructor(private http: HttpClient) {}

  public get(
    serviceName: string,
    serviceParams?: any
  ): Observable<TableResponse> {
    let params: HttpParams = new HttpParams().set("size", "10");

    if (serviceParams) {
      for (let key of Object.keys(serviceParams)) {
        params = params.set(key, serviceParams[key]);
      }

      if (!serviceParams.page) params = params.set("page", "0");
    }

    return this.http.get<TableResponse>(this.apiUrl + serviceName, {
      params
    });
  }

  public busca( serviceName: string, serviceParams?: any ): Observable<TableResponse> {
    let params = this.setParams(serviceParams);
    return this.http.post<TableResponse>(`${this.apiUrl}${serviceName}/busca`, params.bodyParams,
      { params: params.headerParams }
    );
  }

  public postWithHeaders(serviceName: string, entity: any, headerParams: any) {
    return this.http.post(this.apiUrl + serviceName, entity, {
      params: headerParams
    });
  }

  public post(serviceName: string, entity: any) {
    return this.http.post(this.apiUrl + serviceName, entity);
  }

  public put(serviceName: string, entity: any) {
    return this.http.put(this.apiUrl + serviceName + "/" + entity.id, entity);
  }

  public delete(serviceName: string, entity: any) {
    return this.http.delete(this.apiUrl + serviceName + "/" + entity.id);
  }

  public getSimple(serviceName: string, params?: any) {
    return this.http.get(this.apiUrl + serviceName, { params: params });
  }

  public getById(serviceName: string, id: number) {
    return this.http.get(this.apiUrl + serviceName + "/" + id);
  }

  public getFiltros(serviceName: string, serviceParams?: any) {
    let params = this.setParams(serviceParams);
    return this.http.post(
      this.apiUrl + "filtros/" + serviceName,
      params.bodyParams
    );
  }

  public listar(serviceName: string, serviceParams?: any) {
    let params = this.setParams(serviceParams);
    return this.http.post<TableResponse>(
      `${this.apiUrl}${serviceName}/listar`,
      params.bodyParams,
      { params: params.headerParams }
    );
  }

  public urlUploadAnexo(): string {
    return `${this.apiUrl}anexos`;
  }

  public setParams(serviceParams: any) {
    if (!serviceParams) serviceParams = {};
    let headerParams: HttpParams = new HttpParams().set(
      "size",
      serviceParams.size || "10"
    );
    let bodyParams: SearchCriteria[] = [];

    if (serviceParams) {
      for (let key of Object.keys(serviceParams)) {
        if (this.isSearchCriteria(key)) {
          let value = serviceParams[key];
          if (value === "true") value = true;
          if (value === "false") value = false;
          let operator = key.includes("not-") ? "<>" : ":";
          if (key.includes("not-")) key = key.replace("not-", "");
          let param = new SearchCriteria(key, operator, value);
          bodyParams.push(param);
        }
      }

      if (!serviceParams.page) headerParams = headerParams.set("page", "0");
      else headerParams = headerParams.set("page", serviceParams.page);
      if (serviceParams.sort)
        headerParams = headerParams.set("sort", serviceParams.sort);
      if (serviceParams.dateProp) {
        let dataInicial = new SearchCriteria(
          serviceParams.dateProp,
          ">",
          null,
          serviceParams.dataInicial
        );

        bodyParams.push(dataInicial);

        let dataFinal = new SearchCriteria(
          serviceParams.dateProp,
          "<",
          null,
          serviceParams.dataFinal || new Date()
        );

        bodyParams.push(dataFinal);
      }
    }

    return { headerParams: headerParams, bodyParams: bodyParams };
  }

  private isSearchCriteria(key: string): boolean {
    if (
      key !== "page" &&
      key !== "size" &&
      key !== "sort" &&
      key !== "dataInicial" &&
      key !== "dataFinal" &&
      key !== "dateProp"
    )
      return true;

    return false;
  }
}
