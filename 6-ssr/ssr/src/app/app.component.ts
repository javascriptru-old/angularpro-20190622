import { Component, OnInit, PLATFORM_ID, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TransferState, makeStateKey } from "@angular/platform-browser";
import { isPlatformServer } from "@angular/common";

const TOTAL_COUNT = makeStateKey("total_count");

@Component({
  selector: "app-root",
  template: `
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/admin">Admin</a>
      <a routerLink="/lazy">Lazy</a>
    </nav>
    <router-outlet></router-outlet>
    <br />
    <h1>{{ data.total_count }}</h1>
  `
})
export class AppComponent implements OnInit {
  public data: { total_count: number } = { total_count: 0};

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private http: HttpClient,
    private state: TransferState
  ) {
    console.log(platformId);
  }

  ngOnInit() {


    //if (isPlatformServer(this.platformId)) {
      this.http
      .get("https://api.github.com/search/users?q=angular")
      .subscribe((data: { total_count }) => {
        this.data = data;
        this.state.set(TOTAL_COUNT, data);
      });
    //}

    this.data = this.state.get(TOTAL_COUNT, { total_count: 0 });

    // if (!this.state.hasKey(TOTAL_COUNT)) {
    //   this.data = this.state.get(TOTAL_COUNT, { total_count: 0 });
    // }
  }
}
