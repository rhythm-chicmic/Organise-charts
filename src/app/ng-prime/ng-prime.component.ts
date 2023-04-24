import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
@Component({
  selector: 'app-ng-prime',
  templateUrl: './ng-prime.component.html',
  styleUrls: ['./ng-prime.component.scss']
})
export class NgPrimeComponent {
  selectedNodes!: TreeNode[];

  data: TreeNode[] = [
      {
          expanded: true,
          type: 'person',
          styleClass: 'bg-indigo-500 text-black',
          data: {
              image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1',
              name: 'Amy Elsner',
              title: 'CEO'
          },
          children: [
              {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-purple-500 text-black',
                  data: {
                      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1',
                      name: 'Anna Fali',
                      title: 'CMO'
                  },
                  children: [
                      {
                          label: 'Sales'
                      },
                      {
                          label: 'Marketing'
                      }
                  ]
              },
              {
                  expanded: true,
                  type: 'person',
                  styleClass: 'bg-teal-500 text-black',
                  data: {
                      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1',
                      name: 'Stephen Shaw',
                      title: 'CTO'
                  },
                  children: [
                      {
                          label: 'Development'
                      },
                      {
                          label: 'UI/UX Design'
                      }
                  ]
              }
          ]
      }
  ];
}