import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Issue } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  issues: Issue[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(): void {
    this.appService.getIssues().subscribe({
      next: data => {
      this.issues = data;
      console.log(data);
      },
    });
  }

  createIssue(): void {
    const newIssue = { id: '3', title: 'New Issue', description: 'New Issue Description' };
    this.appService.createIssue(newIssue).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
  }

  updateIssue(): void {
    const updatedIssue = { id: '3', title: 'Updated Issue', description: 'Updated Description' };
    this.appService.updateIssue(updatedIssue).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  deleteIssue(): void {
    this.appService.deleteIssue('3').subscribe({
      next: (res) => {
        this.getIssues();
      },
    });
  }
}
