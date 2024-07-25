import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonItemSliding,
  IonLabel, IonItemOptions, IonItemOption, IonButton, IonToast, IonFab, IonFabButton, IonIcon,
  IonText
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Grocery } from '../grocery';
import { GroceryserviceService } from '../groceryservice.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { ModalInputComponent } from '../modal-input/modal-input.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem,
    IonItemSliding, IonLabel, IonItemOptions, IonItemOption, IonButton, IonToast,
    IonFab, IonFabButton, IonIcon, IonText, CommonModule],
})


export class Tab1Page {

  _groceryList: Grocery[] = [];
  _title: string = "Grocery List";

  constructor(private groceryServiceService: GroceryserviceService,
    private toastController: ToastController,
    private modalCtrl: ModalController) {

    this._groceryList = groceryServiceService.getGroceryList();

  }


  async deleteItem(grocery: Grocery, index: number) {
    if (index > -1) {
      this.presentToast(this._groceryList[index], 'Deleted', 'bottom');
      this.groceryServiceService.deleteGrocery(this._groceryList[index]);

    }
  }

  /*using a moodal because the alert select list was not working.
  This is not using a service as described in the material, but is more similar to toast.  
  The interwebs (stackoverflow) pointed me to modals as a solution.
  */
  async addWithModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInputComponent
    });
    modal.present();

  }

  /*using a moodal because the alert select list was not working.
  This is not using a service as described in the material, but is more similar to toast.  
  The interwebs (stackoverflow) pointed me to modals as a solution.
  */
  async editWithModal(grocery: Grocery, index: number, slider: IonItemSliding) {
    const modal = await this.modalCtrl.create({
      component: ModalInputComponent,
      componentProps: {
        _grocery: grocery,
        _index: index
      }
    });
    modal.present();
    slider.close();  
  }


  async presentToast(grocery: Grocery, action: string, position: 'top' | 'middle' | 'bottom') {

    let name = grocery.getName();

    try {
      const toast = await this.toastController.create({
        message: name + ' - ' + action,
        duration: 1500,
        position: position

      });

      await toast.present();

    } catch (error) {
      console.error('Error presenting toast: ', error);
    }
  }


}
