import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() projectId: string;
  @Input() projectName: string;
  @Input() projectSubtitle: string;
  @Input() projectTasks: any[]; 

  tasksSelected: string[];
  newTask: string;
  
  constructor(private projectService: ProjectsService) { }

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
      this.projectService.desactiveProjectTask(description, this.projectId).subscribe((project:any) => {
        this.projectTasks = project?.tasks;
      })
    })
  }

  addTask() {
    this.projectService.addProjectTask(this.newTask, this.projectId).subscribe((project: any) => {
      this.projectTasks = project?.tasks;
    })
  }

}
