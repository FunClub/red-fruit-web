import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../../core/service/search.service';
import {SearchedUserInfo, User, UserCriterionInfo} from '../../../core/data/vo/user.data';
import {AreaData} from '../../../core/data/vo/area.data';
import {SharedService} from '../../../core/service/shared.service';
import {AgeRange, EducationRange, HeightRange, IncomeRange, Professions, WeightRange} from '../../../core/data/app.data';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PageComm} from '../../../core/data/dto/page-comm.data';
import {PagedInfo} from '../../../core/data/vo/paged-info.data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  /**
   * 用户条件信息
   */
  userCriterion:UserCriterionInfo;

  /**
   * 父级区域
   */
  parentAreas:Array<AreaData>;

  /**
   * 各种数据范围
   */
  heightRange:any;
  weightRange:any;
  professions:any;
  educationRange:any;
  incomeRange:any;
  ageRange:any;

  /**
   * 是否显示更多条件
   * @type {boolean}
   */
  showMoreCondition:boolean = false;

  /**
   * 搜索表单
   */
  searchForm:FormGroup;

  /**
   * 分页命令
   */
  page:PageComm;

  /**
   * 用户分页数据
   */
  pagedInfo:PagedInfo<SearchedUserInfo[]>;

  /**
   * 用户数组
   */
  users:SearchedUserInfo[];

  busy:any;
  constructor(private searchService:SearchService,private sharedService:SharedService,
              private formBuilder:FormBuilder
              ) {
    this.educationRange =EducationRange;
    this.incomeRange = IncomeRange;
    this.professions = Professions;
    this.ageRange = AgeRange;
    this.heightRange =HeightRange;
    this.weightRange = WeightRange;
    this.userCriterion = new UserCriterionInfo();
  }

  ngOnInit() {
    this.initForm();
    this.searchService.getUserCriterionInfo().subscribe(res=>{
      this.userCriterion = res.data;
      if(this.userCriterion.criterionParentArea==="-1"){
        this.userCriterion.criterionParentArea="-1-"
      }
      this.getParentArea();
      this.search();
    });
  }
  show(div:HTMLDivElement){


    console.log(window.innerHeight -div.getBoundingClientRect().top)
  }
  search(){
    let user = new UserCriterionInfo();
    Object.assign(user,this.userCriterion);
    if(!this.showMoreCondition){
      user.criterionHouseAvailable = "-1";
      user.criterionProfession = "-1";
      user.criterionWeight = "-1";
    }
    let pageComm = new PageComm();
    pageComm.condition = user;
    this.busy=this.searchService.getSearchedUserInfo(pageComm).subscribe(res=>{
       this.pagedInfo = res.data;
       this.users = this.pagedInfo.data;
    });
  }
  initForm(){
      this.searchForm = this.formBuilder.group({
        "criterionParentArea":[this.userCriterion.criterionParentArea,[],[]],
        "criterionAge":[this.userCriterion.criterionAge,[],[]],
        "criterionHeight":[this.userCriterion.criterionHeight,[],[]],
        "criterionIncome":[this.userCriterion.criterionIncome,[],[]],
        "criterionEducation":[this.userCriterion.criterionEducation,[],[]],
        "criterionHouseAvailable":[this.userCriterion.criterionHouseAvailable,[],[]],
        "criterionProfession":[this.userCriterion.criterionProfession,[],[]],
        "criterionWeight":[this.userCriterion.criterionWeight,[],[]],
      });

  }


  /**
   * 切换显示更多条件
   */
  toggleShowMoreCondition(){
    this.showMoreCondition = !this.showMoreCondition;
    this.search();
  }
  /**
   * 获取父级区域
   */
  getParentArea(){
    let area = new AreaData();
    area.name = "不填写";
    area.id="-1";
    area.short_name="";
    let nullAreas = [area];
    this.sharedService.getParentArea("0","1","34").subscribe(res=>{
      this.parentAreas = nullAreas.concat(res.data);

    });
  }
}
