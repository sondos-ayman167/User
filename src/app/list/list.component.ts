import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    imports: [CommonModule, FormsModule]  
})
export class ListComponent {
    searchQuery: string = '';
    users = [
{

      "id": 1,
      "age": 50,
      "email": "atuny0@sohu.com",
      "phone": "+63 791 675 8914",
      "username": "atuny0",
      "password": "9uQFF1Lh",
      "birthDate": "2000-12-25",
      "image": "https://robohash.org/hicveldicta.png",
      "is_verified": true
    },
    {
      "id": 2,
      "age": 28,
      "email": "hbingley1@plala.or.jp",
      "phone": "+7 813 117 7139",
      "username": "hbingley1",
      "password": "CQutx25i8r",
      "birthDate": "2003-08-02",
      "image": "https://robohash.org/doloremquesintcorrupti.png",
      "is_verified": false
    },
    {
      "id": 3,
      "age": 38,
      "gender": "male",
      "email": "rshawe2@51.la",
      "phone": "+63 739 292 7942",
      "username": "rshawe2",
      "password": "OWsTbMUgFc",
      "birthDate": "1992-12-30",
      "image": "https://robohash.org/consequunturautconsequatur.png",
      "is_verified": false
    },
    {
      "id": 4,
      "age": 49,
      "gender": "male",
      "email": "yraigatt3@nature.com",
      "phone": "+86 461 145 4186",
      "username": "yraigatt3",
      "password": "sRQxjPfdS",
      "birthDate": "1969-01-16",
      "image": "https://robohash.org/facilisdignissimosdolore.png",
      "is_verified": true
    },
    {
      "id": 5,
      "age": 38,
      "gender": "male",
      "email": "kmeus4@upenn.edu",
      "phone": "+372 285 771 1911",
      "username": "kmeus4",
      "password": "aUTdmmmbH",
      "birthDate": "1968-11-03",
      "image": "https://robohash.org/adverovelit.png",
      "is_verified": true
    },
    {
      "id": 6,
      "age": 21,
      "gender": "female",
      "email": "jtreleven5@nhs.uk",
      "phone": "+351 527 735 3642",
      "username": "jtreleven5",
      "password": "zY1nE46Zm",
      "birthDate": "1969-07-21",
      "image": "https://robohash.org/laboriosamfacilisrem.png",
      "is_verified": true
    },
    {
      "id": 7,
      "age": 31,
      "gender": "female",
      "email": "dpettegre6@columbia.edu",
      "phone": "+62 640 802 7111",
      "username": "dpettegre6",
      "password": "YVmhktgYVS",
      "birthDate": "1982-02-21",
      "image": "https://robohash.org/cupiditatererumquos.png",
      "is_verified": false
    },
    {
      "id": 8,
      "age": 29,
      "gender": "male",
      "email": "ggude7@chron.com",
      "phone": "+86 946 297 2275",
      "username": "ggude7",
      "password": "MWwlaeWcOoF6",
      "birthDate": "1964-08-24",
      "image": "https://robohash.org/quiaharumsapiente.png",
      "is_verified": false
    },
    {
      "id": 9,
      "age": 22,
      "gender": "male",
      "email": "nloiterton8@aol.com",
      "phone": "+86 356 590 9727",
      "username": "nloiterton8",
      "password": "HTQxxXV9Bq4",
      "birthDate": "1971-03-11",
      "image": "https://robohash.org/excepturiiuremolestiae.png",
      "is_verified": false
    },
    {
      "id": 10,
      "age": 37,
      "gender": "female",
      "email": "umcgourty9@jalbum.net",
      "phone": "+60 184 408 0824",
      "username": "umcgourty9",
      "password": "i0xzpX",
      "birthDate": "1958-08-11",
      "image": "https://robohash.org/aliquamcumqueiure.png",
      "is_verified": true
    },
    {
      "id": 11,
      "age": 39,
      "gender": "male",
      "email": "acharlota@liveinternet.ru",
      "phone": "+967 253 210 0344",
      "username": "acharlota",
      "password": "M9lbMdydMN",
      "birthDate": "1961-09-12",
      "image": "https://robohash.org/impeditautest.png",
      "is_verified": false
    },
    {
      "id": 12,
      "age": 42,
      "gender": "female",
      "email": "rhallawellb@dropbox.com",
      "phone": "+380 962 542 6549",
      "username": "rhallawellb",
      "password": "esTkitT1r",
      "birthDate": "1990-12-14",
      "image": "https://robohash.org/namquaerataut.png",
      "is_verified": false
    },
    {
      "id": 13,
      "age": 26,
      "gender": "male",
      "email": "lgribbinc@posterous.com",
      "phone": "+1 609 937 3468",
      "username": "lgribbinc",
      "password": "ftGj8LZTtv9g",
      "birthDate": "1967-07-23",
      "image": "https://robohash.org/voluptatemsintnulla.png",
      "is_verified": true
    },
    {
      "id": 14,
      "age": 21,
      "gender": "male",
      "email": "mturleyd@tumblr.com",
      "phone": "+94 912 100 5118",
      "username": "mturleyd",
      "password": "GyLnCB8gNIp",
      "birthDate": "1979-08-25",
      "image": "https://robohash.org/quisequienim.png",
      "is_verified": false
    },
    {
      "id": 15,
      "age": 26,
      "gender": "female",
      "email": "kminchelle@qq.com",
      "phone": "+86 581 108 7855",
      "username": "kminchelle",
      "password": "0lelplR",
      "birthDate": "1996-02-02",
      "image": "https://robohash.org/autquiaut.png",
      "is_verified": true
    },
    {
      "id": 16,
      "age": 41,
      "gender": "female",
      "email": "dpierrof@vimeo.com",
      "phone": "+420 833 708 0340",
      "username": "dpierrof",
      "password": "Vru55Y4tufI4",
      "birthDate": "1963-07-03",
      "image": "https://robohash.org/porronumquamid.png",
      "is_verified": true
    },
    {
      "id": 17,
      "age": 43,
      "gender": "male",
      "email": "vcholdcroftg@ucoz.com",
      "phone": "+420 874 628 3710",
      "username": "vcholdcroftg",
      "password": "mSPzYZfR",
      "birthDate": "1975-10-20",
      "image": "https://robohash.org/accusantiumvoluptateseos.png",
      "is_verified": false
    },
    {
      "id": 18,
      "age": 42,
      "gender": "male",
      "email": "sberminghamh@chron.com",
      "phone": "+55 886 766 8617",
      "username": "sberminghamh",
      "password": "cAjfb8vg",
      "birthDate": "1958-02-05",
      "image": "https://robohash.org/nihilharumqui.png",
      "is_verified": false
    },
    {
      "id": 19,
      "age": 46,
      "gender": "male",
      "email": "bleveragei@so-net.ne.jp",
      "phone": "+86 886 889 0258",
      "username": "bleveragei",
      "password": "UZGAiqPqWQHQ",
      "birthDate": "1989-10-15",
      "image":"https://robohash.org/delenitipraesentiumvoluptatum.png",
      "is_verified": true
    },
    {
      "id": 20,
      "age": 41,
      "gender": "female",
      "email": "aeatockj@psu.edu",
      "phone": "+1 904 601 7177",
      "username": "aeatockj",
      "password": "szWAG6hc",
      "birthDate": "1980-01-19",
      "image": "https://robohash.org/ipsumutofficiis.png",
      "is_verified": false
    }];
    filteredUsers = [...this.users];

    filterUsers() {
        this.filteredUsers = this.users.filter(user => 
            user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    }

  }
  
