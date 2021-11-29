import { Component, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavigationBar } from '@hugotomazi/capacitor-navigation-bar';
import { IonContent } from '@ionic/angular';
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

  constructor() { }

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#4A246D' });
      StatusBar.setStyle({ style: Style.Dark });
      NavigationBar.setColor({ color: '#4A246D', darkButtons: false });
    }

    this.step1();

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

      if (UtilsHelper.validateDocumentNumber(this.value)) {

        this.step2();

      }
      
      else {

        setTimeout(() => {

          this.typingClass = 'typing';
        
          this.messages.push({
            class: 'chat-left top',
            text: 'Ops!'
          });

          this.scrollToBottom();
      
        }, 1000);

        setTimeout(() => {
        
          this.messages.push({
            class: 'chat-left',
            text: 'O número que você digitou não é um CPF válido'
          });

          this.scrollToBottom();
    
        }, 2500);

        setTimeout(() => {
        
          this.messages.push({
            class: 'chat-left',
            text: 'Por favor, digite um número de CPF válido'
          });

          this.typing = false;

          this.scrollToBottom();
    
        }, 4000);

      }

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

      console.log(this.content)
      
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
        text: 'Sua conta será atrelada ao seu CPF.'
      });

      this.scrollToBottom();

    }, 4000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Por isso, digite o número do seu CPF.'
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

      console.log(this.content)
      
      this.messages.push({
        class: 'chat-left top',
        text: 'Digite seu nome completo'
      });

      this.typingClass = 'typing';

      this.typing = false;

      this.scrollToBottom();

    }, 1000);

  }

  private step3() {

    this.step = 3;

    this.typing = true;

    this.typingClass = 'typing top';

    this.value = '';

    setTimeout(() => {

      console.log(this.content)
      
      this.messages.push({
        class: 'chat-left top',
        text: 'Quase lá! 😉'
      });

      this.typingClass = 'typing';

      this.scrollToBottom();

    }, 1000);

    setTimeout(() => {
      
      this.messages.push({
        class: 'chat-left',
        text: 'Você vai precisar de um email para acessar sua conta'
      });

      this.scrollToBottom();

    }, 2000);

    setTimeout(() => {

      console.log(this.content)
      
      this.messages.push({
        class: 'chat-left',
        text: 'Digite o seu email'
      });

      this.typing = false;

      this.scrollToBottom();

    }, 3500);

  }

  private step4() {

    this.step = 4;

    this.typing = true;

    this.typingClass = 'typing top';

    this.value = '';

    setTimeout(() => {

      console.log(this.content)
      
      this.messages.push({
        class: 'chat-left top',
        text: 'Cadastre uma senha para acessar sua conta'
      });

      this.typingClass = 'typing';

      this.scrollToBottom();

    }, 1000);

    setTimeout(() => {

      console.log(this.content)
      
      this.messages.push({
        class: 'chat-left',
        text: 'Digite uma senha'
      });

      this.typing = false;

      this.scrollToBottom();

    }, 2500);

  }

  private scrollToBottom() {
    setTimeout(() => this.content.scrollToBottom(500), 200);
  }

}
