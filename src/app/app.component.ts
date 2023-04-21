import { Component, OnInit } from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'orgChart';
  
  ngOnInit() {
    const tree = document.getElementById('tree');
    if (tree) {
        var chart = new OrgChart(tree, {
            nodeBinding: {
            field_0: "name",
            img_0: "img"
            },
            enableDragDrop:true,
          
          
        },
       
    
        );
        let nodeData= [
          { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
          { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
          { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
          { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
          { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
          { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
          { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ];

         chart.load(nodeData);
        chart.onDrop((res)=>{
          console.log(res)
        })
        chart.onNodeClick((res)=>{
          console.log(res)
          console.log(res.node.id)
          const data = { id: res.node.id, pid: 2, name: "Rahul Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" }
          const curr_id=res.node.id
         const ans = chart.get(2)
         console.log(ans)
        })
       
    }
    
}

}
