import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";

@Component({
  selector: 'app-single-org-tree',
  templateUrl: './single-org-tree.component.html',
  styleUrls: ['./single-org-tree.component.scss']
})
export class SingleOrgTreeComponent implements OnInit{
  drop = true
  parentChildRelation:any
  ngOnInit() {
     this.parentChildRelation = [
      { from: 7, to: 1, template: 'blue', label: 'Reporting Head' },
      { from: 6, to: 1, template: 'blue', label: 'Reporting Head' },

    ]
    const tree = document.getElementById('tree');
    if (tree) {
      OrgChart.CLINK_CURVE = 1.5;
      var chart = new OrgChart(tree, {
        nodeBinding: {
          field_0: "name",
          img_0: "img"
        },
        enableDragDrop: this.drop,
        mode: 'dark',
        siblingSeparation: 100,
        levelSeparation: 150,
     
        template: "belinda",
        editForm: {
          saveAndCloseBtn: 'save',
          cancelBtn: 'cancel',
          // readOnly: true,
          buttons: {
            share: null,
            pdf: null
          }
        },
        align: OrgChart.align.center,
        mouseScrool: OrgChart.action.scroll,
        clinks: this.parentChildRelation,
        // mouseScrool: OrgChart.action.none,
      //  mouseScrool: OrgChart.action.ctrlZoom,

        toolbar: {
          layout: true,
          zoom: true,
          fit: true,
          expandAll: true
          
        }
      },
      );
      chart.onUpdateNode((args) => {
       console.log(args)
       
    });
    


      let nodeData = [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg",'Reporting Head': 'Denny Curtis' },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg", 'Reporting Head': 'Denny Curtis' },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg", 'Reporting Head': 'Ashley Barnett' },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg", 'Reporting Head': 'Ashley Barnett' },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg", 'Reporting Head': 'Caden Ellison,Denny Curtis' },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg", 'Reporting Head': 'Caden Ellison,Denny Curtis' },
        // { id: 7, pid: 1, name: "Fran1 Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }

      ];

      chart.load(nodeData);
      chart.onDrop((res) => {
        console.log(res)
      })
      chart.onNodeClick((res) => {
        // console.log(res)
        // console.log(res.node.id)
        // const data = { id: res.node.id, pid: 2, name: "Rahul Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" }
        // const curr_id = res.node.id
        // const ans = chart.get(2)
        // console.log(ans)
      })


    }


  }

}
