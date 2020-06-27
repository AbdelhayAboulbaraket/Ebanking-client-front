import { Component, OnInit, ViewChild } from '@angular/core';
import { Transfer } from '../../model/transfer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TransferService } from '../../service/transfer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.css'],
})
export class TransferListComponent implements OnInit {
  TRANSFERS: Transfer[];
  dataSource = new MatTableDataSource<Transfer>(this.TRANSFERS);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = [
    'debiteur',
    'creancier',
    'somme',
    'date',
    'actions',
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(
    private transferService: TransferService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.transferService.findAll().subscribe(
      (data) => {
        this.TRANSFERS = data;
        console.log(data);
        console.log(this.TRANSFERS);
        this.dataSource = new MatTableDataSource<Transfer>(this.TRANSFERS);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        this.dataSource = new MatTableDataSource<Transfer>(null);
      }
    );
  }
  checkSender(name: string) {
    console.log(sessionStorage.getItem('name'), name);
    if (sessionStorage.getItem('name') === name) {
      console.log('daba true');
      return true;
    }
    {
      console.log('daba false');
      return false;
    }
  }
}
