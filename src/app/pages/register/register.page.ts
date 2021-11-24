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

  public placeholder: string;

  public mask: string;

  public value: string;

  public maxlength: number;

  constructor() { }

  ngOnInit() {

    if (Capacitor.isNativePlatform()) {
      StatusBar.setBackgroundColor({ color: '#0a0a0a' });
      StatusBar.setStyle({ style: Style.Dark });
      NavigationBar.setColor({ color: '#0a0a0a', darkButtons: false });
    }

    this.step1();

  }

  public step1() {

    this.typing = true;

    this.typingClass = 'typing top';

    this.placeholder = 'Digite o número do seu CPF'

    this.mask = '000.000.000-00';

    this.maxlength = 14;

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

  public sendCPF() {

    this.messages.push({
      class: 'chat-right top',
      text: this.value
    });

    this.scrollToBottom();

    this.typingClass = 'typing top';

    this.typing = true;

    if (UtilsHelper.validateDocumentNumber(this.value)) {

      this.placeholder = 'Digite o número do seu CPF'

      this.mask = '000.000.000-00';

      this.maxlength = 14;

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

  private scrollToBottom() {
    setTimeout(() => this.content.scrollToBottom(500), 200);
  }

}
