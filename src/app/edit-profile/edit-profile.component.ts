import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ideactivate } from '../services/can.deactivate.guarc.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  standalone: true,
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit, Ideactivate {
  user = {
    id: '',
    name: '',
  };

  editUserDetails = {
    id: '',
    name: '', 
  };
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.data.subscribe((data) => {
      console.log(data)
      this.user = {
        id: data['id'],
        name: data['name'],
      };

      this.editUserDetails = { ...this.user };
    });
  }

  canExit() {
    if (confirm('Are you sure you want to exit')) {
      return true;
    }
    return false;
  }
}
