import { Component, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Keyboard } from '@capacitor/keyboard';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { ModalRegistrationAcceptancesComponent } from 'src/app/components/modals/modal-registration-acceptances/modal-registration-acceptances.component';
import { UtilsHelper } from 'src/app/helpers/utils.helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  public messages: any[] = [];

  public typing: boolean;

  public typingClass: string;

  public value: string;

  public step: number;

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#4A246D' });
      StatusBar.setStyle({ style: Style.Dark });
      NavigationBar.setColor({ color: '#4A246D', darkButtons: false });
      Keyboard.addListener('keyboardWillShow', () => this.scrollToBottom());
    }

    this.step1();

  }

  ionViewDidLeave() {
    
    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#FAFAFA' });
      StatusBar.setStyle({ style: Style.Light });
    }

  }

  public send() {

    this.messages.push({
      class: 'chat-right top',
      text: this.value
    });

    this.scrollToBottom();

    this.typingClass = 'typing top';

    this.typing = true;

    if (this.step == 1) {
      this.step2();
    }

    else if (this.step == 2) {
      this.step3();      
    }

    else if (this.step == 3) {
      this.step4();
    }

  }

  private step1() {

    this.step = 1;

    this.typing = true;

    this.typingClass = 'typing top';

    this.value = '';

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left top',
        text: 'Olá! 😊'
      });

      this.typingClass = 'typing';

      this.scrollToBottom();

    }, 1000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Que bom ver você aqui!'
      });

      this.scrollToBottom();

    }, 2000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Vamos começar o seu cadastro'
      });

      this.scrollToBottom();

    }, 4000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Por favor, informe seu nome'
      });

      this.typing = false;

      this.scrollToBottom();

    }, 6000);

  }

  private step2() {

    this.step = 2;

    this.typing = true;

    this.typingClass = 'typing top';

    this.value = '';

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left top',
        text: 'Você vai precisar de um email e senha para acessar sua conta'
      });

      this.typingClass = 'typing';

      this.scrollToBottom();

    }, 1000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Por isso, informe seu email'
      });

      this.typing = false;

      this.scrollToBottom();

    }, 2500);

  }

  private step3() {

    this.typing = true;

    this.typingClass = 'typing top';

    if (UtilsHelper.validateEmail(this.value)) {

      this.step = 3;

      this.value = '';

      setTimeout(() => {
        
        this.messages.push({
          class: 'chat-left top',
          text: 'Agora é só criar uma senha segura'
        });

        this.typingClass = 'typing';

        this.scrollToBottom();

      }, 1000);

      setTimeout(() => {
        
        this.messages.push({
          class: 'chat-left',
          text: 'Informe uma senha'
        });

        this.typing = false;

        this.scrollToBottom();

      }, 2500);

    }

    else {

      setTimeout(() => {
        
        this.messages.push({
          class: 'chat-left top',
          text: 'Ops! 🤔'
        });

        this.typingClass = 'typing';

        this.scrollToBottom();

      }, 1000);

      setTimeout(() => {
        
        this.messages.push({
          class: 'chat-left',
          text: 'Este email não é valido'
        });

        this.scrollToBottom();

      }, 2000);

      setTimeout(() => {
        
        this.messages.push({
          class: 'chat-left',
          text: 'Por favor, informe um email válido'
        });

        this.typing = false;

        this.scrollToBottom();

      }, 3500);

    }

  }

  private step4() {

    this.step = 4;

    this.typing = true;

    this.typingClass = 'typing top';

    this.value = '';

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Finalizando... 🥰'
      });

      this.scrollToBottom();

      this.typing = false;

    }, 1000);

    setTimeout(async () => {

      const modal = await this.modalCtrl.create({
        component: ModalRegistrationAcceptancesComponent,
        backdropDismiss: false,
        cssClass: 'registration-acceptances'
      });

      modal.onDidDismiss().then(() => this.navCtrl.navigateRoot('/home'));
  
      return await modal.present();

    }, 1500);

  }

  private scrollToBottom() {
    setTimeout(() => this.content.scrollToBottom(500), 200);
  }

}
