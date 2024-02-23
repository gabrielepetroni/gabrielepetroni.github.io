import { NgModule } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { IonContent } from  '@ionic/angular/standalone';


@NgModule({
    declarations: [],
    imports: [IonCard,
         IonCardContent, 
         IonCardHeader,
         IonCardTitle,
         IonCardSubtitle,
            IonContent],
    exports: [
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonContent
    ]
})
export class IonicModule {}