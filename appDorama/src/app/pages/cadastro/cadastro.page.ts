import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DoramaService } from '../service/dorama-service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    doramaForm: FormGroup;

    constructor(
      private builder: FormBuilder,
      private nav: NavController,
      private doramaService: DoramaService
    ) { }

    ngOnInit() {
      this.initForm();
    }
    private initForm(){
      this.doramaForm = this.builder.group({
        dorama: ['', [Validators.required]],
        descricao: ['', [Validators.required]],
        categoria: ['', [Validators.required]],
        tipo: ['', [Validators.required]],
        dorama_assistido: ['', [Validators.required]]

    });
    }

    

    novoDorama(){
      const dorama = this.doramaForm.value;

      this.doramaService.criarDorama(dorama)
      .then( () => this.nav.navigateForward('home'));
    }

    cancelar(){
      this.doramaForm.get('dorama').setValue('');
      this.doramaForm.get('descricao').setValue('');
      this.doramaForm.get('categoria').setValue('');
      this.doramaForm.get('tipo').setValue('');
      this.doramaForm.get('dorama_assistido').setValue(false);
      this.nav.navigateForward('home');
    }

  }

