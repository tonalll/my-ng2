import {Component,EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES,Control,ControlGroup} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>`
})
export class AppComponent {
}

@Component({
    selector: 'my',
    template: "<h1>hello word!</h1>"
})

export class AppComponent2 {
}

@Component({
    selector: 'mobanAd',
    properties: ['trurOrFalse'],
    events:['click'],
    template: '<p *ngIf="trurOrFalse==true">如果trurOrFalse为true我才会显示</p>'
})
export class mobanAd {
  public click=new EventEmitter();
}
;
@Component({
    selector:'myswitch',
    properties:['sarr'],
    template:'<div [ngSwitch]="sarr"><template [ngSwitchWhen]="1"><span>1</span></template><template [ngSwitchWhen]="2"><span>2</span></template></div>'
})
export class myswitch{};

@Component({
    selector:'myfor',
    template:`<div *ngFor="#item of myitems;#i=index">{{item+"-----"+i}}</div>`
})
export class myfor {
    public myitems;
    constructor(){
        this.myitems=['a','b','c'];
    }
}

// 模板
@Component({
    selector: 'moban',
    directives: [mobanAd,myswitch,myfor],
    template: `<div>
                	<h1 (click)='clickFunction()' #titleDom>{{title}}</h1>
                    <div>
                    	<span (click)="titleDom.textContent='asdf'">{{obj.date}}</span> 来源：<span></span>
                    </div>
                    <mobanAd [trurOrFalse]="true" (click)='clickclick()'></mobanAd>
                    <myswitch [sarr]="1"></myswitch>
                    <myfor></myfor>
                </div>
                `
})
export class Moban {
    public title:string = '我是标题';
    public obj = {date: '我是日期'};
    public clickFunction():void {
        this.title = '我是标题--';
        console.info('标题被点击了');
    }
    public clickclick(){
      // alert();
      console.info('--mobanAd点击事件触发了');
    }
}

@Component({
  selector:'sousuo',
  directives:[FORM_DIRECTIVES],
  template:`<form #f="ngForm" (submit)='search(f.value)'>
  <select [(ngModel)]='data.select' ngControl='select'>
  <option value='value1'>选项一</option>
  <option value='value2'>选项二</option>
  <option value='value3'>选项三</option>
  </select>
  <input type='text' ngControl="kw" #input (keyup)='change(input.value)' [(ngModel)]='data.tex_t1'/>
  <input ngControl='text' type='text' ngModel='data.text' />
  <button type='submit'>搜索</button>

  <ul ngControlGroup="expertise">
                     <li>英语：<input type="checkbox" ngControl="english"></li>
                     <li>科技：<input type="checkbox" ngControl="tech"></li>
                     <li>运动：<input type="checkbox" ngControl="sport"></li>
                   </ul>
  </form>
  <div *ngIf="kw!=''">正在搜索{{kw}}...</div>
  <div>{{kw2}}...</div>
  <pre>表单数据{{decode(f.value)}}---</pre>
  <pre>data数据{{decode(data)}}---</pre>
  <div>控件/Control是Angular2中对表单输入元素的抽象，我们使用其value属性，就可以获得对应的 输入元素的值。
与NgControlName指令的另一个区别是，NgFormControl不需要NgForm或NgFormModel的祖先。</div>
  <ul>
                    	<!--将输入元素绑定到已经创建的控件对象-->
                    	<li>姓名：<input type="text" [(ngFormControl)]="name"></li>
                    	<li>地址：<input type="text" [(ngFormControl)]="address"></li>
                    	<li>电话：<input type="text" [(ngFormControl)]="telephone"></li>
                    </ul>
                    <pre>表单数据{{dump()}}---</pre>
                    <div [(ngFormModel)]="controls">
                	<ul>
                    	<li>姓名：<input type="text" ngControl="name"></li>
                    	<li>地址：<input type="text" ngControl="address"></li>
                    	<li>电话：<input type="text" ngControl="telephone"></li>
                    </ul>
                </div>
                <pre>{{decode(controls.value)}}</pre>
  `
})
export class Sousuo {
  public kw;
  public kw2;
  //创建控件对象
public constructor() {
  this.kw='';
  console.info(this.kw);
  }
  public name = new Control("Jason");

  public address = new Control("London U.K.");

  public telephone = new Control("114");

public data:any={
  text:'asdf'
}
public controls = new ControlGroup({
                	name : new Control("Jason--"),
                    address : new Control("London U.K."),
                    telephone : new Control("114")
                });
  public search(val):void{
    this.kw=val.kw;
    setTimeout(()=>this.kw='',30000);
  }
  public change(val){
    this.kw2=val;
    console.info(val);
  }
  public decode(val){
            	return JSON.stringify(val,null,"\t");
            }
  public dump(){
            	//读取控件对象的值
            	var val = {
                	name : this.name.value,
                    address : this.address.value,
                    telephone : this.telephone.value
                }
            	return JSON.stringify(val,null,"\t");
            }
}
















//;
