import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() projectName: string;
  @Input() projectSubtitle: string;
  @Input() projectTasks: any[] = [
    {description: 'Task 1', isActive: true },
    {description: 'Task 2', isActive: false },
    {description: 'Task 3', isActive: true },
    ]; 
  tasksSelected: string[];
  newTask: string;
  constructor() { }

  ngOnInit(): void {
  }

  tasksTodo() {
    return this.projectTasks.filter(f => f.isActive);
  }

  tasksDone() {
    return this.projectTasks.filter(f => !f.isActive);
  }

  onRemove(item) {
    console.log(item)
    this.projectTasks = this.projectTasks.filter(f => f.description !== item.description);
  }

  onDone() {
    this.tasksSelected.forEach(description => {
      const taskIdx = this.projectTasks.findIndex(f => f.description === description);
      this.projectTasks[taskIdx] = { ...this.projectTasks[taskIdx], isActive: false };
    })
  }

  addTask() {
    this.projectTasks = [ ...this.projectTasks, { description: this.newTask, isActive: true }]
  }

}
