import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/core/projects.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: any[];
  newProjectName: string;
  constructor(private projectService: ProjectsService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.token.subscribe(() => this.getProjects());
  }

  getProjects() {
    this.projectService.getProjects().subscribe((x: any[]) => {
      this.projects = x;
    })
  }

  addProject() {
    this.projectService.addProject(this.newProjectName).subscribe(
      x => {
        this.getProjects();
      }
    )
  }

}
