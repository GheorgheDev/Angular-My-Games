import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { MainPageService } from '../../services/main-page.service';
import { User } from 'src/app/interfaces/user.interface';
import { Game } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  userIdLogged: string = '';
  userLogged: User | undefined;
  dataSource!: MatTableDataSource<Game>;
  displayedColumns: string[] = ['Title', 'Release Year', 'Developer', 'Genre'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private mainPageService: MainPageService, private router: Router) { }

  ngOnInit(): void {
    this.userIdLogged = localStorage.getItem('userId') || '';

    this.mainPageService.getUser(this.userIdLogged)
      .subscribe(data => {
        this.userLogged = data;
        const { games } = this.userLogged as User;
        this.dataSource = new MatTableDataSource(games);
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  logOut(event: Event): void {
    event.preventDefault();
    localStorage.clear();
    this.router.navigate(['']);
  }
}