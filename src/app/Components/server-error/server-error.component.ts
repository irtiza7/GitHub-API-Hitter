import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss'],
})
export class ServerErrorComponent implements OnInit {
  errorMsg: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.setErrorMsg();
  }

  setErrorMsg() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const msg: string | null = params.get('msg');
      this.errorMsg = msg as string;
    });
  }

  onBackButtonClick() {
    this.router.navigate(['search-user']);
  }
}
