import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskService } from '../../services/task.service';
import {
  CdkDragDrop,
  CdkDragStart,
  moveItemInArray,
  transferArrayItem,
  CdkDragHandle,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table', { static: true }) table!: MatTable<any>;

  constructor(
    private dialog: MatDialog,
    private service: TaskService,
    private toastr: ToastrService
  ) { }

  displayedColumns: string[] = [
    'check',
    'id',
    'title',
    'description',
    'status',
    'priority',
    'dueDate',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  dragDisabled = true;


  ngOnInit(): void {
    this.getTaskList();
  }

  addTask() {
    const dialogRef = this.dialog.open(TaskFormComponent);
    dialogRef.afterClosed().subscribe((res: boolean) => {
    });
  }

  getTaskList() {
    this.service.taskCart.subscribe((res: Array<object>) => {
      if (res) {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteTask(id: number) {
    this.service.deleteTask(id);
    this.toastr.success('Task Deleted !');
  }

  openTaskForm(data: object) {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      window.location.reload();
    });
  }

  setAll(completed: boolean, data: object) {
    if (completed) {
      this.service.editTask({ ...data, status: 'Completed' });
      this.toastr.success('Task Completed !');
    } else {
      this.service.editTask({ ...data, status: 'Pending' });
    }
  }



  drop(event: CdkDragDrop<any>) {
    // Return the drag container to disabled.
    this.dragDisabled = true;

    const previousIndex = this.dataSource.data.findIndex(
      (d: object) => d === event.item.data
    );

    moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
}
