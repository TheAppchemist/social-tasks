import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import {Task} from '../../models/task'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks: Array<Task> = []
  state = 'todo'

  constructor(public navCtrl: NavController, private alertController: AlertController, 
    private toastController: ToastController) {

  }

  addTask() {
    let alert = this.alertController.create({
      title: 'New Task',
      inputs: [
        {
          name: 'task',
          placeholder: 'Task'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            this.saveTask(data['task'])
          }
        },
        'Cancel'
      ]
    })

    alert.present()
  }

  saveTask(task) {
    let toastMessage = ''
    if (task.trim().length == 0) {
      toastMessage = 'You cannot create an empty task'
    } else {
      this.tasks.push(task)
      toastMessage = 'Task added successfully'
    }

    let toast = this.toastController.create({
      message: toastMessage,
      duration: 3000
    })

    toast.present()
  }

}
