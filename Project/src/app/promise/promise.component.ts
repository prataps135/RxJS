import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {
  promiseValue!: string;

  dellAvailable() {
    return false;
  }

  hpAvailable() {
    return true;
  }

  dell = {
    Brand: 'Dell',
    Storage: '512GB SSD',
    Modal: 'Slim 3'
  }

  hp = {
    Brand: 'HP',
    Storage: '1TB HDD',
    Modal: 'Inspiron'
  }

  notAvil = {
    Brand: 'Not Available',
    Status: 'Failed'
  }

  ngOnInit(): void {
    // let buyLaptop = new Promise(function (resolve, reject) {
    //   resolve('Promise Resolved')
    // });

    // let decision: boolean = true;

    let buyLaptop: Promise<any> = new Promise((resolve, reject) => {
      // if (decision) {
      //   resolve('Promise Resolved');
      // } else {
      //   reject('Promise Rejected');
      // }

      if (this.dellAvailable()) {
        setTimeout(() => {
          // resolve('Dell Purchased!!!');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        setTimeout(() => {
          // resolve('HP Purchased!!!');
          resolve(this.hp);
        }, 3000);
      } else {
        setTimeout(() => {
          // reject('Laptop not available!!!');
          reject(this.notAvil);
        }, 3000);
      }
    })

    buyLaptop.then(res => {
      console.log(res);
      this.promiseValue = res;
    }).catch(res => {
      console.log(res);
      this.promiseValue = res;
    });
  }



  // myFunction(){
  //   console.log('MyFunction Called!!!');
  // }

}
