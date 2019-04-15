import { Injectable } from '@angular/core';
import { AccountModel } from './../model/data.model';

@Injectable()

export class GetFinanceData {
    private ACCOUNTDATA: AccountModel[] = [
        { account: 'IRA - 5200', totalAmount: 5763.36, net: 8916.69, percent: 0.08,  change: 'negative' },
        { account: 'REG - 2019', totalAmount: 13465679.34, net: 0.00, percent: 0.00, change: 'zero' },
        { account: 'AAA - 3810', totalAmount: 1050054.07, net: 8916.69, percent: 0.07, change: 'positive' },
        { account: 'IRA - 0146', totalAmount: 15884302.39, net: 7430.83, percent: 0.21, change: 'positive' },        
        { account: 'AAA - 1812', totalAmount: 2010926.10, net: 38881.63, percent: 0.21, change: 'positive' },        
        { account: 'AAA - 0029', totalAmount: 39160334.42, net: 31435.87, percent: 0.07, change: 'negative' }        
    ];
    
    getAccountsMock(): AccountModel[] {
        return this.ACCOUNTDATA;
    }
}