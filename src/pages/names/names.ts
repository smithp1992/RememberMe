import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import _ from 'lodash';
import {AddNamePage} from "../add-name/add-name";
import {LocalStorageDirective} from "../../directives/local-storage/local-storage";
import {NameProfilePage} from "../name-profile/name-profile";

@Component({
  selector: 'page-names',
  templateUrl: 'names.html',
})
export class NamesPage {

  names: any[];

  constructor(private navCtrl: NavController,
              private localStorage: LocalStorageDirective) {
  }

  ionViewDidEnter() {
    this.localStorage.get('Names').then((result: any) => {
      this.names = (_.isArray(result) ? result : []);
    });
  }

  getFirstLetter(value) {
    return _.toLower(_.head(value));
  }

  addName() {
    this.navCtrl.push(AddNamePage);
  }

  nameProfile(name) {
    this.navCtrl.push(NameProfilePage, {
      name: name
    });
  }

}