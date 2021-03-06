"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var services_barrel_1 = require('./services.barrel');
var models_1 = require('./models');
var PerformanceChartComponent = (function () {
    function PerformanceChartComponent(as, pd) {
        var _this = this;
        this.as = as;
        this.pd = pd;
        this.subscription = this.as.account$.subscribe(function () { return _this.updateChartData(); });
    }
    PerformanceChartComponent.prototype.ngOnInit = function () {
        this.updateChartData();
        this.chartType = 'LineChart';
        this.chartOptions = {
            height: 400,
            title: 'performance',
            legend: {
                position: 'bottom'
            },
            curveType: 'function'
        };
    };
    PerformanceChartComponent.prototype.updateChartData = function () {
        var _this = this;
        //console.log(`in updateChartData account:${this.as.Account.isAggregate}`);
        var num = this.as.Account.ID == null ? 50 : this.as.Account.ID;
        var i = 3;
        var chartData = [
            //['Year', 'Sales'],
            ['Asset', 'Amount'],
            ['A', num ^= i++],
            ['B', num ^= i++],
            ['C', num ^= i++],
            ['D', num ^= i++],
            ['E', num ^= i++]];
        this.pd.getPerformancePerResolution(this.as.Account, models_1.Resolution.last12Monthes).then(function (i) { _this.chartData = chartData; });
    };
    PerformanceChartComponent = __decorate([
        core_1.Component({ selector: 'performance-chart', moduleId: module.id, templateUrl: './performance-chart.component.html' }), 
        __metadata('design:paramtypes', [services_barrel_1.AccountService, services_barrel_1.PerformanceDataService])
    ], PerformanceChartComponent);
    return PerformanceChartComponent;
}());
exports.PerformanceChartComponent = PerformanceChartComponent;
//# sourceMappingURL=performance-chart.component.js.map