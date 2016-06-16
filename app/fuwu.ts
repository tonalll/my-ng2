import {Component,EventEmitter,Inject,Injectable} from 'angular2/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES,Control,ControlGroup} from 'angular2/common';
import {Http} from "angular2/http";
import {EzAlgo} from './class';

@Component({
  selector:'fuwu',
  directives:[FORM_DIRECTIVES],
  template : `
      <form>
            <input type="text" ngControl="a" [(ngModel)]="a">
              +
              <input type="text" ngControl="b" [(ngModel)]="b">
              =
              {{add()}}
          </form>`
})
        export class Fuwu{
           a; b; algo;band;
           constructor(@Inject(Http) http:Http){
            //  console.info(Injectable);
             	this.a = 37;
                 this.b = 128;
                 this.algo = new EzAlgo();

                this.band = {};
            	// http.get("api/music.json")//GET请求
                	// .map(rsp=>rsp.json())//将相应转化为JSON格式的数据集
                	// .subscribe(data=>this.band=data[0]);//设置band变量为数据集的第一项
            }
            //  Inject下面写法报错，上面可以，原因没找到。
          // public constructor(@Inject(EzAlgo) algo1:EzAlgo){
          //       this.a = 37;
          //          this.b = 128;
          //          this.algo = algo1;
          //      }
            public add(){
            	let a = +this.a,	b = +this.b;
            	return this.algo.add(a,b);
            }
        }
