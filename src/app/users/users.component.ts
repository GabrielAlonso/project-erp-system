import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../components/template/dialog/dialog.component';

import { ModalComponent } from '../components/template/modal/modal.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      height: '500px',
      width: '800px',
      data: {
        title: 'Add',
      },
    });
  }


  openDialogDelete() {
    this.dialog.open(DialogComponent, {
      height: '200px',
      width: '400px',
      data: {
        animal: 'panda',
      },
    });
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , actions: ''},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' , actions: ''},
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'  , actions: ''},
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , actions: ''},
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , actions: ''},
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , actions: ''},
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , actions: ''},
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , actions: ''},
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , actions: ''},
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , actions: ''},
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' , actions: ''},
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' , actions: ''},
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' , actions: ''},
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' , actions: ''},
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' , actions: ''},
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' , actions: ''},
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' , actions: ''},
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' , actions: ''},
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' , actions: ''},
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' , actions: ''},
];
