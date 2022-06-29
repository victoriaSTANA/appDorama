import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DoramaService } from '../service/dorama-service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listDoramas;

  constructor(
    private doramaService: DoramaService,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/semi
    this.doramaService.listarTodosDoramas().subscribe(x => {this.listDoramas = x});
  }

  novoDorama(){
    this.navCtrl.navigateForward('cadastro');
  }

  // edit(id: any){
  //   this.router.navigateByUrl(`/editar/${id}`);
  // }

  async delete(dorama: any){
    this.doramaService.remove(dorama);
  }

}
